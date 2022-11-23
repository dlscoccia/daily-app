import { useField } from 'formik'

interface Props {
  label?: string
  name: string
  [newProp: string]: any
}

export const Checkbox = ({ label, ...props }: Props) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' })

  return (
    <>
      <label>
        <input type="checkbox" {...field} {...props} />
        {label}
      </label>

      {meta.touched && meta.error && (
        <span className="error">{meta.error}</span>
      )}
    </>
  )
}
