export interface Team {
  id: string;
  name: string;
  description: string;
  league: string;
  manager?: string;
  contactEmail: string;
  type: 'adult' | 'junior' | 'vets';
  ageGroup?: string;
  image?: string;
  fixtureKey?: 'first' | 'reserves' | 'veterans';
  shortLabel?: string;
  rfcDisplayName?: string;
  badgeClass?: string;
  fulltimeLink?: string;
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
    image: '/rfc-astro/images/teams/firsts.jpg',
    fixtureKey: 'first',
    shortLabel: 'Firsts',
    rfcDisplayName: 'Rotherfield Firsts',
    badgeClass: 'badge--first',
    fulltimeLink: 'https://fulltime.thefa.com/index.html?league=568629645',
  },
  {
    id: 'reserves',
    name: 'Reserves',
    description:
      'Our reserve side competing in the Gray Hooper Holt Mid Sussex Football League Division 1 South.                                                        ',
    league: 'Mid Sussex League — Division 1 South',
    manager: 'Richard Holman',
    contactEmail: 'enquiriesrfc1893@gmail.com',
    type: 'adult',
    image: '/rfc-astro/images/teams/reserves.png',
    fixtureKey: 'reserves',
    shortLabel: 'Reserves',
    rfcDisplayName: 'Rotherfield Reserves',
    badgeClass: 'badge--reserves',
    fulltimeLink: 'https://fulltime.thefa.com/index.html?selectedSeason=89988287&selectedFixtureGroupAgeGroup=0&selectedDivision=156591799&selectedCompetition=0',
  },
  {
    id: 'vets',
    name: 'Vets (Over 35s)',
    description:
      'Our veteran side for players aged 35 and over, competing in the Sussex Sunday Football League.',
    league: 'SSFL - Vets Division 1',
    manager: 'Stuart McInnes',
    contactEmail: 'enquiriesrfc1893@gmail.com',
    type: 'vets',
    fixtureKey: 'veterans',
    shortLabel: 'Veterans',
    rfcDisplayName: 'Rotherfield Vets',
    badgeClass: 'badge--veterans',
    image: '/rfc-astro/images/teams/veterans.jpg',
    fulltimeLink: 'https://fulltime.thefa.com/index.html?league=579770755&selectedSeason=72986152&selectedDivision=179639796&selectedCompetition=0&selectedFixtureGroupKey=1_772033486',
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

export const fixtureTeamMetaByKey = Object.fromEntries(
  teams
    .filter((team) => team.fixtureKey && team.shortLabel && team.rfcDisplayName && team.badgeClass)
    .map((team) => [team.fixtureKey as string, {
      label: team.shortLabel as string,
      rfcDisplayName: team.rfcDisplayName as string,
      badgeClass: team.badgeClass as string,
    }])
);
