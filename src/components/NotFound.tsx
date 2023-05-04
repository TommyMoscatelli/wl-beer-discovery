import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function NotFound() {
  const { t } = useTranslation(['notFound', 'commons']);

  return (
    <div className="container mx-auto px-4 flex flex-col items-center">
      <div className="text-2xl">{t('title')}</div>
      <div className="text-xl">{t('subtitle')}</div>
      <Link className="hover:underline" to="/">
        {t('home', { ns: 'commons' })}
      </Link>
    </div>
  );
}
