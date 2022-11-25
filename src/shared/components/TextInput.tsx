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
    <div className="flex flex-col mt-2 mb-3">
      <label htmlFor={props.id || props.name} className="text-dark font-bold">
        {label}
      </label>
      <input {...field} {...props} className="focus:outline-none rounded-lg" />
      <ErrorMessage name={props.name} component="span" />
    </div>
  )
}
