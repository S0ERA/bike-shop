import { ErrorMessage, FormGroup, FormLabel, FormSelect } from '@/features/checkout/ui/styles';
import { useFormikContext } from 'formik';

export const DeliveryMethodSelect = () => {
  const formik = useFormikContext<any>();
  const errorMessage =
    formik.touched.deliveryMethod && formik.errors.deliveryMethod
      ? String(formik.errors.deliveryMethod)
      : null;

  return (
    <FormGroup>
      <FormLabel>Способ доставки</FormLabel>
      <FormSelect
        name="deliveryMethod"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.deliveryMethod}
      >
        <option value="">Выберите способ доставки</option>
        <option value="selfPickup">Самовывоз</option>
        <option value="courier">Курьерская доставка</option>
        <option value="post">Почта России</option>
      </FormSelect>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </FormGroup>
  );
};