import styled from 'styled-components';

export const CartWrapper = styled.div`
  padding: 2rem;
  background-color: ${({ theme }) => theme.palette.secondary};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: ${({ theme }) => theme.palette.text};
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 20px;
`;

export const CartListWrapper = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const CartItemWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.palette.background};
`;

export const ItemInfo = styled.div`
  flex: 1;
`;

export const ItemName = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
  color: ${({ theme }) => theme.palette.text};
`;

export const ItemPrice = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.palette.secondText};
  margin: 0.5rem 0;
`;

export const ItemActions = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const QuantityInput = styled.input`
  width: 50px;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.palette.secondText};
  border-radius: 4px;
  padding: 5px;
  font-size: 16px;
`;

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

export const RemoveButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #dc3545;
  color: ${({ theme }) => theme.palette.text};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c82333;
  }
`;

export const Subtotal = styled.div`
  margin-top: 1rem;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.palette.text};
`;

export const PromoCodeWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

export const PromoCodeInput = styled.input`
  flex: 1;
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.palette.background};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.palette.border};
  color: ${({ theme }) => theme.palette.text};
  font-size: 1rem;
`;

export const PromoCodeButton = styled.button`
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
`;

export const Total = styled.div`
  margin-top: 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.palette.text};
`;

export const ClearCartButton = styled.button`
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
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
`;

export const CheckoutButton = styled.button`
  margin-top: 1rem;
  margin-right: 1rem;
  padding: 0.75rem 1.5rem;
  background-color: #646cffaa;
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
`;
