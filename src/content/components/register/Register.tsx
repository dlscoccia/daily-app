// import { client } from '@/core/api/axios'
import { FormBuilder } from '@/shared/components/FormBuilder'
import Swal from 'sweetalert2'
import { registerForm } from '../../../core/api/form'

export const Register = () => {
  const onSubmitRegister = async (values: any) => {
    const resp = await fetch('http://localhost:4000/register', {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(values), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const data = await resp.json()
    if (!resp.ok) {
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: data.msg,
      })
    }

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'User created',
      // showConfirmButton: false,
      // timer: 1500,
    })
  }

  return (
    <FormBuilder
      heading={'Register'}
      data={registerForm}
      submit={onSubmitRegister}
    />
  )
}
{
  /* <div className="min-h-screen w-100 flex flex-col bg-blue-800 items-center justify-center">
      <Formik
        initialValues={{
          name: '',
          email: '',
          password1: '',
          password2: '',
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, 'Must be at least 3 chars')
            .max(15, 'Name is too long')
            .required('Required'),
          email: Yup.string().email('Not valid email').required('Required'),
          password1: Yup.string()
            .min(6, 'Must be at least 6 chars')
            .required('Required'),
          password2: Yup.string()
            .required('Required')
            .oneOf([Yup.ref('password1')], 'Password does not match'),
        })}
      >
        {({ handleReset }) => (
          <Form className="p-4 rounded-md bg-gray-100">
            <h1 className="text-center p-2 text-lg font-bold text-blue-800">
              Register
            </h1>

            <TextInput
              label="Name"
              name="name"
              placeholder="Name"
              type="text"
            />
            <TextInput
              label="Email"
              name="email"
              placeholder="Email"
              type="email"
            />
            <TextInput
              label="Password"
              name="password1"
              placeholder="Password"
              type="password"
            />
            <TextInput
              label="Confirm password"
              name="password2"
              placeholder="Confirm password"
              type="password"
            />

            <button type="submit" className="bg-gray-600 text-white rounded-md">
              Create
            </button>

            <button
              type="button"
              className="bg-gray-600 text-white rounded-md"
              onClick={handleReset}
            >
              Reset Form
            </button>
          </Form>
        )}
      </Formik>
    </div> */
}
