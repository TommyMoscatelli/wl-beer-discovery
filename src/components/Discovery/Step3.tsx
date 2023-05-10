import { useTranslation } from 'react-i18next';
import Header from '../common/Header';
import Footer from '../common/Footer';
import ScreenContainer from '../common/ScreenContainer';
import ScreenBody from '../common/ScreenBody';
import ChoiceList from '../common/ChoiceList';
import Fact from '../common/Fact';
import useStep from '../../lib/decision-tree/hooks/useStep';

export default function Step3() {
  const { t } = useTranslation('discovery');
  const characteristics = useStep(['event', 'taste']);

  if (!characteristics) {
    throw new Error('An error as occurred fetching characteristics');
  }

  return (
    <ScreenContainer>
      <Header />

      <ScreenBody title={t('step3.title')}>
        <ChoiceList type="characteristic" data={characteristics} />
      </ScreenBody>

      <Footer>
        <Fact
          title={t('step3.fact.title')}
          description={t('step3.fact.description')}
        />
      </Footer>
    </ScreenContainer>
  );
}
