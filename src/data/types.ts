export type Decision = { slug: string; image: string };

export type Product = {
  id: string;
  slug: string;
  image: string;
  characteristics?: {
    isGlutenFree: boolean;
    isAlcoolFree: boolean;
  };
};
