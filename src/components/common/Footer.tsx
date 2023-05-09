import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  variant?: 'light' | 'dark';
}

export default function Footer({ variant, children }: Props): JSX.Element {
  const backgroundColorClass =
    variant === 'dark' ? 'bg-[#D2A42A]' : 'bg-[#EADB97]';
  return (
    <div className="">
      <img
        className="w-full"
        src={`${import.meta.env.BASE_URL}img/${variant}_wave.png`}
        alt="The beer discovery"
      />
      <div
        className={`px-6 pb-8 pt-4 flex items-center justify-center ${backgroundColorClass}`}
      >
        {children}
      </div>
    </div>
  );
}

Footer.defaultProps = {
  variant: 'dark',
};
