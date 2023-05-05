import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Arrow } from './icons';
import Footer from './common/Footer';
import Button from './common/Button';
import Header from './common/Header';

function Home() {
  const { t } = useTranslation('home');

  return (
    <div className="flex flex-col justify-between h-full bg-[url('/img/background/dark.jpg')] bg-cover bg-center">
      <Header />
      <div>
        {/* BODY */}
        <img
          className="w-2/3 max-w-md mx-auto"
          src={`${import.meta.env.BASE_URL}img/discovery_logo.png`}
          alt="The beer discovery"
        />
      </div>

      <Footer version="light">
        <Button text={t('cta')} />
      </Footer>
    </div>
  );
}

export default Home;
