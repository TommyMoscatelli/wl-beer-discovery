export type Decision = { slug: string; image: string };

type ProductCharacteristics = {
  isGlutenFree: boolean;
  isAlcoolFree: boolean;
};

export type Product = {
  id: string;
  slug: string;
  image: string;
  characteristics?: Partial<ProductCharacteristics>;
};
