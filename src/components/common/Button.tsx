import { Link } from 'react-router-dom';
import { Arrow } from '../icons';

interface Props {
  text: string;
  href: string;
}

export default function Button({ text, href }: Props) {
  return (
    <Link
      className="py-3 relative grow bg-primary-dark text-white rounded-md font-medium text-base text-center tracking-tight"
      to={href}
    >
      {text}
      <Arrow className="absolute right-4 top-1/2 -translate-y-1/2" />
    </Link>
  );
}
