import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import formData from '../../core/api/form.json'
import { Select } from './Select'
import { TextInput } from './TextInput'

const initialValues: { [key: string]: any } = {}

const requiredFields: { [key: string]: any } = {}

for (const input of formData) {
  initialValues[input.name] = input.value

  if (!input.validations) continue

  let schema = Yup.string()

  for (const rule of input.validations) {
    if (rule.type === 'required') {
      schema = schema.required('Required field')
    }
    if (rule.type === 'min-len') {
      schema = schema.min(
        (rule as any).value || 5,
        `Name must have at least ${rule.value} chars`
      )
    }
    if (rule.type === 'email') {
      schema = schema.email('Invalid email')
    }
  }

  requiredFields[input.name] = schema
}

const validationSchema = Yup.object({ ...requiredFields })

export const FormDynamic = () => {
  return (
    <div className="min-h-screen w-100 flex flex-col bg-blue-800 items-center justify-center">
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {() => (
          <Form className="p-4 rounded-md bg-gray-100">
            <h1 className="text-center p-2 text-lg font-bold text-blue-800">
              Dynamic Form
            </h1>
            {formData.map(({ type, name, placeholder, label, options }) => {
              if (type === 'text' || type === 'email' || type === 'password') {
                return (
                  <TextInput
                    key={name}
                    type={type as any}
                    name={name}
                    label={label}
                    placeholder={placeholder}
                  />
                )
              } else if (type === 'select') {
                return (
                  <Select key={name} label={label} name={name}>
                    <option value="">Select option</option>
                    {options?.map(({ id, description }) => (
                      <option key={id} value={id}>
                        {description}
                      </option>
                    ))}
                  </Select>
                )
              }
            })}
            <button type="submit" className="bg-gray-600 text-white rounded-md">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
