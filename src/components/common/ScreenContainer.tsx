import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  variant?: 'light' | 'dark';
}

export default function ScreenContainer({ variant, children }: Props) {
  const backgroundClass =
    variant === 'light'
      ? "bg-[url('/img/background/light.jpg')]"
      : "bg-[url('/img/background/dark.jpg')]";

  return (
    <div
      className={`flex flex-col justify-between h-full ${backgroundClass} bg-cover bg-center`}
    >
      {children}
    </div>
  );
}

ScreenContainer.defaultProps = {
  variant: 'light',
};
