import { useTranslation } from 'react-i18next';
import Header from '../common/Header';
import Footer from '../common/Footer';
import ScreenContainer from '../common/ScreenContainer';
import ScreenBody from '../common/ScreenBody';
import ChoiceList from '../common/ChoiceList';
import Fact from '../common/Fact';
import useStep from '../../lib/decision-tree/hooks/useStep';

export default function Step1() {
  const { t } = useTranslation('discovery');

  const events = useStep();

  if (!events) {
    throw new Error('An error as occurred fetching events');
  }

  return (
    <ScreenContainer>
      <Header />

      <ScreenBody title={t('step1.title')}>
        <ChoiceList type="event" data={events} />
      </ScreenBody>

      <Footer>
        <Fact
          title={t('step1.fact.title')}
          description={t('step1.fact.description')}
        />
      </Footer>
    </ScreenContainer>
  );
}
