import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {}

export default function Header({ children }: Props) {
  return <div>{children}</div>;
}
