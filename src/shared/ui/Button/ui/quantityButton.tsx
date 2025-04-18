import styled from 'styled-components';

export const QuantityButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #646cffaa;
  color: ${({ theme }) => theme.palette.text};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #535bf2;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.palette.secondText};
    cursor: not-allowed;
  }
`;