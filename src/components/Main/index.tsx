import * as S from './styles';

export default function Main() {
  return (
    <S.Wrapper>
      <S.Logo
        src="https://raw.githubusercontent.com/React-Avancado/boilerplate/7df00794c0d0e6cf75c78dbd9530803e8fbfa72f/public/img/logo.svg"
        alt="Imagem de um átomo e React Avançado escrito ao lado."
      />

      <S.Title>React Avançado</S.Title>

      <S.Description>
        TypeScript, ReactJS, NextJS e Styled Components
      </S.Description>

      <S.Illustration
        src="https://raw.githubusercontent.com/React-Avancado/boilerplate/7df00794c0d0e6cf75c78dbd9530803e8fbfa72f/public/img/hero-illustration.svg"
        alt="Um desenvolvedor de frente para uma tela com código."
      />
    </S.Wrapper>
  );
}
