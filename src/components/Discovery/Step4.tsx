import { MouseEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ScreenContainer from '../common/ScreenContainer';
import Header from '../common/Header';
import ScreenBody from '../common/ScreenBody';
import Footer from '../common/Footer';
import Button from '../common/Button';
import decisionTree from '../../data/decisionTree';

export default function Step4() {
  const { t } = useTranslation('discovery');
  const { event, taste, characteristic } = useParams();
  const navigate = useNavigate();

  if (!event || !taste || !characteristic) {
    navigate('/');
    return null;
  }

  const product = decisionTree.getResult([event, taste, characteristic]);

  function navigateDeepLink(link: string) {
    // @ts-ignore
    if (window.ReactNativeWebView) {
      // @ts-ignore
      window.ReactNativeWebView.postMessage(link);
    }
  }

  function createClickHandler(link: string) {
    return (e: MouseEvent<HTMLElement>) => {
      e.preventDefault();
      navigateDeepLink(link);
    };
  }

  if (!product) {
    throw new Error(
      `product for event: ${event}, with taste: ${taste} and characteristic ${characteristic} not found`
    );
  }

  return (
    <ScreenContainer>
      <Header />

      <ScreenBody title={t('step4.title')} titleColor="dark">
        <div className="overflow-hidden">
          <div className="flex justify-center relative">
            <img
              src={`${import.meta.env.BASE_URL}${product.image}`}
              alt={t(`product.${product.slug}.title`) || 'Product image'}
              height="375px"
              className="object-fill object-top max-h-[375px]"
            />
            {!product.characteristics?.isAlcoolFree && (
              <img
                src={`${import.meta.env.BASE_URL}img/alcool-content.png`}
                alt="Contiene alcol"
                className="absolute bottom-0 right-0 h-20"
              />
            )}
          </div>
          <h1 className="text-xl font-bold tracking-tight mb-2 text-center text-primary-dark">
            {t(`product.${product.slug}.title`)}
          </h1>
          <p className="text-center">
            {t(`product.${product.slug}.description`)}
          </p>
        </div>
      </ScreenBody>

      <Footer>
        <div className="flex flex-col grow space-y-4">
          <Button
            href="/"
            text={t('step4.button.buy')}
            onClick={createClickHandler(
              `wlapp://winelivery/products/${product.id}`
            )}
          />
          <Button
            href="/"
            text={t('step4.button.browse')}
            onClick={createClickHandler(
              `wlapp://winelivery/sections/6458c3c46fd88300663b1bbb`
            )}
          />
        </div>
      </Footer>
    </ScreenContainer>
  );
}
