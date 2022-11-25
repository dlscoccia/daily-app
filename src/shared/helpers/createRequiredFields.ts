import * as Yup from 'yup'

const requiredFields: { [key: string]: any } = {}

export const createRequiredFields = (data: any, initialValues: any) => {
  for (const input of data) {
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

  return validationSchema
}
