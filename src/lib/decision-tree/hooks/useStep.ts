import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getDecisionTreeContext } from '../DecisionTreeProvider';

export default function useStep<T>(paramKeys?: string[]): T[] | null {
  const urlParams = useParams();
  const navigate = useNavigate();
  const decisionTree = useContext(getDecisionTreeContext());

  const paramValues = paramKeys?.map((key) => urlParams[key]);

  if (paramValues?.includes(undefined)) {
    navigate('/');
  }

  let result: T[] | null = null;

  try {
    result = decisionTree.getStep(paramValues as string[]);
  } catch (error) {
    navigate('/');
  }

  return result;
}
