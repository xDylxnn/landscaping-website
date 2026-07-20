export const business = {
  name: 'KKova Solutions',
  legalName: 'KKova Solutions Pty Ltd',
  abn: 'PLACEHOLDER 00 000 000 000',
  tagline: 'Landscape construction and garden design',

  email: 'kkovasolutions@gmail.com',
  phoneDisplay: '0434 355 005',
  phoneE164: '+61434355005',

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

  // Web3Forms access key. Public by design — it is visible in the form markup.
  // Get it by verifying the client's email at https://web3forms.com
  formAccessKey: '71432f51-ad4f-4996-ad43-61da81f281d6',
} as const;

export const nav = [
  { label: 'Services', href: '/#services' },
  { label: 'About', href: '/#about' },
] as const;
