import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../common/Header';
import Footer from '../common/Footer';
import ScreenContainer from '../common/ScreenContainer';
import Fact from '../common/Fact';
import ScreenBody from '../common/ScreenBody';
import ChoiceList from '../common/ChoiceList';
import decisionTree from '../../data/decisionTree';

export default function Step2() {
  const { t } = useTranslation('discovery');
  const { event } = useParams();
  const navigate = useNavigate();

  if (!event) {
    navigate('/');
    return null;
  }

  const tastes = decisionTree.getStep([event]);

  if (tastes.length === 0) {
    navigate('/');
    return null;
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
