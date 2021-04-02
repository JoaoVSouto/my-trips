interface Props {
  title: string;
}

export default function Home({ title }: Props) {
  return <h1>{title}</h1>;
}
