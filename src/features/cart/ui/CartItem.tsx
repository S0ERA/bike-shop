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

  const handleUpdateQuantity = (quantity: number) => {
  dispatch(updateQuantity({ id: item.id, quantity}))
  }

  const handleRemoveQuantity = () => {
    dispatch(removeFromCart(item.id))
  }

  const price = `${item.price.toLocaleString('ru-RU')} ₽`


  return (
    <CartItemWrapper>
      <ItemInfo>
        <ItemName>{item.name}</ItemName>
        <ItemPrice>{price}</ItemPrice>
      </ItemInfo>
      <ItemActions>
        <QuantityControls>
          <QuantityButton
            onClick={() => handleUpdateQuantity(item.quantity - 1)}
            disabled={item.quantity <= 1}
          >
            -
          </QuantityButton>
          <QuantityInput
            type="text"
            min="1"
            value={item.quantity}
            onChange={(e) =>
              handleUpdateQuantity(parseInt(e.target.value) || 1 )}
          />
          <QuantityButton
            onClick={() => handleUpdateQuantity(item.quantity + 1)}>
            +
          </QuantityButton>
        </QuantityControls>
        <RemoveButton onClick={handleRemoveQuantity}>Удалить</RemoveButton>
      </ItemActions>
    </CartItemWrapper>
  );
}
