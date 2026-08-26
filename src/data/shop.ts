export interface ShopItem {
  name: string;
  juniorPrice?: string;
  seniorPrice?: string;
  price?: string;
  emoji: string;
  url: string;
}

export const shopItems: ShopItem[] = [
  { name: 'Pro Training Tee', juniorPrice: '£16.00', seniorPrice: '£17.50', emoji: '👕', url: 'https://gameforlife.co.uk/collections/rotherfield-fc/products/rotherfield-fc-pro-training-tee' },
  { name: 'Pro Tech Hoodie', juniorPrice: '£26.00', seniorPrice: '£36.00', emoji: '🧥', url: 'https://gameforlife.co.uk/collections/rotherfield-fc/products/rotherfield-fc-pro-tech-hoodie' },
  { name: 'Pro Elite Skinny Pants', juniorPrice: '£22.00', seniorPrice: '£29.00', emoji: '👖', url: 'https://gameforlife.co.uk/collections/rotherfield-fc/products/rotherfield-fc-pro-elite-skinny-pant' },
  { name: 'Pro HX Players Twin Bag', price: '£30.00', emoji: '🎒', url: 'https://gameforlife.co.uk/collections/rotherfield-fc/products/rotherfield-fc-pro-hx-players-twin-bag' },
  { name: 'Edge Pro ¾ Length Coat', price: '£65.00', emoji: '🧣', url: 'https://gameforlife.co.uk/products/rotherfield-fc-edge-pro-34-length-coat' },
  { name: 'Club Cap', price: '£11.50', emoji: '🧢', url: 'https://gameforlife.co.uk/products/rotherfield-fc-cap' },
  { name: 'Beanie Hat', price: '£9.00', emoji: '🎩', url: 'https://gameforlife.co.uk/products/rotherfiled-fc-beanie-hat' },
  { name: 'Training Short', juniorPrice: '£12.50', seniorPrice: '£13.75', emoji: '🩳', url: 'https://gameforlife.co.uk/collections/rotherfield-fc/products/rotherfield-fc-training-short' },
  { name: 'Chevron Gilet', price: '£45.00', emoji: '🦺', url: 'https://gameforlife.co.uk/products/rotherfield-fc-chevron-gilet' },
  { name: 'Pro Team Midlayer', juniorPrice: '£23.95', seniorPrice: '£32.00', emoji: '🥋', url: 'https://gameforlife.co.uk/collections/rotherfield-fc/products/rotherfield-fc-pro-team-midlayer' },
  { name: 'Elite Showerproof Jacket', juniorPrice: '£27.00', seniorPrice: '£36.00', emoji: '🌧️', url: 'https://gameforlife.co.uk/collections/rotherfield-fc/products/rotherfield-fc-elite-showerproof-jacket' },
  { name: 'Classic Polo', price: '£19.95', emoji: '👔', url: 'https://gameforlife.co.uk/collections/rotherfield-fc/products/rotherfield-fc-classic-polo' },
  { name: 'Carbon Technical Training Short', juniorPrice: '£18.50', seniorPrice: '£20.50', emoji: '🩳', url: 'https://gameforlife.co.uk/products/rotherfield-fc-carbon-technical-training-short' },
];
