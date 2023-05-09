import { createDecisionTree, createSchema } from '../lib/decision-tree';
import characteristics from './characteristics';
import events from './events';
import products from './products';
import tastes from './tastes';
import { Decision, Product } from './types';

const schema = createSchema<Decision, Product>([
  {
    value: events.aperitif,
    children: [
      {
        value: tastes.classic,
        children: [
          {
            value: characteristics.malted,
            children: [],
            result: products.peroni,
          },
          {
            value: characteristics.more_hoppy,
            children: [],
            result: products.peroni_nastro_azzurro,
          },
        ],
      },
      {
        value: tastes.aromatic,
        children: [
          {
            value: characteristics.more_aromatic,
            children: [],
            result: products.peroni_nastro_azzurro_stile_capri,
          },
          {
            value: characteristics.light_body,
            children: [],
            result: products.peroni_cruda,
          },
        ],
      },
    ],
  },
  {
    value: events.dinner,
    children: [
      {
        value: tastes.full,
        children: [
          {
            value: characteristics.for_pizza,
            children: [],
            result: products.peroni_non_filtrata,
          },
          {
            value: characteristics.for_structured_dishes,
            children: [],
            result: products.kozel_lager,
          },
        ],
      },
      {
        value: tastes.dry,
        children: [
          {
            value: characteristics.for_light_dishes,
            children: [],
            result: products.asahi_super_dry,
          },
          {
            value: characteristics.for_fried_dishes,
            children: [],
            result: products.peroni_nastro_azzurro,
          },
        ],
      },
    ],
  },
  {
    value: events.lunch,
    children: [
      {
        value: tastes.unexpected,
        children: [
          {
            value: characteristics.good_for_driving,
            children: [],
            result: products.peroni_nastro_azzurro_00,
          },
          {
            value: characteristics.structured_light,
            children: [],
            result: products.kozel_dark,
          },
        ],
      },
      {
        value: tastes.classic,
        children: [
          {
            value: characteristics.malted_gluten_free,
            children: [],
            result: products.peroni_senza_glutine,
          },
          {
            value: characteristics.malted,
            children: [],
            result: products.peroni,
          },
        ],
      },
    ],
  },
  {
    value: events.after_dinner,
    children: [
      {
        value: tastes.rounded,
        children: [
          {
            value: characteristics.caramel,
            children: [],
            result: products.peroni_gran_riserva_rossa,
          },
          {
            value: characteristics.honey,
            children: [],
            result: products.kozel_lager,
          },
        ],
      },
      {
        value: tastes.unexpected,
        children: [
          {
            value: characteristics.sweet_and_structured,
            children: [],
            result: products.kozel_dark,
          },
          {
            value: characteristics.good_for_driving,
            children: [],
            result: products.peroni_nastro_azzurro_00,
          },
        ],
      },
    ],
  },
]);

export default createDecisionTree(schema, 'slug');
