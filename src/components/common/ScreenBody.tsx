import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  title: string;
}

export default function ScreenBody({ title, children }: Props) {
  return (
    <div className="grow px-10 py-12 flex flex-col">
      <h1 className="text-3xl font-bold tracking-tight text-primary mb-10 text-center">
        {title}
      </h1>

      {children}
    </div>
  );
}
