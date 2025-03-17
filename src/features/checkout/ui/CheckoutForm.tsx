import { OrderSummary } from '@/features/cart/ui/OrderSummary';
import { useCheckoutForm } from '@/features/checkout/model/hooks/useCheckoutForm';
import { SubmitButton } from '@/features/checkout/ui/styles';
import { FormikProvider } from 'formik';
import { InputField } from '@/shared/ui/InputField/ui/InputField';
import { DeliveryMethodSelect } from '@/features/checkout/ui/DeliveryMethodSelect';
import { PaymentMethodSelect } from '@/features/checkout/ui/PaymentMethodSelect';

export const CheckoutForm = () => {
  const { formik, total } = useCheckoutForm();

  return (
    <FormikProvider value={formik}>
      <form onSubmit={formik.handleSubmit}>
        <InputField
          label="ФИО"
          name="fullName"
          type="text"
          placeholder="Иванов Иван Иванович"
        />

        <InputField
          label="Email"
          name="email"
          type="email"
          placeholder="example@mail.com"
        />

        <InputField
          label="Телефон"
          name="phone"
          type="tel"
          placeholder="+71234567890"
        />

        <InputField
          label="Адрес доставки"
          name="address"
          type="text"
          placeholder="Город, улица, дом, квартира"
        />

        <DeliveryMethodSelect />
        <PaymentMethodSelect />

        <OrderSummary total={total} />

        <SubmitButton type="submit">Оформить заказ</SubmitButton>
      </form>
    </FormikProvider>
  );
};