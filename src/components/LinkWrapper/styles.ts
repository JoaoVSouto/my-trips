import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  z-index: 1100;
  top: var(--medium);
  right: var(--medium);
  color: var(--white);
  cursor: pointer;

  svg {
    transition: color 300ms ease-in-out;
  }

  &:hover,
  &:focus-within {
    svg {
      color: var(--highlight);
    }
  }
`;
