import { useTranslation } from 'react-i18next';
import ChoiceChip from './ChoiceChip';

interface Props {
  type: 'event' | 'taste' | 'characteristic';
  data: {
    slug: string;
    image: string;
  }[];
}

export default function ChoiceList({ type, data }: Props) {
  const { t } = useTranslation('discovery');

  return (
    <ul className="space-y-8 grow flex flex-col justify-center">
      {data.map((choice) => (
        <ChoiceChip
          to={choice.slug}
          key={choice.slug}
          category={choice.slug}
          imgUrl={choice.image}
          text={t(`${type}.${choice.slug}`)}
        />
      ))}
    </ul>
  );
}
