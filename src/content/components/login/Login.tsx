import { CheckBox } from '@/shared/components/CheckBox'
import { Select } from '@/shared/components/Select'
import { TextInput } from '@/shared/components/TextInput'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

export const Login = () => {
  return (
    <div className="min-h-screen flex flex-col w-100 h- justify-center items-center bg-blue-800">
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          terms: false,
          jobType: '',
        }}
        onSubmit={(values) => {
          console.log(values)
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Debe de tener 15 caracteres o menos')
            .required('Requerido'),
          lastName: Yup.string()
            .max(15, 'Debe de tener 15 caracteres o menos')
            .required('Requerido'),
          email: Yup.string()
            .email('El correo no tiene un formato válido')
            .required('Requerido'),
          terms: Yup.boolean().oneOf([true], 'Debe de aceptar las condiciones'),
          jobType: Yup.string()
            .notOneOf(['it-jr'], 'Esta opción no es permitida.')
            .required('Requerido'),
        })}
      >
        {() => (
          <Form className="bg-gray-100 p-4 rounded-md">
            <h1 className="text-center p-2 text-lg font-bold text-blue-800">
              Login
            </h1>
            <TextInput
              label="First Name"
              name="firstName"
              placeholder="Fernando"
            />

            <TextInput
              label="Last Name"
              name="lastName"
              placeholder="Herrera"
            />

            <TextInput
              label="Email Address"
              name="email"
              placeholder="jonh@google.com"
              type="email"
            />

            <Select label="Job Type" name="jobType">
              <option value="">Pick something</option>
              <option value="developer">Develper</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT Senior</option>
              <option value="it-jr">IT Jr.</option>
            </Select>

            <CheckBox label="Termns & Conditions" name="terms" />

            <button type="submit" className="bg-gray-600 text-white rounded-md">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
