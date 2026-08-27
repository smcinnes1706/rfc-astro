export type CommitteeSection = 'senior-club' | 'junior-club' | 'welfare' | 'management' | 'team' | 'communications';

export interface CommitteeMember {
  id?: string;
  name: string;
  role: string;
  title?: string;
  email?: string;
  phone?: string;
  image?: string;
  intro?: string;
  bio?: string;
  icon?: string;
  section?: CommitteeSection;
  sections?: CommitteeSection[];
  sortOrder?: number;
  isVacant?: boolean;
}

export const committee: CommitteeMember[] = [
  {
    name: 'Pete Ford',
    role: 'Chairman',
    image: '/rfc-astro/images/contacts/pford.avif',
    sections: ['senior-club'],
  },
  {
    name: 'Phill Teague',
    role: 'Club Secretary & Adult Club Welfare Officer',
    email: 'enquiriesrfc1893@gmail.com',
    sections: ['senior-club', 'welfare'],
    image: '/rfc-astro/images/contacts/pteague.avif',
  },
  {
    name: 'Nik Kennett',
    role: 'Treasurer',
    sections: ['senior-club'],
  },
  {
    name: 'Robin Paige',
    role: 'Fixture Secretary',
    sections: ['senior-club'],
  },
  {
    name: 'Wayne Clarke',
    role: 'First Team Manager',
    image: '/rfc-astro/images/contacts/wclarke.avif',
    sections: ['team'],
  },
  {
    name: 'Richard Holman',
    role: 'Reserves Manager',
    sections: ['team'],
  },
 
  {
    name: 'Stuart McInnes',
    role: 'Veterans Manager',
    image: '/rfc-astro/images/contacts/smcinnes.avif',
    sections: ['senior-club', 'team'],
  },
  {
    name: 'Mark Sumner',
    role: 'RJFC Chairman',
    sections: ['senior-club','junior-club', 'management'],
  },
   {
    name: 'Alex Watts',
    role: 'Committee Member',
    sections: ['senior-club'],
  },
  {
    name: 'James Bowen',
    role: 'Committee Member',
    sections: ['senior-club'],
  },
  {
    name: 'Aimee Bristow',
    role: 'Junior Club Welfare Officer',
    email: 'welfare.rjfc@gmail.com',
    image: '/rfc-astro/images/contacts/aimeeb.avif',
    intro: 'Aimee has had involvement with the club for a number of years and in 2024 took on the role of Junior CWO.',
    sections: ['junior-club', 'welfare'],
  },
  {
    name: 'Elliot Ridley-Smith',
    role: 'Social Media Officer',
    image: '/rfc-astro/images/contacts/eridleysmith.avif',
    sections: ['senior-club', 'communications'],
  },
];
