import styled from 'styled-components';

export const CheckoutWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  margin-top: 20px;
  padding: 20px;
  background-color: ${({ theme }) => theme.palette.secondary};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: ${({ theme }) => theme.palette.text};
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
`;

export const FormLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.palette.background};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.palette.border};
  color: ${({ theme }) => theme.palette.text};
  font-size: 1rem;
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

export const FormSelect = styled.select`
  width: 100%;
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.palette.background};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.palette.border};
  color: ${({ theme }) => theme.palette.text};
  font-size: 1rem;
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.palette.background};
    border-color: ${({ theme }) => theme.palette.background};
  }

  &:focus {
    outline: none;
    border-color: #646cffaa;
  }
`;

export const ErrorMessage = styled.div`
  color: #dc3545;
  font-size: 14px;
  margin-top: 5px;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 10px 20px;
  background-color: #646cffaa;
  color: ${({ theme }) => theme.palette.text};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #535bf2;
  }
`;

export const OrderPlaced = styled.div`
  text-align: center;
  margin-top: 50px;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.palette.text};
`;
