import styled from 'styled-components';
import { Link } from 'react-router';

export const NavBarWrapper = styled.nav`
  display: flex;
  gap: 1rem;
  position: relative;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  color: ${({ theme }) => theme.palette.text};
  background-color: ${({ theme }) => theme.palette.border};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.palette.hover};
  }

  span {
    font-size: 1rem;
    font-weight: 500;
  }
`;
