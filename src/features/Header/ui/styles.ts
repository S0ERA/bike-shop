import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.palette.background};
  color: ${({ theme }) => theme.palette.secondText};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

export const Logo = styled.img`
  width: 10em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;

  &:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
`;

export const LogoName = styled.div`
  font-size: 2.5rem;
  font-weight: 500;
  position: absolute;
  right: 50%;
  top: 50%;
  transform: translateY(-50%) translateX(50%);

  &:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }

  @media (max-width: 1024px) {
    font-size: 1.5rem;
    font-weight: 500;
  }
`;
