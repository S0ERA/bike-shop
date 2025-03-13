import { OrderPlaced } from '@/features/checkout/ui/styles';

export const OrderSuccessMessage = () => (
  <OrderPlaced>
    <h1 className="order-title">Заказ успешно оформлен!</h1>
    <p className="order-description">Спасибо за покупку. Ожидайте подтверждения заказа по email.</p>

    <div className="order-actions">
      <a href="/catalog" className="continue-shopping">
        Продолжить покупки
      </a>
    </div>
  </OrderPlaced>
);
