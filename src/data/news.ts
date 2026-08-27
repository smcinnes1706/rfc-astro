export interface NewsPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  body: string;
  image?: string;
  category: 'match-report' | 'club-news' | 'juniors';
  team?: 'first' | 'reserves' | 'veterans';
}

export const newsPosts: NewsPost[] = [
  {
    slug: 'match-report-westfield-reserves-2-2-rotherfield-fc',
    title: 'Match Report: Westfield Reserves 2-2 Rotherfield FC',
    date: '2026-08-23',
    author: 'S. McInnes',
    category: 'match-report',
    team: 'first',
    excerpt:
      'Rotherfield FC started their 2026/27 league campaign with a point away from home after a dramatic 2-2 draw against Westfield Reserves.',
    body: `Rotherfield FC started their 2026/27 league campaign with a point away from home after a 2-2 draw against Westfield Reserves. Two long-range strikes from Jack Spampanato and Finlay McLeod were two high points in a dramatic affair at the Knight & Davey Community Stadium.

After a positive pre-season campaign, the Greens started the game well finding Tommy Overton's feet regularly but found the final ball lacking. Enjoying comfortable possession at the back, Rotherfield tried to build from the back and their positive approach was rewarded midway through the first half when Jack Spampanato rifled home from 25 yards to give the visitors the lead.

Westfield levelled before half-time with a well-taken finish, but Rotherfield restored their lead shortly after the break through another long-range effort, this time from Finlay McLeod whose strike nestled into the top corner. The hosts equalised late on to earn a share of the spoils in an entertaining opening day fixture.`,
  },
  {
    slug: 'rotherfield-reserves-earn-deserved-draw-at-wadhurst',
    title: 'Rotherfield Reserves Earn Deserved Draw at Wadhurst',
    date: '2026-08-12',
    author: 'Elliot James',
    category: 'match-report',
    team: 'reserves',
    excerpt:
      'In their first pre-season friendly, the Reserves were good value for a stalemate at Wadhurst, dominating for much of the first half.',
    body: `In their first pre-season friendly, the Reserves were good value for a stalemate at Wadhurst. Dominating for much of the first half while playing uphill — and what a hill it was — Rotherfield created a number of opportunities.

Xander Hamza shot tamely after some good approach play, before Harry Chittenden failed to test the home keeper following an excellent passing move. With James Bowen and Owen Ridley forming an impressive central defensive partnership, the Reserves looked solid at the back throughout.

The second half was a more even affair with both sides having chances to win it, but ultimately a draw was a fair result. A promising start to pre-season for the Reserves squad.`,
  },
  {
    slug: 'match-report-jarvis-brook-1-2-rotherfield-fc',
    title: 'Match Report: Jarvis Brook 1-2 Rotherfield FC',
    date: '2026-08-02',
    author: 'Elliot James',
    category: 'match-report',
    team: 'first',
    excerpt:
      'Rotherfield FC claimed an excellent 2-1 victory in their latest pre-season fixture, overcoming local neighbours Jarvis Brook in an entertaining encounter.',
    body: `Pre-Season Friendly — Rotherfield FC claimed an excellent 2-1 victory in their latest pre-season fixture, overcoming local neighbours Jarvis Brook in an entertaining and competitive encounter.

Making the short trip to face higher-level opposition just one week before the hosts' season opener, the Greens knew they faced another stern examination of their preparations. With a number of players unavailable through injury and availability, manager Wayne Clarke took the opportunity to give minutes to several squad members.

Goals from two of the summer signings sealed the win and will give the squad real confidence heading into the new season. A superb defensive performance rounded off a highly positive afternoon for the travelling Rotherfield faithful.`,
  },
  {
    slug: 'girls-wildcats-session-returns',
    title: 'Girls Wildcats Sessions Return This Autumn',
    date: '2026-07-28',
    author: 'RFC Admin',
    category: 'juniors',
    excerpt:
      'Our FA-affiliated Girls Wildcats group is back for the new season. Sessions are open to girls aged 5-11 — no experience needed!',
    body: `We are delighted to confirm that our Girls Wildcats sessions will return this autumn at Rotherfield Recreation Ground.

The FA Girls Wildcats programme is designed to give girls aged 5-11 a fun and safe introduction to football. No experience is needed — just enthusiasm and a pair of boots!

Sessions run weekly and are led by our qualified FA coaches. To book a place, visit our England Football booking page. For any questions, please email enquiriesrfc1893@gmail.com.

We look forward to welcoming new and returning players this season!`,
  },
];
