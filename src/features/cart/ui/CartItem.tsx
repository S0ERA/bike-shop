import { useAppDispatch } from '@/shared/hooks/hooks';
import { updateQuantity, removeFromCart } from '@/entities/cart/model/slice';
import { ICartItem } from '@/entities/cart/model/slice';
import {
  CartItemWrapper,
  ItemActions,
  ItemInfo,
  ItemName,
  ItemPrice,
  QuantityButton,
  QuantityControls,
  QuantityInput,
  RemoveButton,
} from '@/features/cart/ui/styles';

interface CartItemProps {
  item: ICartItem;
}

export function CartItem({ item }: CartItemProps) {
  const dispatch = useAppDispatch();

  return (
    <CartItemWrapper>
      <ItemInfo>
        <ItemName>{item.name}</ItemName>
        <ItemPrice>{item.price.toLocaleString('ru-RU')} ₽</ItemPrice>
      </ItemInfo>
      <ItemActions>
        <QuantityControls>
          <QuantityButton
            onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
            disabled={item.quantity <= 1}
          >
            -
          </QuantityButton>
          <QuantityInput
            type="text"
            min="1"
            value={item.quantity}
            onChange={(e) =>
              dispatch(updateQuantity({ id: item.id, quantity: parseInt(e.target.value) || 1 }))
            }
          />
          <QuantityButton
            onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
          >
            +
          </QuantityButton>
        </QuantityControls>
        <RemoveButton onClick={() => dispatch(removeFromCart(item.id))}>Удалить</RemoveButton>
      </ItemActions>
    </CartItemWrapper>
  );
}
