export const registerForm = [
  {
    type: 'text',
    name: 'firstName',
    placeholder: 'First Name...',
    value: '',
    label: 'First name',
    validations: [
      {
        type: 'required',
      },
      {
        type: 'min-len',
        value: 5,
      },
    ],
  },
  {
    type: 'text',
    name: 'lastName',
    placeholder: 'Last Name...',
    value: '',
    label: 'Last name',
    validations: [
      {
        type: 'required',
      },
    ],
  },
  {
    type: 'email',
    name: 'email',
    placeholder: 'Email...',
    value: '',
    label: 'Email',
    validations: [
      {
        type: 'required',
      },
      {
        type: 'email',
      },
    ],
  },
  {
    type: 'password',
    name: 'password',
    placeholder: 'Password...',
    value: '',
    label: 'Password',
    validations: [
      {
        type: 'required',
      },
    ],
  },
  {
    type: 'password',
    name: 'password2',
    placeholder: 'Confirm Password...',
    value: '',
    label: 'Confirm Password',
    validations: [
      {
        type: 'required',
      },
    ],
  },
]
export const loginForm = [
  {
    type: 'email',
    name: 'email',
    placeholder: 'Email...',
    value: 'fonzi@google.com',
    label: 'Email',
    validations: [
      {
        type: 'required',
      },
      {
        type: 'email',
      },
    ],
  },
  {
    type: 'password',
    name: 'password',
    placeholder: 'Password...',
    value: '123456',
    label: 'Password',
    validations: [
      {
        type: 'required',
      },
    ],
  },
]
/*   {
  "type": "select",
  "name": "favoriteGame",
  "placeholder": "Favorite...",
  "value": "",
  "label": "Favorite Game",
  "options": [
    { "id": 1, "description": "Super Smash" },
    { "id": 2, "description": "Metal Gear" },
    { "id": 3, "description": "Pokemon" }
  ]
} */
