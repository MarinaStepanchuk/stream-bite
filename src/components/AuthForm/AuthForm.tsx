import { useEffect, useState } from 'react';
import Button from '../Button/Button';
import styles from './AuthForm.module.scss';
import {
  ERROR_MESSAGES,
  REGEX,
  REGISTRATION_CONTEXT,
  SIGN_IN_CONTEXT,
} from '../../constants/constants';
import { FIELDS, IAuthForm } from './types';

const AuthForm = ({ cb, register, setRegister }: IAuthForm): JSX.Element => {
  const context = register ? REGISTRATION_CONTEXT : SIGN_IN_CONTEXT;
  const [values, setValues] = useState({
    email: '',
    name: '',
    password: '',
  });
  const [dirtyFields, setDirtyFields] = useState({
    email: false,
    name: false,
    password: false,
  });
  const [errors, setErrors] = useState({
    email: ERROR_MESSAGES.validation.emptyField,
    name: ERROR_MESSAGES.validation.emptyField,
    password: ERROR_MESSAGES.validation.emptyField,
  });
  const [disabled, setDisabled] = useState(true);

  const changeForm = () => {
    setValues({
      email: '',
      name: '',
      password: '',
    });
    setErrors({
      email: ERROR_MESSAGES.validation.emptyField,
      name: ERROR_MESSAGES.validation.emptyField,
      password: ERROR_MESSAGES.validation.emptyField,
    });
    setDirtyFields({
      email: false,
      name: false,
      password: false,
    });
    setRegister(!register);
  };

  const handleSubmit = () => {
    cb();
  };

  const blurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    setDirtyFields({ ...dirtyFields, [event.target.name as FIELDS]: true });
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name as FIELDS]: event.target.value });
    validation(event.target.name as FIELDS, event.target.value);
  };

  const validation = (name: FIELDS, value: string) => {
    if (!REGEX[name].test(value)) {
      setErrors({ ...errors, [name]: ERROR_MESSAGES.validation[name] });
    } else {
      setErrors({ ...errors, [name]: '' });
    }
  };

  useEffect(() => {
    const formIsValid = register
      ? !errors.name && !errors.email && !errors.password
      : !errors.email && !errors.password;

    if (formIsValid) {
      setDisabled(false);
    }
  }, [errors, register]);

  return (
    <form className={styles.authForm}>
      <h2>{context.title}</h2>
      {}
      <label>
        Email:
        <input
          name="email"
          type="text"
          value={values.email}
          onBlur={blurHandler}
          onChange={changeHandler}
        />
        {errors.email && dirtyFields.email && <p className={styles.error}>{errors.email}</p>}
      </label>
      {register && (
        <label>
          Name:
          <input
            name="name"
            type="text"
            value={values.name}
            onBlur={blurHandler}
            onChange={changeHandler}
          />
          {errors.name && dirtyFields.name && <p className={styles.error}>{errors.name}</p>}
        </label>
      )}
      <label>
        Password:
        <input
          name="password"
          value={values.password}
          type="password"
          onBlur={blurHandler}
          onChange={changeHandler}
        />
        {errors.password && dirtyFields.password && (
          <p className={styles.error}>{errors.password}</p>
        )}
      </label>
      <Button
        type={'submit'}
        disabled={disabled}
        setDisabled={setDisabled}
        cb={handleSubmit}
        width="90%"
        content={context.submitButton}
      />
      <p>
        <span>{context.question}</span>
        <span className={styles.link} onClick={changeForm}>
          {context.link}
        </span>
      </p>
    </form>
  );
};

export { AuthForm };
