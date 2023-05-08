import { MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { Arrow } from '../icons';

interface Props {
  text: string;
  href: string;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
}

export default function Button({ text, href, onClick }: Props) {
  return (
    <Link
      className="py-3 relative grow bg-primary-dark text-white rounded-md font-medium text-base text-center tracking-tight"
      to={href}
      onClick={onClick}
    >
      {text}
      <Arrow className="absolute right-4 top-1/2 -translate-y-1/2" />
    </Link>
  );
}
