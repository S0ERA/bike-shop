import { FormikProps } from 'formik';
import { ErrorMessage, FormGroup, FormInput, FormLabel } from '@/features/checkout/ui/styles';

interface InputFieldProps {
  label: string;
  name: string;
  type: string;
  formik: FormikProps<any>;
  placeholder?: string;
}

export const InputField = ({ label, name, type, formik, placeholder }: InputFieldProps) => {
  const errorMessage =
    formik.touched[name] && formik.errors[name] ? String(formik.errors[name]) : null;

  return (
    <FormGroup>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <FormInput
        id={name}
        name={name}
        type={type}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[name]}
        placeholder={placeholder}
      />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </FormGroup>
  );
};
