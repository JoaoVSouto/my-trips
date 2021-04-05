import { CloseOutline } from '@styled-icons/evaicons-outline';

import LinkWrapper from 'components/LinkWrapper';

import * as S from './styles';

export default function AboutTemplate() {
  return (
    <S.Content>
      <LinkWrapper href="/">
        <CloseOutline size={32} />
      </LinkWrapper>

      <S.Heading>My Trips</S.Heading>

      <S.Body>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
          praesentium itaque animi dolor quibusdam non deserunt at quas placeat
          necessitatibus commodi doloremque, illo provident, aut magni nobis,
          veniam voluptatibus quia.
        </p>
      </S.Body>
    </S.Content>
  );
}
