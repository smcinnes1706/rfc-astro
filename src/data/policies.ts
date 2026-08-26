export interface PolicyDocument {
  title: string;
  description: string;
  filename: string; // path relative to /public, e.g. /documents/safeguarding-policy.pdf
  category: 'safeguarding' | 'conduct' | 'equality' | 'general';
  updated: string; // YYYY-MM-DD
}

export const policyDocuments: PolicyDocument[] = [
  {
    title: 'Safeguarding & Child Protection Policy',
    description: 'Our full safeguarding policy covering child protection, DBS requirements and reporting procedures.',
    filename: '/documents/rfc-safeguarding-policy.pdf',
    category: 'safeguarding',
    updated: '2026-01-01',
  },
  {
    title: 'FA Respect Code of Conduct — Players',
    description: 'The FA Respect Code of Conduct for players at all levels.',
    filename: '/documents/rfc-respect-code-players.pdf',
    category: 'conduct',
    updated: '2026-01-01',
  },
  {
    title: 'FA Respect Code of Conduct — Parents & Spectators',
    description: 'Expected standards of behaviour for parents, guardians and spectators.',
    filename: '/documents/rfc-respect-code-spectators.pdf',
    category: 'conduct',
    updated: '2026-01-01',
  },
  {
    title: 'FA Respect Code of Conduct — Coaches & Managers',
    description: 'Code of conduct for all RFC coaches, managers and volunteers.',
    filename: '/documents/rfc-respect-code-coaches.pdf',
    category: 'conduct',
    updated: '2026-01-01',
  },
  {
    title: 'Equality & Inclusion Policy',
    description: 'Our commitment to providing equal opportunities for all, regardless of background.',
    filename: '/documents/rfc-equality-policy.pdf',
    category: 'equality',
    updated: '2026-01-01',
  },
  {
    title: 'Anti-Bullying Policy',
    description: 'How we identify, prevent and respond to bullying within our club community.',
    filename: '/documents/rfc-anti-bullying-policy.pdf',
    category: 'general',
    updated: '2026-01-01',
  },
  {
    title: 'Photography & Video Policy',
    description: 'Guidelines for photography and filming at RFC events, in line with FA recommendations.',
    filename: '/documents/rfc-photography-policy.pdf',
    category: 'general',
    updated: '2026-01-01',
  },
  {
    title: 'Complaints Procedure',
    description: 'Step-by-step guide to raising a formal complaint with Rotherfield FC.',
    filename: '/documents/rfc-complaints-procedure.pdf',
    category: 'general',
    updated: '2026-01-01',
  },
  {
    title: 'Privacy Notice',
    description: 'How we collect, store and use personal data in compliance with UK GDPR.',
    filename: '/documents/rfc-privacy-notice.pdf',
    category: 'general',
    updated: '2026-01-01',
  },
];
