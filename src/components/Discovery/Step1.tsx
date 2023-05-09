import { useTranslation } from 'react-i18next';
import Header from '../common/Header';
import Footer from '../common/Footer';
import ScreenContainer from '../common/ScreenContainer';
import ScreenBody from '../common/ScreenBody';
import ChoiceList from '../common/ChoiceList';
import Fact from '../common/Fact';
import decisionTree from '../../data/decisionTree';

export default function Step1() {
  const { t } = useTranslation('discovery');

  const events = decisionTree.getStep();

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
