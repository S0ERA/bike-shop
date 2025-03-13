import { InputField } from '@/shared/ui/InputField/InputField';
import { DeliveryMethodSelect } from './DeliveryMethodSelect';
import { PaymentMethodSelect } from './PaymentMethodSelect';
import { OrderSummary } from '@/features/cart/ui/OrderSummary';
import { useCheckoutForm } from '@/features/checkout/model/hooks/useCheckoutForm';
import { SubmitButton } from '@/features/checkout/ui/styles';

export const CheckoutForm = () => {
  const { formik, total } = useCheckoutForm();

  return (
    <form onSubmit={formik.handleSubmit}>
      <InputField
        label="ФИО"
        name="fullName"
        type="text"
        formik={formik}
        placeholder="Иванов Иван Иванович"
      />

      <InputField
        label="Email"
        name="email"
        type="email"
        formik={formik}
        placeholder="example@mail.com"
      />

      <InputField
        label="Телефон"
        name="phone"
        type="tel"
        formik={formik}
        placeholder="+71234567890"
      />

      <InputField
        label="Адрес доставки"
        name="address"
        type="text"
        formik={formik}
        placeholder="Город, улица, дом, квартира"
      />

      <DeliveryMethodSelect formik={formik} />
      <PaymentMethodSelect formik={formik} />

      <OrderSummary total={total} />

      <SubmitButton type="submit">Оформить заказ</SubmitButton>
    </form>
  );
};
