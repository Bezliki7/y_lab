import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useAppDispatch } from '../../hooks/hooks';
import { setLoginData } from '../../redux/slices/loginSlice';
import styles from './login.module.scss';
import { loginValidation } from '../../validators/loginValidation';

function Login() {
  const dispatch = useAppDispatch();
  const [checkbox, setCheckbox] = useState(false);
  const [field, setField] = useState({ email: '', password: '', checkbox });
  const formik = useFormik({
    initialValues: { email: '', password: '', checkbox },
    validate: loginValidation,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
      dispatch(setLoginData(values));
    },
  });
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    formik.handleChange(e);
    const { value, name } = e.target;
    name == 'checkbox' && setCheckbox(!checkbox);
    name == 'email' && setField({ email: value, password: field.password, checkbox });
    name == 'password' && setField({ email: field.email, password: value, checkbox });
  };
  const emailHasError = formik.touched.email && formik.errors.email;
  const passwordHasError = formik.touched.password && formik.errors.password;
  return (
    <form onSubmit={formik.handleSubmit} className={styles.auth}>
      <div className={emailHasError ? styles.error : ''}>
        <input
          name="email"
          type="email"
          value={field.email}
          onChange={onChange}
          className={styles.field}
          placeholder="Email..."
          onBlur={formik.handleBlur}
        />
        <div className={styles.errorDiv}>{emailHasError ? formik.errors.email : ''}</div>
      </div>
      <div className={passwordHasError ? styles.error : ''}>
        <input
          name="password"
          type="password"
          value={field.password}
          onChange={onChange}
          className={styles.field}
          placeholder="Password ..."
          onBlur={formik.handleBlur}
        />
        <div className={styles.errorDiv}>{passwordHasError ? formik.errors.password : ''}</div>
      </div>
      <div className={styles.checkbox}>
        <input name="checkbox" type="checkbox" onChange={onChange} />
        Remember me
      </div>
      <button type="submit"> login </button>
    </form>
  );
}

export default Login;
