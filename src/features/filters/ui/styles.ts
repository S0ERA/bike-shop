import styled from 'styled-components';

export const FiltersWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.palette.secondary};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const FilterSelect = styled.select`
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.palette.border};
  color: ${({ theme }) => theme.palette.text};
  border: 1px solid ${({ theme }) => theme.palette.background};
  border-radius: 8px;
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.palette.hover};
    border-color: ${({ theme }) => theme.palette.hover};
  }

  &:focus {
    outline: none;
    border-color: #646cffaa;
  }
`;

export const FilterLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.palette.text};
  cursor: pointer;
`;

export const FilterCheckbox = styled.input`
  width: 1.2rem;
  height: 1.2rem;
  accent-color: #646cffaa;
  cursor: pointer;
`;

export const ResetButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #dc3545;
  color: ${({ theme }) => theme.palette.text};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 1rem;
  font-weight: 500;

  &:hover {
    background-color: #c82333;
  }
`;
