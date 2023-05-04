import { SVGProps } from 'react';
import Icon from './Icon';

function ChevronRight(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 21.2498C17.108 21.2498 21.25 17.1088 21.25 11.9998C21.25 6.8918 17.108 2.7498 12 2.7498C6.892 2.7498 2.75 6.8918 2.75 11.9998C2.75 17.1088 6.892 21.2498 12 21.2498Z"
        stroke="#FCFCFC"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5576 15.471L14.0436 12L10.5576 8.529"
        stroke="#FCFCFC"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
}

export default ChevronRight;
