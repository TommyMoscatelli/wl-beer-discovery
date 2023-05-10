import { useNavigate, useParams } from 'react-router-dom';
import decisionTree from '../../../data/decisionTree';

export default function useStep(paramKeys?: string[]) {
  const urlParams = useParams();
  const navigate = useNavigate();

  const paramValues = paramKeys?.map((key) => urlParams[key]);

  if (paramValues?.includes(undefined)) {
    navigate('/');
  }

  let result = null;

  try {
    result = decisionTree.getStep(paramValues as string[]);
  } catch (error) {
    navigate('/');
  }

  return result;
}
