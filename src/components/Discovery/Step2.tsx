import { useTranslation } from 'react-i18next';
import Header from '../common/Header';
import Footer from '../common/Footer';
import ScreenContainer from '../common/ScreenContainer';
import Fact from '../common/Fact';
import ScreenBody from '../common/ScreenBody';
import ChoiceList from '../common/ChoiceList';
import useStep from '../../lib/decision-tree/hooks/useStep';
import { Decision } from '../../data/types';

export default function Step2() {
  const { t } = useTranslation('discovery');
  const tastes = useStep<Decision>(['event']);

  if (!tastes) {
    throw new Error('An error as occurred fetching tastes');
  }

  return (
    <ScreenContainer>
      <Header />

      <ScreenBody title={t('step2.title')}>
        <ChoiceList type="taste" data={tastes} />
      </ScreenBody>

      <Footer>
        <Fact
          title={t('step2.fact.title')}
          description={t('step2.fact.description')}
        />
      </Footer>
    </ScreenContainer>
  );
}
