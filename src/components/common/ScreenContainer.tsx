import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  variant?: 'light' | 'dark';
}

export default function ScreenContainer({ variant, children }: Props) {
  return (
    <div
      className={`flex flex-col justify-between h-full bg-[url('/img/background/${variant}.jpg')] bg-cover bg-center`}
    >
      {children}
    </div>
  );
}

ScreenContainer.defaultProps = {
  variant: 'dark',
};
