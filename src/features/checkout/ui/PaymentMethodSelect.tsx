import { ErrorMessage, FormGroup, FormLabel, FormSelect } from '@/features/checkout/ui/styles';
import { useFormikContext } from 'formik';

export const PaymentMethodSelect = () => {
  const formik = useFormikContext<any>();
  const errorMessage =
    formik.touched.paymentMethod && formik.errors.paymentMethod
      ? String(formik.errors.paymentMethod)
      : null;

  return (
    <FormGroup>
      <FormLabel>Способ оплаты</FormLabel>
      <FormSelect
        name="paymentMethod"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.paymentMethod}
      >
        <option value="">Выберите способ оплаты</option>
        <option value="online">Онлайн</option>
        <option value="cash">Наличными при получении</option>
        <option value="card">Картой при получении</option>
      </FormSelect>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </FormGroup>
  );
};