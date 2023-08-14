/* eslint-disable react-hooks/exhaustive-deps */
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
import { useRegisterUserMutation, useSigninMutation } from '../../redux/services/userApi';
import { useAppDispatch } from '../../hooks/redux';
import { login } from '../../redux/reducers/userSlice';
import { setTokenToLocalStorage } from '../../utils/localStorageHelpers';
import { ICustomError, IUserDataResponse } from '../../common-types/index';

const initialFormState = {
  dirtyFields: {
    email: false,
    name: false,
    password: false,
  },
  values: {
    email: '',
    name: '',
    password: '',
  },
  errors: {
    email: ERROR_MESSAGES.validation.emptyField,
    name: ERROR_MESSAGES.validation.emptyField,
    password: ERROR_MESSAGES.validation.emptyField,
  },
};

const AuthForm = ({ cb, register, setRegister }: IAuthForm): JSX.Element => {
  const context = register ? REGISTRATION_CONTEXT : SIGN_IN_CONTEXT;
  const [values, setValues] = useState(initialFormState.values);
  const [dirtyFields, setDirtyFields] = useState(initialFormState.dirtyFields);
  const [errors, setErrors] = useState(initialFormState.errors);
  const [disabled, setDisabled] = useState(true);
  const [registerUser, { data: dataRegister, error: errorRegister }] = useRegisterUserMutation();
  const [signin, { data: dataSignin, error: errorSignin }] = useSigninMutation();
  const dispatch = useAppDispatch();
  const [requestError, setRequestError] = useState('');

  const resetForm = () => {
    setValues(initialFormState.values);
    setDirtyFields(initialFormState.dirtyFields);
    setErrors(initialFormState.errors);
    setRequestError('');
  };

  const changeForm = () => {
    resetForm();
    setRegister(!register);
  };

  const handleSubmit = async () => {
    setRequestError('');
    if (register) {
      await registerUser({
        email: values.email,
        name: values.name,
        password: values.password,
      });
    } else {
      await signin({
        email: values.email,
        password: values.password,
      });
    }
  };

  useEffect(() => {
    if (dataRegister) {
      setRegister(false);
    }

    if (errorRegister) {
      setRequestError((errorRegister as ICustomError).data.message);
    }

    if (dataSignin) {
      const { id, name, email } = dataSignin as IUserDataResponse;
      dispatch(login({ id, name, email }));
      setTokenToLocalStorage(dataSignin!.token);
      cb();
    }

    if (errorSignin) {
      setRequestError((errorSignin as ICustomError).data.message);
    }
  }, [dataSignin, dataRegister, errorRegister, errorSignin]);

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setDirtyFields({ ...dirtyFields, [event.target.name as FIELDS]: true });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
    } else {
      setDisabled(true);
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
          onBlur={handleBlur}
          onChange={handleChange}
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
            onBlur={handleBlur}
            onChange={handleChange}
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
          onBlur={handleBlur}
          onChange={handleChange}
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
      {requestError && <p className={styles.error}>{requestError}</p>}
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
