export interface Sponsor {
  name: string;
  url?: string;
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
  { name: 'KJ Fine Art', url: 'https://katharinejenningsfineart.co.uk/', tier: 'gold', image: '/rfc-astro/images/sponsors/kj-fine-art.png' },
  { name: 'Intersport Lewes', url: 'https://gameforlife.co.uk/', tier: 'gold', image: '/rfc-astro/images/sponsors/intersport.jpg' },
  { name: 'Ultimate Construction Logistics', url: 'https://www.u-c-l.co.uk/', tier: 'gold', image: '/rfc-astro/images/sponsors/UCL-Logo.webp' },
  { name: 'Rotherfield Parish Council', url: 'https://rotherfieldparishcouncil.co.uk/', tier: 'gold', image: '/rfc-astro/images/sponsors/rotherfield-parish-council.jpg' },
  { name: 'PURE Media', url: 'https://pure-media.co.uk/', tier: 'partner' },
  { name: 'Temco NAC', url: 'https://temconac.co.uk/', tier: 'partner' },
  { name: 'MW Turfcare', url: 'https://www.instagram.com/mwturfcare/', tier: 'partner' },
  { name: 'CAPS Ltd', url: 'https://www.facebook.com/profile.php?id=61592214331855#', tier: 'partner' },
  { name: 'M&A Brown & Sons Ltd', url: 'https://www.mabg.co.uk/', tier: 'partner' },
  { name: 'Superclean Laundrette', url: 'https://www.facebook.com/pages/Superclean%20Launderette/133090663506559/#', tier: 'partner' },
  { name: 'LM Straughan Ltd', url: 'https://lmstraughan.com/', tier: 'partner' },
  { name: 'In Aid Of Shelter', url: 'https://england.shelter.org.uk/?_its=eJxVj0GSgyAUBe_y1hiDggI3mMWcwUL4RKqMpICMi1Q8-1SSVbb9evH6gb_oYaDCPErrZdNJ7hoxdKGx3A5N50n3XJPkQoOhVFsJBnmtBx9lN6qz5udjtZs_uklJrvVUKE3BOzVo4W3g_TD2gxCOekVq9lwH6QQYbK05zvca0wbzwO0-r7EslGFwSemyEhh8utq4wWDf99OHnly6giFToJzf9lLrrZi2_XZaMLjFbhutPx7mfY2hZPeb_KugUMKTocRKr51zParnPx8AU9c', tier: 'partner' },
  { name: 'Renhurst Farm Butchers', url: 'https://renhurstfarm.co.uk/', tier: 'partner' },


];
