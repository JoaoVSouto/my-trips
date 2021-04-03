import Link from 'next/link';

import * as S from './styles';

interface LinkWrapperProps {
  href: string;
  children: React.ReactNode;
}

export default function LinkWrapper({ children, href }: LinkWrapperProps) {
  return (
    <S.Wrapper>
      <Link href={href}>{children}</Link>
    </S.Wrapper>
  );
}
