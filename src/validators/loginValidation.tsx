export const loginValidation = (value: any) => {
  let errors = { email: '', password: '', checkbox: false };
  if (!value.email.includes('@')) {
    errors.email = '@ should be in the email';
  }
  if (!value.email) {
    errors.email = 'Required';
  }
  if (!value.password) {
    errors.password = 'Required';
    return errors
  }
  if (value.password.length < 3) {
    errors.password = 'Password too short';
  }

  if (!(errors.email || errors.password)) return {}
  return errors;
};

