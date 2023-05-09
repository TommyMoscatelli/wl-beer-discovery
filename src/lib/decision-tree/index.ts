import DecisionNode from './DecisionNode';
import DecisionTree from './DecisionTree';

/**
 * Creates a DecisionTree.
 * @param schema Decision hierarchy schema
 * @param valueKey Key used to get the correct decision in case the value is a complex object.
 * For example in case we have a DecisionNode like {value: {slug: "Peroni"} ... } we should set valueKey to "slug"
 * @returns DecisionTree
 */
export function createDecisionTree<T, K>(
  schema: DecisionNode<T, K>[],
  valueKey: keyof T
) {
  return new DecisionTree(schema, valueKey);
}

/**
 * Utility function used to avoid using DecisionNode type directly
 * @param schema
 * @returns
 */
export function createSchema<T, K>(schema: DecisionNode<T, K>[]) {
  return schema;
}
