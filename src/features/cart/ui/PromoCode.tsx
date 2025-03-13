import { useState } from 'react';
import { useAppDispatch } from '@/shared/hooks/hooks';
import { applyPromoCode } from '@/entities/cart/model/slice';
import { PromoCodeButton, PromoCodeInput, PromoCodeWrapper } from '@/features/cart/ui/styles';

export function PromoCode() {
  const dispatch = useAppDispatch();
  const [promoInput, setPromoInput] = useState('');

  const handleApplyPromoCode = () => {
    dispatch(applyPromoCode(promoInput));
    setPromoInput('');
  };

  return (
    <PromoCodeWrapper>
      <PromoCodeInput
        type="text"
        placeholder="Введите промокод"
        value={promoInput}
        onChange={(e) => setPromoInput(e.target.value)}
      />
      <PromoCodeButton onClick={handleApplyPromoCode}>Применить</PromoCodeButton>
    </PromoCodeWrapper>
  );
}
