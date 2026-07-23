export const business = {
  name: 'Kevro Solutions',
  legalName: 'Kevro Solutions Pty Ltd',
  abn: '70 102 487 559',
  tagline: 'Landscape construction and garden design',

  email: 'kevrosolutions@gmail.com',
  phoneDisplay: '0434 355 005',
  phoneE164: '+61434355005',

  address: {
    locality: 'Kalkallo',
    region: 'VIC',
    postcode: '3064',
    country: 'AU',
  },

  suburbs: [
    'Northern Suburbs',
    'Western Suburbs',
    'Eastern Suburbs',
  ],

  // Web3Forms access key. Public by design — it is visible in the form markup.
  // Get it by verifying the client's email at https://web3forms.com
  formAccessKey: 'deaabddb-6f64-425d-a2b3-7e30246f759e',
} as const;

export const nav = [
  { label: 'Services', href: '/#services' },
  { label: 'About', href: '/#about' },
] as const;
