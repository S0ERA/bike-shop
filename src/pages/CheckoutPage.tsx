import { useAppSelector } from '@/shared/hooks/hooks';
import { CheckoutForm } from '@/features/checkout/ui/CheckoutForm';
import { OrderSuccessMessage } from '@/features/checkout/ui/OrderSuccessMessage';
import { CheckoutWrapper } from '@/features/checkout/ui/styles';

export function CheckoutPage() {
  const { items } = useAppSelector((state) => state.cart);

  if (items.length === 0) {
    return <OrderSuccessMessage />;
  }

  return (
    <CheckoutWrapper>
      <h1 className="pageName">Оформление заказа</h1>
      <CheckoutForm />
    </CheckoutWrapper>
  );
}
