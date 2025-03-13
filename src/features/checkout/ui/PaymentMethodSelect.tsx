import { FormikProps } from 'formik';
import { ErrorMessage, FormGroup, FormLabel, FormSelect } from '@/features/checkout/ui/styles';

type Props = {
  formik: FormikProps<any>;
};

export const PaymentMethodSelect = ({ formik }: Props) => {
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
