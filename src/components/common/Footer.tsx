import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  variant?: 'light' | 'dark';
}

export default function Footer({ variant, children }: Props): JSX.Element {
  return (
    <div className="px-4 h-36">
      <img
        className="w-full absolute bottom-0 left-0"
        src={`${import.meta.env.BASE_URL}img/${variant}_wave.png`}
        alt="The beer discovery"
      />
      <div className="z-10 h-full relative flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}

Footer.defaultProps = {
  variant: 'dark',
};
