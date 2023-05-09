export default class DecisionNode<T, K> {
  value: T;

  children: DecisionNode<T, K>[];

  result?: K;

  constructor(value: T, children: DecisionNode<T, K>[], result?: K) {
    this.value = value;
    this.children = children;
    this.result = result;
  }
}
