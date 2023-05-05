import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Arrow } from './icons';

function Home() {
  const { t } = useTranslation('home');

  return (
    <div className="flex flex-col justify-between h-full bg-[url('/img/background/dark.jpg')] bg-cover bg-center">
      <div>{/* HEADER */}</div>
      <div>
        {/* BODY */}
        <img
          className="w-2/3 max-w-md mx-auto"
          src={`${import.meta.env.BASE_URL}img/discovery_logo.png`}
          alt="The beer discovery"
        />
      </div>

      <div className="px-4 z-10 relative flex h-36 items-center">
        {/* FOOTER */}
        <img
          className="w-full absolute bottom-0 left-0"
          src={`${import.meta.env.BASE_URL}img/light_wave.png`}
          alt="The beer discovery"
        />
        <Link
          className="py-3 relative grow bg-button text-white rounded-md font-medium text-base text-center tracking-tight"
          to="/discovery"
        >
          {t('cta')}
          <Arrow className="absolute right-4 top-1/2 -translate-y-1/2" />
        </Link>
      </div>
    </div>
  );
}

export default Home;
