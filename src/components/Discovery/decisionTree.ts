export const products = [
  {
    id: '59ada78b367c010023bc3bee',
    slug: 'sapphire',
    image: 'img/product/bottle_bombay_sapphire.png',
    background: 'img/background/blue.png',
    logo: 'img/logo_white.png',
    category: 'traditional',
    characteristic: 'balanced',
  },
  {
    id: '6177f488479a730067687c94',
    slug: 'premier',
    image: 'img/product/bottle_bombay_sapphire_cru.png',
    background: 'img/background/light_yellow.png',
    logo: 'img/logo.png',
    category: 'traditional',
    characteristic: 'round',
  },
  {
    id: '63f8d8d6f3bab2006c43f383',
    slug: 'presse',
    image: 'img/product/bottle_bombay_presse.png',
    background: 'img/background/yellow.png',
    logo: 'img/logo.png',
    category: 'flavored',
    characteristic: 'light',
  },
  {
    id: '60801e427de2c50013d51b12',
    slug: 'sunset',
    image: 'img/product/bottle_bombay_sunset.png',
    background: 'img/background/orange.png',
    logo: 'img/logo_white.png',
    category: 'flavored',
    characteristic: 'spicy',
  },
];

export const categories = [
  {
    slug: 'traditional',
    image: 'img/gin-tradizionale.png',
  },
  {
    slug: 'flavored',
    image: 'img/gin-aromatizzato.png',
  },
];

export const characteristics = [
  {
    slug: 'balanced',
    image: 'img/equilibrato-versatile-e-aromatico.png',
  },
  {
    slug: 'round',
    image: 'img/rotondo-agrumato-e-ricercato.png',
  },
  {
    slug: 'light',
    image: 'img/leggero-per-aperitivo.png',
  },
  {
    slug: 'spicy',
    image: 'img/aromatico-speziato.png',
  },
];

export function findCategories() {
  const productChars = products.map((product) => product.category);
  return categories.filter((c) => productChars.includes(c.slug));
}

export function findCharacteristics(params: { category?: string } = {}) {
  const productChars = products
    .filter((product) =>
      params.category ? product.category === params.category : true
    )
    .map((product) => product.characteristic);

  return characteristics.filter((c) => productChars.includes(c.slug));
}

export function findProduct(params: {
  category: string;
  characteristic: string;
}) {
  return products.find(
    (p) =>
      p.category === params.category &&
      p.characteristic === params.characteristic
  );
}
