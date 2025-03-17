import { useAppDispatch, useAppSelector } from '@/shared/hooks/hooks';
import { clearCart } from '@/entities/cart/model/slice';
import { Link } from 'react-router';
import { CartList } from '@/features/cart/ui/CartList';
import { OrderSummary } from '@/features/cart/ui/OrderSummary';
import { PromoCode } from '@/features/cart/ui/PromoCode';
import { CartWrapper, CheckoutButton, ClearCartButton } from '@/features/cart/ui/styles';
import { useMemo } from 'react';

export function Cart() {
  const dispatch = useAppDispatch();
  const { items, discount } = useAppSelector((state) => state.cart);

  const subtotal = useMemo(() => items.reduce((sum, item) => sum + item.price * item.quantity, 0), []);
  const total = subtotal * (1 - discount);

  return (
    <CartWrapper>
      <h1 className="pageName">Корзина</h1>

      <CartList items={items} />

      <OrderSummary subtotal={subtotal} total={total} discount={discount} />

      <PromoCode />

      <Link to="/checkoutPage">
        <CheckoutButton>Оформить заказ</CheckoutButton>
      </Link>

      <ClearCartButton onClick={() => dispatch(clearCart())}>Очистить корзину</ClearCartButton>
    </CartWrapper>
  );
}
