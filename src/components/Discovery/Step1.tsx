import { useTranslation } from 'react-i18next';
import { events } from './decisionTree';
import Header from '../common/Header';
import Footer from '../common/Footer';
import ChoiceChip from '../common/ChoiceChip';

export default function Step1() {
  const { t } = useTranslation('discovery');

  return (
    <div className="flex flex-col justify-between h-full bg-[url('/img/background/light.jpg')] bg-cover bg-center">
      <Header />

      <div className="grow px-10 py-12 flex flex-col">
        <h1 className="text-3xl font-bold tracking-tight text-primary mb-10 text-center">
          {t('step1.title')}
        </h1>

        <ul className="space-y-8 grow flex flex-col justify-center">
          {events.map((event) => (
            <ChoiceChip
              to={event.slug}
              key={event.slug}
              category={event.slug}
              imgUrl={event.image}
              text={t(`event.${event.slug}`)}
            />
          ))}
        </ul>
      </div>

      <Footer>
        <div className="text-center">
          <h2 className="text-lg font-bold tracking-tight text-primary-dark">
            {t('step1.fact.title')}
          </h2>
          <p className="text-base font-medium tracking-tight text-primary-dark">
            {t('step1.fact.description')}
          </p>
        </div>
      </Footer>
    </div>
  );
}
