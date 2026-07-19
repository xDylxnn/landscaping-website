export const business = {
  name: 'KKova Solutions',
  legalName: 'KKova Solutions Pty Ltd',
  abn: 'PLACEHOLDER 00 000 000 000',
  tagline: 'Landscape construction and garden design',

  email: 'kkovasolutions@gmail.com',
  phoneDisplay: '(04) 3435 5005',
  phoneE164: '+61434355005',

  domain: 'https://example.com',

  address: {
    locality: 'Kalkallo',
    region: 'VIC',
    postcode: '3064',
    country: 'AU',
  },

  suburbs: [
    'Kalkallo',
    'Donnybrook',
    'Craigieburn',
    'Epping',
  ],

  hours: [
  ],

  social: [] as Array<string>,
} as const;

export const nav = [
  { label: 'Services', href: '/#services' },
  { label: 'How we work', href: '/#process' },
  { label: 'Reviews', href: '/#reviews' },
  { label: 'Contact', href: '/contact' },
] as const;
