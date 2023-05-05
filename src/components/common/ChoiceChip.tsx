import { Link } from 'react-router-dom';
import { Chevron } from '../icons';

interface Props {
  category: string;
  text: string;
  imgUrl: string;
}

export default function ChoiceChip({ category, imgUrl, text }: Props) {
  return (
    <li>
      <Link
        className="flex items-center gap-4 p-4 rounded-full bg-white border border-[#F6EBEB] text-primary"
        to={`/discovery/${category}`}
      >
        <img
          src={`${import.meta.env.BASE_URL}${imgUrl}`}
          alt={category}
          className="h-12 shrink-0"
        />
        <span className="flex-1 text-xl font-medium tracking-tight">
          {text}
        </span>
        <Chevron className="w-6 shrink-0" />
      </Link>
    </li>
  );
}
