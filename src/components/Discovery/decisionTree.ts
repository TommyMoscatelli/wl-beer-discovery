type Characteristics = { isAlcoolFree: boolean; isGlutenFree: boolean };

type Product = {
  id: string;
  slug: string;
  image: string;
  characteristics?: Partial<Characteristics>;
};

export const products: Record<string, Product> = {
  peroni: {
    id: '61435857c870ed0064175c8e',
    slug: 'peroni',
    image: 'img/product/peroni.png',
  },
  'peroni_nastro-azzurro_stile-capri': {
    id: '63f76a1a4e0a5e00693aff94',
    slug: 'peroni_nastro-azzurro_stile-capri',
    image: 'img/product/peroni_nastro-azzurro_stile-capri.png',
  },
  peroni_cruda: {
    id: '6411e6b3b853136721a7c4e6 ',
    slug: 'peroni_cruda',
    image: 'img/product/peroni_cruda.png',
  },
  'peroni_nastro-azzurro': {
    id: '62cfecb258e12b006793fd36',
    slug: 'peroni_nastro-azzurro',
    image: 'img/product/peroni_nastro-azzurro.png',
  },
  'peroni_non-filtrata': {
    id: '63f76a834e0a5e00693b0361',
    slug: 'peroni_non-filtrata',
    image: 'img/product/peroni_non-filtrata.png',
  },
  'asahi_super-dry': {
    id: '614344da76d72000637bba8b',
    slug: 'asahi_super-dry',
    image: 'img/product/asahi_super-dry.png',
  },
  kozel_lager: {
    id: '61434a5e76d72000637be986',
    slug: 'kozel_lager',
    image: 'img/product/kozel_lager.png',
  },
  'peroni_nastro-azzurro_00': {
    id: '636d2516faef8f006b2092a1',
    slug: 'peroni_nastro-azzurro_00',
    image: 'img/product/peroni_nastro-azzurro_00.png',
    characteristics: {
      isAlcoolFree: true,
    },
  },
  'peroni_senza-glutine': {
    id: '6143538b76d72000637c33e3',
    slug: 'peroni_senza-glutine',
    image: 'img/product/peroni_senza-glutine.png',
    characteristics: {
      isGlutenFree: true,
    },
  },
  kozel_dark: {
    id: '61434d3376d72000637c01e6',
    slug: 'kozel_dark',
    image: 'img/product/kozel_dark.png',
  },
  'peroni_gran-riserva_rossa': {
    id: '6143554076d72000637c43ef',
    slug: 'peroni_gran-riserva_rossa',
    image: 'img/product/peroni_gran-riserva_rossa.png',
  },
};

export const events = [
  {
    slug: 'aperitif',
    image: 'img/event_aperitif.jpg',
  },
  {
    slug: 'dinner',
    image: 'img/event_dinner.jpg',
  },
  {
    slug: 'lunch',
    image: 'img/event_lunch.jpg',
  },
  {
    slug: 'after-dinner',
    image: 'img/event_after-dinner.jpg',
  },
];

export const tastes = [
  {
    slug: 'aromatic',
    image: 'img/taste_aromatic.jpg',
    events: ['aperitif'],
  },
  {
    slug: 'classic',
    image: 'img/taste_classic.jpg',
    events: ['aperitif', 'lunch'],
  },
  {
    slug: 'dry',
    image: 'img/taste_dry.jpg',
    events: ['dinner'],
  },
  {
    slug: 'full',
    image: 'img/taste_full.jpg',
    events: ['dinner'],
  },
  {
    slug: 'rounded',
    image: 'img/taste_rounded.jpg',
    events: ['after-dinner'],
  },
  {
    slug: 'unexpected',
    image: 'img/taste_unexpected.jpg',
    events: ['after-dinner', 'lunch'],
  },
];

export function getTastes(event: string | undefined) {
  if (!event) {
    return [];
  }

  return tastes.filter((taste) => taste.events.includes(event));
}

export const characteristics = [
  {
    slug: 'caramel',
    image: 'img/characteristic_caramel.jpg',
    taste: 'rounded',
    events: ['after-dinner'],
    result: products['peroni_gran-riserva_rossa'],
  },
  {
    slug: 'for-fried-dishes',
    image: 'img/characteristic_for-fried-dishes.jpg',
    taste: 'dry',
    events: ['dinner'],
    result: products['peroni_nastro-azzurro'],
  },
  {
    slug: 'for-light-dishes',
    image: 'img/characteristic_for-light-dishes.jpg',
    taste: 'dry',
    events: ['dinner'],
    result: products['asahi_super-dry'],
  },
  {
    slug: 'for-pizza',
    image: 'img/characteristic_for-pizza.jpg',
    taste: 'full',
    events: ['dinner'],
    result: products['peroni_non-filtrata'],
  },
  {
    slug: 'for-structured-dishes',
    image: 'img/characteristic_for-structured-dishes.jpg',
    taste: 'full',
    events: ['dinner'],
    result: products.kozel_lager,
  },
  {
    slug: 'good-for-driving',
    image: 'img/characteristic_good-for-driving.jpg',
    taste: 'unexpected',
    events: ['lunch', 'after-dinner'],
    result: products['peroni_nastro-azzurro_00'],
  },
  {
    slug: 'honey',
    image: 'img/characteristic_honey.jpg',
    taste: 'rounded',
    events: ['after-dinner'],
    result: products.kozel_lager,
  },
  {
    slug: 'light-body',
    image: 'img/characteristic_light-body.jpg',
    taste: 'aromatic',
    events: ['aperitif'],
    result: products.peroni_cruda,
  },
  {
    slug: 'malted-gluten-free',
    image: 'img/characteristic_malted-gluten-free.jpg',
    taste: 'classic',
    events: ['lunch'],
    result: products['peroni_senza-glutine'],
  },
  {
    slug: 'malted',
    image: 'img/characteristic_malted.jpg',
    taste: 'classic',
    events: ['lunch'],
    result: products.peroni,
  },
  {
    slug: 'more-aromatic',
    image: 'img/characteristic_more-aromatic.jpg',
    taste: 'aromatic',
    events: ['aperitif'],
    result: products['peroni_nastro-azzurro_stile-capri'],
  },
  {
    slug: 'more-hoppy',
    image: 'img/characteristic_more-hoppy.jpg',
    taste: 'classic',
    events: ['aperitif'],
    result: products['peroni_nastro-azzurro'],
  },
  {
    slug: 'more-malted',
    image: 'img/characteristic_more-malted.jpg',
    taste: 'classic',
    events: ['aperitif'],
    result: products.peroni,
  },
  {
    slug: 'structured-light',
    image: 'img/characteristic_structured-light.jpg',
    taste: 'unexpected',
    events: ['lunch'],
    result: products.kozel_dark,
  },
  {
    slug: 'sweet-and-structured',
    image: 'img/characteristic_sweet-and-structured.jpg',
    taste: 'unexpected',
    events: ['after-dinner'],
    result: products.kozel_dark,
  },
];

// TODO: Get products based on taste and events
// HINT: I can get beer by only characteristic since each char is unique (except one)
// SO product doesn't need to

export function getCharacteristic(event?: string, taste?: string) {
  if (!event || !taste) {
    return [];
  }

  return characteristics.filter(
    (characteristic) =>
      characteristic.taste === taste && characteristic.events.includes(event)
  );
}

export function getResult(event: string, taste: string, charact: string) {
  return characteristics
    .filter(
      (characteristic) =>
        characteristic.taste === taste && characteristic.events.includes(event)
    )
    .find((c) => c.slug === charact)?.result;
}

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
