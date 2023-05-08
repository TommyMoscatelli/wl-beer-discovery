import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  title: string;
  titleColor?: 'default' | 'dark';
}

export default function ScreenBody({ title, titleColor, children }: Props) {
  const titleColorClass =
    titleColor === 'default' ? 'text-primary' : 'text-primary-dark';

  return (
    <div className="grow px-10 py-12 flex flex-col">
      <h1
        className={`text-3xl font-bold tracking-tigh mb-10 text-center ${titleColorClass}`}
      >
        {title}
      </h1>

      {children}
    </div>
  );
}

ScreenBody.defaultProps = {
  titleColor: 'default',
};
