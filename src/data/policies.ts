export interface PolicyDocument {
  title: string;
  description: string;
  filename: string; // path relative to /public, e.g. /documents/safeguarding-policy.pdf
  category: 'safeguarding' | 'conduct' | 'equality' | 'general';
  updated: string; // YYYY-MM-DD
}

export interface ClubPolicy {
  id: string;
  title: string;
  icon: string;
  body: string[];
}

export interface ExternalResource {
  label: string;
  url: string;
}

export const clubPolicies: ClubPolicy[] = [
  {
    id: 'safeguarding',
    title: 'Safeguarding & Child Protection',
    icon: '🛡️',
    body: [
      'Rotherfield FC is committed to the safety and well-being of all children and young people involved in our club. We follow the FA\'s Safeguarding Children Policy and all coaches and volunteers working with juniors hold a current DBS (Disclosure and Barring Service) check.',
      'If you have a concern about the welfare of a child, please contact our Club Welfare Officer in the first instance. Concerns can also be reported directly to the FA or your local authority\'s children\'s services.',
      'All junior sessions are run in line with FA Guidelines — we maintain appropriate adult-to-child ratios, operate an open-door coaching policy and hold up-to-date first aid qualifications.',
    ],
  },
  {
    id: 'respect',
    title: 'FA Respect Policy',
    icon: '🤝',
    body: [
      'Rotherfield FC is a proud participant in the FA\'s Respect programme. We believe football should be enjoyable, fair and respectful at every level — from grassroots to the elite game.',
      'We expect all players, coaches, parents, guardians and spectators to:',
      '• Respect the match officials and accept their decisions.\n• Acknowledge good play from both sides.\n• Never engage in, or tolerate, offensive, insulting or abusive language or behaviour.\n• Always respect the facilities at our ground and those of opponents.\n• Encourage players to play by the rules and to respect opponents.',
      'Anyone found to be in breach of our Respect Code of Conduct may be asked to leave the ground and could face further action by the club.',
    ],
  },
  {
    id: 'equality',
    title: 'Equality & Inclusion',
    icon: '🌍',
    body: [
      'Rotherfield FC is committed to ensuring that all people, irrespective of age, gender, disability, race, religion or belief, sexual orientation or social/economic background, have an equal opportunity to participate in football.',
      'Discrimination of any kind will not be tolerated. We strive to create an environment where everyone feels welcome, valued and included — whether as a player, volunteer, official or supporter.',
      'If you experience or witness any form of discrimination at our club, please contact our Club Welfare Officer or the Club Secretary immediately.',
    ],
  },
  {
    id: 'anti-bullying',
    title: 'Anti-Bullying Policy',
    icon: '✋',
    body: [
      'Rotherfield FC has zero tolerance for bullying of any kind, whether physical, verbal or online. This applies to all members of the club community — players, coaches, parents and volunteers.',
      'Bullying behaviour will be investigated promptly and action taken in line with the club\'s disciplinary procedures. Repeat or serious incidents will be reported to the relevant statutory agencies.',
      'We encourage anyone who is experiencing or witnessing bullying to speak to our Club Welfare Officer in confidence.',
    ],
  },
  {
    id: 'photography',
    title: 'Photography & Video Policy',
    icon: '📸',
    body: [
      'To protect the welfare of children, Rotherfield FC operates a photography and video policy in line with FA Guidelines.',
      'Official club photography may be taken at matches and training sessions. Images of children will only be published on club channels with the consent of their parent or guardian.',
      'Individuals wishing to photograph or film at club events should make themselves known to a club official before doing so. Photography that focuses on individual children without appropriate consent is not permitted.',
    ],
  },
  {
    id: 'complaints',
    title: 'Complaints Procedure',
    icon: '📋',
    body: [
      'Rotherfield FC is committed to resolving complaints fairly, promptly and confidentially. If you have a complaint regarding any aspect of the club\'s activities, please follow the procedure below.',
      '1. In the first instance, raise your concern informally with the relevant team manager or coach.\n2. If unresolved, submit a written complaint to the Club Secretary at enquiriesrfc1893@gmail.com.\n3. The committee will acknowledge your complaint within 5 working days and aim to resolve it within 21 days.\n4. If you remain dissatisfied, the matter may be referred to the Sussex County FA.',
      'All complaints will be handled with discretion and in line with our privacy and data protection obligations.',
    ],
  },
  {
    id: 'privacy',
    title: 'Privacy & Data Protection',
    icon: '🔒',
    body: [
      'Rotherfield FC collects and processes personal data (such as names, contact details and, for juniors, medical information) solely for the purpose of running the club safely and effectively.',
      'We do not share personal data with third parties without consent, except where required by law or to fulfil our obligations to the FA or affiliated leagues.',
      'You have the right to access, correct or request deletion of your personal data held by the club. To exercise these rights or for any data protection query, contact us at enquiriesrfc1893@gmail.com.',
    ],
  },
];

export const externalResources: ExternalResource[] = [
  { label: 'FA Safeguarding Hub', url: 'https://www.thefa.com/football-rules-governance/safeguarding' },
  { label: 'FA Respect Programme', url: 'https://www.thefa.com/football-rules-governance/respect' },
  { label: 'NSPCC Child Protection', url: 'https://www.nspcc.org.uk/' },
  { label: 'Sussex County FA', url: 'https://www.sussexfa.com/' },
  { label: 'Childline', url: 'https://www.childline.org.uk/' },
  { label: 'Report Child Abuse (NSPCC)', url: 'https://www.nspcc.org.uk/keeping-children-safe/reporting-abuse/' },
];

export const policyDocuments: PolicyDocument[] = [
  {
    title: 'Grassroots Code for Adult Players',
    description: 'Our full safeguarding policy covering child protection, DBS requirements and reporting procedures.',
    filename: '/rfc-astro/docs/Grassroots_Code_For_Adults_PERSONALISE_0824-V1.pdf',
    category: 'safeguarding',
    updated: '2026-01-01',
  },
  {
    title: 'Grassroots Code For Youth Football',
    description: 'The FA Respect Code of Conduct for players at all levels.',
    filename: '/rfc-astro/docs/Grassroots_Code_For_Youth_PERSONALISE_0824-V1.pdf',
    category: 'safeguarding',
    updated: '2026-01-01',
  },
  {
    title: 'Grassroots Code  for Adults in Youth Football',
    description: 'The FA Respect Code of Conduct for players at all levels.',
    filename: '/rfc-astro/docs/Grassroots_Code_For_Adults_In_Youth_Football_PERSONALISE_0824-V1.pdf',
    category: 'safeguarding',
    updated: '2026-01-01',
  },
  {
    title: 'Constitution',
    description: 'The FA Respect Code of Conduct for players at all levels.',
    filename: '/rfc-astro/docs/Rotherfield Football Club Constitution - updated September 2022.pdf',
    category: 'safeguarding',
    updated: '2026-01-01',
  },
  {
    title: 'Where Can I Get Help?',
    description: 'The FA Respect Code of Conduct for players at all levels.',
    filename: '/rfc-astro/docs/9-1-where-can-i-find-help-colour-version',
    category: 'safeguarding',
    updated: '2026-01-01',
  },
  {
    title: 'Incident Report Form',
    description: 'The FA Respect Code of Conduct for players at all levels.',
    filename: '/rfc-astro/docs/incident report rfc.pdf',
    category: 'safeguarding',
    updated: '2026-01-01',
  },
  {
    title: 'Anti-Bullying Policy',
    description: 'The FA Respect Code of Conduct for players at all levels.',
    filename: '/rfc-astro/docs/1-6-anti-bullying-policy-template-editable-colour-version.pdf',
    category: 'safeguarding',
    updated: '2026-01-01',
  },
  {
    title: 'Know Your Rights',
    description: 'The FA Respect Code of Conduct for players at all levels.',
    filename: '/rfc-astro/docs/7-1-know-your-rights-in-football-colour-version.pdf',
    category: 'safeguarding',
    updated: '2026-01-01',
  },
  {
    title: 'Safeguarding Children Policy',
    description: 'The FA Respect Code of Conduct for players at all levels.',
    filename: '/rfc-astro/docs/template---club-safeguarding-children-policy-procedures.pdf',
    category: 'safeguarding',
    updated: '2026-01-01',
  },
  {
    title: 'CDJFL Incident Report Form',
    description: 'The FA Respect Code of Conduct for players at all levels.',
    filename: '/rfc-astro/docs/CDJFL - Incident Reporting Form - Version 2.docx.pdf',
    category: 'safeguarding',
    updated: '2026-01-01',
  },
  {
    title: 'Club Social Media & Communications Policy',
    description: 'The FA Respect Code of Conduct for players at all levels.',
    filename: '/rfc-astro/docs/RFC social media and communications policy.pdf',
    category: 'safeguarding',
    updated: '2026-01-01',
  },
  {
    title: 'RJFC Privacy Policy',
    description: 'The FA Respect Code of Conduct for players at all levels.',
    filename: '/rfc-astro/docs/RJFC privacy policy.pdf',
    category: 'safeguarding',
    updated: '2026-01-01',
  },
  {
    title: 'RFC Fixture Confirmation Document',
    description: 'The FA Respect Code of Conduct for players at all levels.',
    filename: '/rfc-astro/docs/RFC Fixture Confirmation 2025.pdf',
    category: 'safeguarding',
    updated: '2026-01-01',
  },



  
];
