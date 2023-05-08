import { useTranslation } from 'react-i18next';
import { events } from './decisionTree';
import Header from '../common/Header';
import Footer from '../common/Footer';
import ScreenContainer from '../common/ScreenContainer';
import ScreenBody from '../common/ScreenBody';
import ChoiceList from '../common/ChoiceList';
import Fact from '../common/Fact';

export default function Step1() {
  const { t } = useTranslation('discovery');

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
