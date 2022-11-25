import { Formik, Form } from 'formik'
import { Select } from './Select'
import { TextInput } from './TextInput'
import { createRequiredFields } from '../helpers/createRequiredFields'

const initialValues: { [key: string]: any } = {}

export const FormBuilder = ({ data, submit, heading = '' }: any) => {
  const validationSchema = createRequiredFields(data, initialValues)
  return (
    <div className="min-h-screen w-100 flex flex-col bg-dark items-center justify-center">
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => submit(values)}
        validationSchema={validationSchema}
      >
        {() => (
          <Form className="min-h-4/5 w-4/5 p-4 rounded-md bg-bone">
            <h1 className="text-center p-2 text-3xl font-bold text-cyan">
              {heading}
            </h1>
            {data.map(({ type, name, placeholder, label, options }: any) => {
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
                    {options?.map(({ id, description }: any) => (
                      <option key={id} value={id}>
                        {description}
                      </option>
                    ))}
                  </Select>
                )
              }
            })}
            <button
              type="submit"
              className="bg-cyan text-bone rounded-md text-bold text-2xl border-2 border-cyan hover:border-lime"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
