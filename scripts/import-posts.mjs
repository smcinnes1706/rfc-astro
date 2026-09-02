import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const inputPath = resolve(root, 'Posts.csv');
const outputDir = resolve(root, 'src/content/news');
const dryRun = process.argv.includes('--dry-run');
const force = process.argv.includes('--force');

const requiredColumns = ['Excerpt', 'Slug', 'Plain Content', 'Rich Content', 'Published Date', 'Title'];
const csv = readFileSync(inputPath, 'utf8').replace(/^\uFEFF/, '');

function parseCsv(value) {
  const rows = [];
  let row = [];
  let field = '';
  let quoted = false;

  for (let index = 0; index < value.length; index += 1) {
    const character = value[index];
    const nextCharacter = value[index + 1];

    if (quoted) {
      if (character === '"' && nextCharacter === '"') {
        field += '"';
        index += 1;
      } else if (character === '"') {
        quoted = false;
      } else {
        field += character;
      }
    } else if (character === '"' && field.length === 0) {
      quoted = true;
    } else if (character === ',') {
      row.push(field);
      field = '';
    } else if (character === '\n') {
      row.push(field.replace(/\r$/, ''));
      if (row.some(cell => cell !== '')) rows.push(row);
      row = [];
      field = '';
    } else {
      field += character;
    }
  }

  if (field.length > 0 || row.length > 0) {
    row.push(field.replace(/\r$/, ''));
    if (row.some(cell => cell !== '')) rows.push(row);
  }

  return rows;
}

function yamlString(value) {
  return JSON.stringify(value ?? '');
}

function richContentToMarkdown(value) {
  if (!value) return '';

  let document;
  try {
    document = JSON.parse(value);
  } catch {
    return '';
  }

  function renderNodes(nodes, context = {}) {
    return (nodes ?? []).map(node => {
      const text = (node.nodes ?? [])
        .map(child => child.textData?.text ?? '')
        .join('')
        .trim();
      const children = renderNodes(node.nodes, context);

      switch (node.type) {
        case 'HEADING': {
          const level = Math.min(Math.max(node.headingData?.level ?? 2, 1), 6);
          return `${'#'.repeat(level)} ${text || children}`;
        }
        case 'BULLETED_LIST':
          return children.split('\n').filter(Boolean).map(line => line.startsWith('- ') ? line : `- ${line}`).join('\n');
        case 'ORDERED_LIST':
          return children.split('\n').filter(Boolean).map((line, index) => `${index + 1}. ${line.replace(/^[-*] /, '')}`).join('\n');
        case 'LIST_ITEM':
          return text || children;
        case 'PARAGRAPH':
        case 'BLOCKQUOTE':
          return node.type === 'BLOCKQUOTE' ? `> ${text || children}` : text || children;
        default:
          return text || children;
      }
    }).filter(Boolean).join('\n\n');
  }

  return renderNodes(document.nodes).trim();
}

function getPublishedDate(value, rowNumber) {
  const date = new Date(value);
  if (!value || Number.isNaN(date.getTime())) {
    throw new Error(`Row ${rowNumber}: invalid Published Date: ${value}`);
  }
  return date.toISOString().slice(0, 10);
}

const rows = parseCsv(csv);
if (rows.length === 0) throw new Error('Posts.csv contains no rows.');

const headers = rows.shift();
const columnIndex = Object.fromEntries(headers.map((header, index) => [header.trim(), index]));
for (const column of requiredColumns) {
  if (columnIndex[column] === undefined) throw new Error(`Missing required CSV column: ${column}`);
}

const articles = rows.map((row, index) => {
  const rowNumber = index + 2;
  const get = column => row[columnIndex[column]]?.trim() ?? '';
  const slug = get('Slug');
  const publishedDate = getPublishedDate(get('Published Date'), rowNumber);

  if (!slug) throw new Error(`Row ${rowNumber}: Slug is empty.`);

  const datePart = publishedDate.slice(0, 10);
  const filename = `${datePart}-${slug}.md`;
  const richContent = richContentToMarkdown(get('Rich Content'));
  const content = (richContent || get('Plain Content')).replace(/\r\n/g, '\n').trim();
  const article = `---\ntitle: ${yamlString(get('Title'))}\ndate: ${yamlString(publishedDate)}\nauthor: ${yamlString('Admin')}\ncategory: ${yamlString('')}\nexcerpt: ${yamlString(get('Excerpt'))}\n---\n\n${content}\n`;

  return { filename, article };
});

const duplicateNames = articles
  .map(article => article.filename)
  .filter((filename, index, names) => names.indexOf(filename) !== index);
if (duplicateNames.length > 0) {
  throw new Error(`Duplicate generated filename(s): ${[...new Set(duplicateNames)].join(', ')}`);
}

const existingNames = articles
  .map(article => article.filename)
  .filter(filename => existsSync(resolve(outputDir, filename)));
if (existingNames.length > 0 && !force && !dryRun) {
  throw new Error(`Refusing to overwrite existing file(s): ${existingNames.join(', ')}. Re-run with --force if intended.`);
}

if (dryRun) {
  console.log(`Would create ${articles.length} article(s) in ${outputDir}`);
  if (existingNames.length > 0) {
    console.log(`Would overwrite ${existingNames.length} existing file(s) with --force.`);
  }
  console.log(articles.slice(0, 5).map(article => `- ${article.filename}`).join('\n'));
} else {
  mkdirSync(dirname(resolve(outputDir, 'placeholder')), { recursive: true });
  for (const article of articles) {
    writeFileSync(resolve(outputDir, article.filename), article.article, 'utf8');
  }
  console.log(`Created ${articles.length} article(s) in ${outputDir}`);
}
