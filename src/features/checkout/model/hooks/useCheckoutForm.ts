import { useFormik } from 'formik';
import { checkoutSchema } from '@/shared/utils/schemas';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/hooks';
import { clearCart } from '@/entities/cart/model/slice';

export const useCheckoutForm = () => {
  const dispatch = useAppDispatch();
  const { items, discount } = useAppSelector((state) => state.cart);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal * (1 - discount);

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      phone: '',
      address: '',
      deliveryMethod: '',
      paymentMethod: '',
    },
    validationSchema: checkoutSchema,
    onSubmit: (values) => {
      console.log('Заказ оформлен:', values);
      dispatch(clearCart());
    },
  });

  return { formik, total, subtotal, discount };
};
