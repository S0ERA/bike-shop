import * as Yup from 'yup';

export const checkoutSchema = Yup.object({
  fullName: Yup.string()
    .required('Обязательное поле')
    .matches(/^[А-Яа-я\s]+$/, 'ФИО должно содержать только кириллицу'),
  email: Yup.string().email('Некорректный email').required('Обязательное поле'),
  phone: Yup.string()
    .required('Обязательное поле')
    .matches(/^\+7\d{10}$/, 'Телефон должен быть в формате +7XXXXXXXXXX'),
  address: Yup.string().required('Обязательное поле'),
  deliveryMethod: Yup.string().required('Выберите способ доставки'),
  paymentMethod: Yup.string().required('Выберите способ оплаты'),
});
