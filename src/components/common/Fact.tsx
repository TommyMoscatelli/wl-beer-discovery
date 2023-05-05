interface Props {
  title: string;
  description: string;
}

export default function Fact({ title, description }: Props) {
  return (
    <div className="text-center">
      <h2 className="text-lg font-bold tracking-tight text-primary-dark">
        {title}
      </h2>
      <p className="text-base font-medium tracking-tight text-primary-dark">
        {description}
      </p>
    </div>
  );
}
