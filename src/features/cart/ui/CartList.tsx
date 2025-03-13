import { CartItem } from '@/features/cart/ui/CartItem';
import { ICartItem } from '@/entities/cart/model/slice';
import { CartListWrapper } from './styles';

interface CartListProps {
  items: ICartItem[];
}

export function CartList({ items }: CartListProps) {
  return (
    <CartListWrapper>
      {items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </CartListWrapper>
  );
}
