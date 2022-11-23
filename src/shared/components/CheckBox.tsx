import { useField } from 'formik'

interface Props {
  label?: string
  name: string
  [newProp: string]: any
}

export const CheckBox = ({ label, ...props }: Props) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' })

  return (
    <>
      <label className="mt-3 flex items-center">
        <input type="checkbox" {...field} {...props} className="mr-3" />
        {label}
      </label>

      {meta.touched && meta.error && (
        <span className="error">{meta.error}</span>
      )}
    </>
  )
}
