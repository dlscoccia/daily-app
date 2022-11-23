import { Checkbox } from '@/shared/components/CheckBox'
import { Select } from '@/shared/components/Select'
import { TextInput } from '@/shared/components/TextInput'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

export const Login = () => {
  return (
    <div className="min-h-screen w-100 bg-blue-300 flex  flex-col justify-center items-center">
      <h1>Login</h1>

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
            .max(15, 'Must have less than 15 chars')
            .required('Name required'),
          lastName: Yup.string()
            .max(15, 'Must have less than 15 chars')
            .required('Name required'),
          email: Yup.string()
            .email('email must be valid')
            .required('email is required'),
          terms: Yup.boolean().oneOf([true], 'You must accept terms'),
          jobType: Yup.string()
            .required('Required')
            .notOneOf(['it-junior'], 'Not valid'),
        })}
      >
        {() => (
          <Form>
            <TextInput
              label="Firts Name"
              name="firstName"
              placeholder="Name"
              type="text"
            />
            <TextInput
              label="Last Name"
              name="lastName"
              placeholder="Last Name"
              type="text"
            />
            <TextInput
              label="Email"
              name="email"
              placeholder="Email"
              type="email"
            />

            <Select label="Job Type" name="jobType">
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT Senior</option>
              <option value="it-junior">IT Junior</option>
            </Select>

            <Checkbox label={'Terms & conditions'} name={'terms'} />

            <button type="submit" className="bg-blue-700">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
