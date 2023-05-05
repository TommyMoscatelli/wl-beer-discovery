import { Outlet, useLocation, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
};

const pageTransition = {
  type: 'tween',
  ease: 'linear',
  duration: 0.5,
};

function App() {
  const [searchParams] = useSearchParams();
  const { i18n } = useTranslation();
  const { pathname } = useLocation();

  useEffect(() => {
    const lang = ['it', 'en'].includes(searchParams.get('lang') || '')
      ? searchParams.get('lang')!
      : 'it';
    i18n.changeLanguage(lang);
  }, [i18n, searchParams]);

  return (
    <motion.div
      className="h-screen max-w-2xl mx-auto relative"
      key={pathname}
      initial="initial"
      animate="in"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Outlet />
    </motion.div>
  );
}

export default App;
