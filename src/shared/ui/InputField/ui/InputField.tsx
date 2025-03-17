import { ErrorMessage, FormGroup, FormInput, FormLabel } from '@/features/checkout/ui/styles';
import { useFormikContext } from 'formik';

interface InputFieldProps {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
}

export const InputField = ({ label, name, type, placeholder }: InputFieldProps) => {
  const formik = useFormikContext<any>();
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
