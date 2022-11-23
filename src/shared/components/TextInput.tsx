import { ErrorMessage, useField } from 'formik'

interface Props {
  label: string
  name: string
  type?: 'text' | 'email' | 'password'
  placeholder?: string
  [newProp: string]: any
}

export const TextInput = ({ label, ...props }: Props) => {
  const [field] = useField(props)

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input {...field} {...props} />
      <ErrorMessage name={props.name} component="span" />
    </>
  )
}