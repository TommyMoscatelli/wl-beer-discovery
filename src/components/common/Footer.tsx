import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  version?: 'light' | 'dark';
}

export default function Footer({ version, children }: Props): JSX.Element {
  return (
    <div className="px-4 h-36">
      <img
        className="w-full absolute bottom-0 left-0"
        src={`${import.meta.env.BASE_URL}img/${version}_wave.png`}
        alt="The beer discovery"
      />
      <div className="z-10 h-full relative flex items-center">{children}</div>
    </div>
  );
}

Footer.defaultProps = {
  version: 'dark',
};
