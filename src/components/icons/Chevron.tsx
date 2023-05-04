import { SVGProps } from 'react';
import Icon from './Icon';

function ChevronRight(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <path
        d="m8.5 5 7 7-7 7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
}

export default ChevronRight;
