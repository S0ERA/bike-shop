import styled from 'styled-components';

export const DefaultButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.palette.border};
  color: ${({ theme }) => theme.palette.text};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 1rem;
  font-weight: 500;

  &:hover {
    background-color: ${({ theme }) => theme.palette.hover};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.palette.secondText};
    cursor: not-allowed;
  }
`;