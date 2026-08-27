export interface Sponsor {
  name: string;
  url: string;
  tier: 'platinum' | 'gold' | 'partner';
  image?: string;
}

export const sponsors: Sponsor[] = [
  { name: 'PFS Ltd', url: 'https://www.pfsltd.co.uk/', tier: 'platinum', image: '/rfc-astro/images/sponsors/pfs-group-limited.avif' },
  { name: 'Mercator Digital', url: 'https://www.mercatordigital.com/', tier: 'platinum', image: '/rfc-astro/images/sponsors/mercator-digital.avif' },
  { name: 'Persimmon Homes', url: 'https://www.persimmonhomes.com/', tier: 'platinum', image: '/rfc-astro/images/sponsors/persimmon.avif' },
  { name: 'Auto Trader', url: 'http://www.autotrader.co.uk/', tier: 'platinum', image: '/rfc-astro/images/sponsors/autotrader.png' },
  { name: 'Masson Joinery', url: 'https://www.massonjoinery.co.uk/', tier: 'platinum', image: '/rfc-astro/images/sponsors/masson.jpg' },
  { name: 'Pier Contractors Limited', url: 'https://www.piercontractorslimited.com/', tier: 'platinum', image: '/rfc-astro/images/sponsors/pcl-logo-200x200.png' },
  { name: 'Seko Logistics', url: 'https://www.sekologistics.com/emea-en/', tier: 'platinum', image: '/rfc-astro/images/sponsors/seko.png' },
  { name: 'Revival Financial Planning', url: 'https://www.revivalfp.co.uk/', tier: 'platinum', image: '/rfc-astro/images/sponsors/revival.jpg' },
  { name: 'Peter Oliver Homes', url: 'https://www.peteroliverhomes.co.uk/about-us', tier: 'platinum', image: '/rfc-astro/images/sponsors/peter-oliver-logo.jpg' },
  { name: 'Infinity Integrated Technologies', url: 'https://www.infinitygroup.co.uk/', tier: 'platinum', image: '/rfc-astro/images/sponsors/infinity-group.jpg' },
  { name: 'KJ Fine Art', url: 'https://www.infinitygroup.co.uk/', tier: 'gold', image: '/rfc-astro/images/sponsors/kj-fine-art.png' },
  { name: 'Intersport Lewes', url: 'https://www.infinitygroup.co.uk/', tier: 'gold', image: '/rfc-astro/images/sponsors/intersport.jpg' },
  { name: 'Ultimate Construction Logistics', url: 'https://www.infinitygroup.co.uk/', tier: 'gold', image: '/rfc-astro/images/sponsors/UCL-Logo.webp' },
  { name: 'Rotherfield Parish Council', url: 'https://www.infinitygroup.co.uk/', tier: 'gold', image: '/rfc-astro/images/sponsors/rotherfield-parish-council.jpg' },
  { name: 'PURE Media', url: 'https://pure-media.co.uk/', tier: 'partner' },
  { name: 'Temco NAC', url: 'https://temconac.co.uk/', tier: 'partner' },
  { name: 'MW Turfcare', url: 'https://temconac.co.uk/', tier: 'partner' },
  { name: 'CAPS Ltd', url: 'https://temconac.co.uk/', tier: 'partner' },
  { name: 'M&A Brown & Sons Ltd', url: 'https://temconac.co.uk/', tier: 'partner' },
  { name: 'Superclean Laundrette', url: 'https://temconac.co.uk/', tier: 'partner' },
  { name: 'LM Straughan Ltd', url: 'https://temconac.co.uk/', tier: 'partner' },
  { name: 'In Aid Of Shelter', url: 'https://temconac.co.uk/', tier: 'partner' },
  { name: 'Renhurst Farm Butchers', url: 'https://temconac.co.uk/', tier: 'partner' },


];
