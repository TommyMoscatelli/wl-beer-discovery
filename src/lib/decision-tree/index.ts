import DecisionNode from './DecisionNode';
import DecisionTree from './DecisionTree';

/**
 * Creates a DecisionTree.
 * @param schema Decision hierarchy schema.
 * @param valueKey Key used for search correspondance when a node value property contains a complex object.
 * Ex. For a value object like { slug: "Peroni" ... } a valueKey = "slug" could be used.
 * @returns DecisionTree
 */
export function createDecisionTree<T, K>(
  schema: DecisionNode<T, K>[],
  valueKey?: keyof T
): DecisionTree<T, K> {
  return new DecisionTree(schema, valueKey);
}

/**
 * Utility function used to avoid using DecisionNode type directly. T for decision objects, K for result objects.
 * @param schema
 * @returns DecisionNode
 */
export function createSchema<T, K>(
  schema: DecisionNode<T, K>[]
): DecisionNode<T, K>[] {
  return schema;
}
