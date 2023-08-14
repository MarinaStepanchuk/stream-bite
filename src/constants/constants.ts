const ROUTE = {
  mainPage: '/',
  loginPage: '/login',
  errorPage: '*',
};

const ERROR_MESSAGES = {
  validation: {
    emptyField: 'field cannot be empty',
    email: 'invalid e-mail',
    name: 'name must contain a minimum of 3 characters and begin with a letter and include letters, numbers, or "-"',
    password:
      'password must contain a minimum of 6 characters including at least 1 number, 1 upper case letter, 1 lower case letter and one symbol.',
  },
};

const REGISTRATION_CONTEXT = {
  title: 'Registration',
  question: 'Have an account?',
  link: 'Sign in',
  submitButton: 'SIGN UP',
};

const SIGN_IN_CONTEXT = {
  title: 'Sign In',
  question: "Don't have an account?",
  link: 'Sign up',
  submitButton: 'SIGN IN',
};

const REGEX = {
  email:
    /^((([0-9A-Za-z]{1}[-0-9A-z\\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u,
  name: /^[a-z][a-z0-9- ]{3,}$/i,
  password: /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g,
};

export { ROUTE, ERROR_MESSAGES, REGISTRATION_CONTEXT, SIGN_IN_CONTEXT, REGEX };
