import { CloseOutline } from '@styled-icons/evaicons-outline';

import LinkWrapper from 'components/LinkWrapper';

import * as S from './styles';

export interface PageTemplateProps {
  heading: string;
  body: string;
}

export default function PageTemplate({ body, heading }: PageTemplateProps) {
  return (
    <S.Content>
      <LinkWrapper href="/">
        <CloseOutline size={32} />
      </LinkWrapper>

      <S.Heading>{heading}</S.Heading>

      <S.Body>
        <div dangerouslySetInnerHTML={{ __html: body }}></div>
      </S.Body>
    </S.Content>
  );
}
