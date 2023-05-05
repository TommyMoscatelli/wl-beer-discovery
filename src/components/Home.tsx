import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Arrow } from './icons';
import Footer from './common/Footer';
import Button from './common/Button';
import Header from './common/Header';
import ScreenContainer from './common/ScreenContainer';

function Home() {
  const { t } = useTranslation('home');

  return (
    <ScreenContainer variant="dark">
      <Header />

      <img
        className="w-2/3 max-w-md mx-auto"
        src={`${import.meta.env.BASE_URL}img/discovery_logo.png`}
        alt="The beer discovery"
      />

      <Footer variant="light">
        <Button text={t('cta')} href="/discovery" />
      </Footer>
    </ScreenContainer>
  );
}

export default Home;
