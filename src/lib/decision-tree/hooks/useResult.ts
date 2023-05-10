import { useNavigate, useParams } from 'react-router-dom';
import decisionTree from '../../../data/decisionTree';

export default function useResult(
  paramKeys: string[]
): ReturnType<typeof decisionTree.getResult> | null {
  const urlParams = useParams();
  const navigate = useNavigate();

  const paramValues = paramKeys.map((key) => urlParams[key]);

  if (paramValues.includes(undefined)) {
    navigate('/');
  }

  let result = null;

  try {
    result = decisionTree.getResult(paramValues as string[]);
  } catch (error) {
    navigate('/');
  }

  return result;
}
