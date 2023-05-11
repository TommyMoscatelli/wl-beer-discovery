import { useNavigate, useParams } from 'react-router-dom';
import { useContext } from 'react';
import { getDecisionTreeContext } from '../DecisionTreeProvider';

export default function useResult<K>(paramKeys: string[]): K | null {
  const urlParams = useParams();
  const navigate = useNavigate();
  const decisionTree = useContext(getDecisionTreeContext());

  const paramValues = paramKeys.map((key) => urlParams[key]);

  if (paramValues.includes(undefined)) {
    navigate('/');
  }

  let result: K | null = null;

  try {
    result = decisionTree.getResult(paramValues as string[]);
  } catch (error) {
    navigate('/');
  }

  return result;
}
