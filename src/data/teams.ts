export interface TeamMember {
  name: string;
  role: string;
}

export interface Team {
  id: string;
  name: string;
  description: string;
  league: string;
  manager?: string;
  contactEmail: string;
  type: 'adult' | 'junior' | 'vets';
  ageGroup?: string;
}

export const teams: Team[] = [
  {
    id: 'first-team',
    name: 'First Team',
    description:
      'Our flagship adult side competing in the Gray Hooper Holt Mid Sussex Football League Premier Division.',
    league: 'Mid Sussex League — Premier Division',
    manager: 'Wayne Clarke',
    contactEmail: 'enquiriesrfc1893@gmail.com',
    type: 'adult',
  },
  {
    id: 'reserves',
    name: 'Reserves',
    description:
      'Our reserve side competing in the Mid Sussex Football League Division 2 South.',
    league: 'Mid Sussex League — Division 2 South',
    contactEmail: 'enquiriesrfc1893@gmail.com',
    type: 'adult',
  },
  {
    id: 'vets',
    name: 'Vets (Over 35s)',
    description:
      'Our veteran side for players aged 35 and over, competing in the Sussex Sunday Football League.',
    league: 'Sussex Sunday Football League',
    contactEmail: 'enquiriesrfc1893@gmail.com',
    type: 'vets',
  },
  {
    id: 'juniors-u6-u11',
    name: 'Juniors (Reception – Year 6)',
    description:
      'Junior football for boys and girls from Reception (U6) through to Year 6 (U11). Fun, inclusive and FA-affiliated sessions every week.',
    league: 'East Sussex Junior Football',
    contactEmail: 'enquiriesrfc1893@gmail.com',
    type: 'junior',
    ageGroup: 'Reception – Year 6',
  },
  {
    id: 'juniors-u12-u18',
    name: 'Juniors (Year 7 – Year 13)',
    description:
      'Competitive junior football for players in Year 7 through to Year 13 across East Sussex leagues.',
    league: 'East Sussex Junior Football',
    contactEmail: 'enquiriesrfc1893@gmail.com',
    type: 'junior',
    ageGroup: 'Year 7 – Year 13',
  },
  {
    id: 'girls-wildcats',
    name: "Girls Wildcats",
    description:
      "FA Girls Wildcats sessions for girls aged 5–11. No experience needed — just enthusiasm and a pair of boots! Book via England Football.",
    league: 'FA Girls Wildcats Programme',
    contactEmail: 'enquiriesrfc1893@gmail.com',
    type: 'junior',
    ageGroup: 'Ages 5–11',
  },
];
