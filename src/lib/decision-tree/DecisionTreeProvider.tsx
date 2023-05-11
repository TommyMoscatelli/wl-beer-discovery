import { PropsWithChildren, createContext } from 'react';
import DecisionTree from './DecisionTree';

let decisionContext: ReturnType<typeof createContext<DecisionTree<any, any>>>;

function createDecisionTreeContext<T, K>(decisionTree: DecisionTree<T, K>) {
  decisionContext = createContext(decisionTree);
}

export function getDecisionTreeContext() {
  return decisionContext;
}

export default function createDecisionTreeProvider<T, K>(
  decisionTree: DecisionTree<T, K>
) {
  createDecisionTreeContext(decisionTree);

  function DecisionTreeProvider({ children }: PropsWithChildren): JSX.Element {
    const { Provider } = decisionContext;
    return <Provider value={decisionTree}> {children} </Provider>;
  }

  return DecisionTreeProvider;
}
