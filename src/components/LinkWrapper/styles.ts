import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  z-index: 1100;
  top: var(--medium);
  right: var(--medium);
  cursor: pointer;

  a {
    color: var(--white);
    transition: color 300ms ease-in-out;
    display: block;
    font-size: 0;

    &:hover,
    &:focus {
      color: var(--highlight);
    }
  }
`;
