export interface CommitteeMember {
  name: string;
  role: string;
  email?: string;
}

export const committee: CommitteeMember[] = [
  { name: 'TBC', role: 'Chairman' },
  { name: 'TBC', role: 'Vice Chairman' },
  { name: 'TBC', role: 'Club Secretary', email: 'enquiriesrfc1893@gmail.com' },
  { name: 'TBC', role: 'Treasurer' },
  { name: 'TBC', role: 'Fixture Secretary' },
  { name: 'Wayne Clarke', role: 'First Team Manager' },
  { name: 'TBC', role: 'Reserves Manager' },
  { name: 'TBC', role: 'Veterans Manager' },
  { name: 'TBC', role: 'Head of Junior Football' },
  { name: 'TBC', role: 'Club Welfare Officer', email: 'enquiriesrfc1893@gmail.com' },
  { name: 'TBC', role: 'Press Officer' },
  { name: 'TBC', role: 'Kit Manager' },
];

export interface HistoryMilestone {
  year: string;
  event: string;
}

export const history: HistoryMilestone[] = [
  { year: '1893', event: 'Rotherfield Football Club is founded, becoming one of the oldest clubs in East Sussex.' },
  { year: 'Early 1900s', event: 'The club establishes itself in local East Sussex leagues, building strong roots in the village community.' },
  { year: '1960s–70s', event: 'The club expands its junior offering, introducing youth football to Rotherfield for the first time.' },
  { year: '1990s', event: 'RFC affiliates with the Mid Sussex Football League, entering teams in senior competition at Premier Division level.' },
  { year: '2000s', event: 'A thriving junior section develops, with teams across multiple age groups competing in East Sussex leagues.' },
  { year: '2010s', event: 'The club joins the FA Respect programme and achieves Charter Standard status, recognising best practice in coaching, welfare and administration.' },
  { year: '2020s', event: 'RFC launches Girls Wildcats sessions in partnership with the FA, broadening the club\'s reach and welcoming girls\' football to Rotherfield for the first time.' },
  { year: '2026', event: 'The club enters its 133rd year, with adult teams competing in the Gray Hooper Holt Mid Sussex League and junior teams across East Sussex.' },
];
