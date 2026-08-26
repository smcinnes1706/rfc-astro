export interface Sponsor {
  name: string;
  url: string;
  tier: 'main' | 'partner';
}

export const sponsors: Sponsor[] = [
  { name: 'PFS Ltd', url: 'https://www.pfsltd.co.uk/', tier: 'main' },
  { name: 'Mercator Digital', url: 'https://www.mercatordigital.com/', tier: 'main' },
  { name: 'Persimmon Homes', url: 'https://www.persimmonhomes.com/', tier: 'main' },
  { name: 'Auto Trader', url: 'http://www.autotrader.co.uk/', tier: 'partner' },
  { name: 'Masson Joinery', url: 'https://www.massonjoinery.co.uk/', tier: 'partner' },
  { name: 'Pier Contractors Limited', url: 'https://www.piercontractorslimited.com/', tier: 'partner' },
  { name: 'Seko Logistics', url: 'https://www.sekologistics.com/emea-en/', tier: 'partner' },
  { name: 'Revival Financial Planning', url: 'https://www.revivalfp.co.uk/', tier: 'partner' },
  { name: 'Peter Oliver Homes', url: 'https://www.peteroliverhomes.co.uk/about-us', tier: 'partner' },
  { name: 'Infinity Integrated Technologies', url: 'https://www.infinitygroup.co.uk/', tier: 'partner' },
  { name: 'PURE Media', url: 'https://pure-media.co.uk/', tier: 'partner' },
  { name: 'Temco NAC', url: 'https://temconac.co.uk/', tier: 'partner' },
];
