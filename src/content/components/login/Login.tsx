import { FormBuilder } from '@/shared/components/FormBuilder'
import { loginForm } from '@/core/api/form'
import Swal from 'sweetalert2'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { onLogin } from '@/core/store'

export const Login = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const onSubmitLogin = async (values: any) => {
    console.log(values)
    const resp = await fetch('http://localhost:4000/login', {
      method: 'POST',
      body: JSON.stringify(values),
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
      title: 'Login Success',
      showConfirmButton: false,
      timer: 2000,
    })
    const { user, token } = data
    dispatch(onLogin({ ...user, token }))
    router.push('/home')
  }

  return (
    <FormBuilder heading={'Login'} data={loginForm} submit={onSubmitLogin} />
  )
}
/*     <div className="min-h-screen flex flex-col w-100 h- justify-center items-center bg-blue-800">
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
} */
