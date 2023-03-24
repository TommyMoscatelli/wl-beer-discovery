import { MouseEvent } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { findProduct } from './decisionTree';

export default function Step3() {
  const { t } = useTranslation('discovery');
  const { category, characteristic } = useParams();
  const product = findProduct({
    category: category || '',
    characteristic: characteristic || '',
  });

  function handleDeepLink(event: MouseEvent<HTMLElement>, tag: string) {
    // @ts-ignore
    if (window.ReactNativeWebView) {
      // @ts-ignore
      window.ReactNativeWebView.postMessage(
        'wlapp://winelivery/corona-recharge'
      );
      event.preventDefault();
    }
  }

  if (!product) {
    throw new Error(
      `product with category ${category} and characteristic ${characteristic} not found`
    );
  }

  return (
    <div className="flex flex-col min-h-screen relative">
      <div className="absolute top-4 left-4 flex items-center gap-2">
        <Link to="/" className="h-2 w-3 rounded-full bg-gray-400" />
        <Link to="/discovery" className="h-2 w-3 rounded-full bg-gray-400" />
        <Link
          to={`/discovery/${category}`}
          className="h-2 w-3 rounded-full bg-gray-400"
        />
        <Link
          to={`/discovery/${category}/${characteristic}`}
          className="h-2 w-8 rounded-full bg-blue-800"
        />
      </div>
      <img
        className="w-full shrink-0"
        src={`${import.meta.env.BASE_URL}${product.image}`}
        alt={t(`product.${product.slug}.title`)!}
      />
      <div className="px-4 py-6 flex-1 flex flex-col justify-between gap-8">
        <div className="flex-1 text-center text-blue-50">
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            {t(`product.${product.slug}.title`)}
          </h1>
          <p className="text-base font-medium tracking-tight">
            {t(`product.${product.slug}.description`)}
          </p>
        </div>
        <div className="space-y-2">
          <Link
            className="flex items-center justify-center h-14 bg-blue-50 text-[#020046] rounded-md font-bold text-base tracking-tight"
            to="/"
            target="_blank"
            onClick={(e) => handleDeepLink(e, 'watercodex')}
          >
            {t('step3.purchase')}
          </Link>
          <Link
            className="flex items-center justify-center h-14 border border-blue-50 text-blue-50 bg-transparent rounded-md font-bold text-base tracking-tight"
            to="/"
            target="_blank"
            onClick={(e) => handleDeepLink(e, 'watercodex')}
          >
            {t('step3.browse')}
          </Link>
        </div>
      </div>
    </div>
  );
}
