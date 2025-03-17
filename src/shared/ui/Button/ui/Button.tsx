import styled from 'styled-components';
import { QuantityButton } from '@/shared/ui/Button/ui/quantityButton';
import { DefaultButton } from '@/shared/ui/Button/ui/defaultButton';

export interface IButtonProps {
  type: "default" | "quantity";
  children: string;
  onClick?: () => void;
}

const Button = ({ type, children, onClick }: IButtonProps) => {
  switch (type) {
    case "default":
      return <DefaultButton  onClick={onClick}>{children}</DefaultButton> ;
    case "quantity":
      return <QuantityButton onClick={onClick}>{children}</QuantityButton>;
    default:
      return null;
  }
};

export default Button;






