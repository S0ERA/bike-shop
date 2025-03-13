import { Subtotal, Total } from '@/features/cart/ui/styles';

interface OrderSummaryProps {
  total: number;
  subtotal?: number;
  discount?: number;
}

export const OrderSummary = ({ total, subtotal, discount }: OrderSummaryProps) => (
  <div className="order-summary">
    {subtotal !== undefined && (
      <Subtotal>
        <span>Промежуточная сумма:</span>
        <span>{subtotal.toLocaleString('ru-RU')} ₽</span>
      </Subtotal>
    )}

    {discount !== undefined && discount > 0 && (
      <div className="summary-row">
        <span>Скидка:</span>
        <span>{(discount * 100).toFixed(0)}%</span>
      </div>
    )}

    <Total>
      <span>Итоговая сумма:</span>
      <span>{total.toLocaleString('ru-RU')} ₽</span>
    </Total>
  </div>
);
