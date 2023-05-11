import DecisionNode from './DecisionNode';

export default class DecisionTree<T, K> {
  private tree: DecisionNode<T, K>[];

  private valueKey: keyof T | undefined;

  constructor(schema: DecisionNode<T, K>[], valueKey?: keyof T) {
    this.tree = schema;
    this.valueKey = valueKey;
  }

  public getStep(searchParams?: string[]): T[] {
    if (!searchParams || searchParams.length === 0) {
      return this.getStart();
    }

    return this.getDecisions(searchParams);
  }

  private getStart(): T[] {
    return this.tree.map((decision) => decision.value);
  }

  private getDecisions(searchParams: string[]): T[] {
    const decisionNode = this.traverseTree(this.tree, searchParams);

    if (!decisionNode?.children) {
      throw new Error(
        `Decision not found with parameters: ${searchParams.join(', ')}`
      );
    }

    return decisionNode.children.map((decision) => decision.value);
  }

  public getResult(searchParams: string[]): K {
    const decisionNode = this.traverseTree(this.tree, searchParams);

    if (!decisionNode?.result) {
      throw new Error(
        `Result not found with parameters: ${searchParams.join(', ')}`
      );
    }

    return decisionNode.result;
  }

  private traverseTree(
    tempTree: DecisionNode<T, K>[],
    searchParams: string[]
  ): DecisionNode<T, K> | null {
    const foundDecisionNode = tempTree.find((node) => {
      const nodeValue = this.valueKey ? node.value[this.valueKey] : node.value;
      return nodeValue === searchParams[0];
    });

    if (!foundDecisionNode) {
      return null;
    }

    if (searchParams.length === 1) {
      return foundDecisionNode;
    }

    if (!foundDecisionNode.children) {
      return null;
    }

    return this.traverseTree(foundDecisionNode.children, searchParams.slice(1));
  }
}
