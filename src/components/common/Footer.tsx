import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  version?: 'light' | 'dark';
}

export default function Footer({ version, children }: Props): JSX.Element {
  return (
    <div className="px-4 z-10 relative flex h-36 items-center">
      <img
        className="w-full absolute bottom-0 left-0"
        src={`${import.meta.env.BASE_URL}img/${version}_wave.png`}
        alt="The beer discovery"
      />
      {children}
    </div>
  );
}

Footer.defaultProps = {
  version: 'dark',
};
