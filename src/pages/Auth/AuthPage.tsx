import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
import { ROUTE } from '../../constants/constants';
import { AuthForm } from '../../components/AuthForm/AuthForm';
import { useState } from 'react';

const AuthPage = (): JSX.Element => {
  const location = useLocation();
  const navigate = useNavigate();
  const fromPage = location.state?.from?.pathname || '/';
  const isAuth = useAppSelector((state) => state.userReducer.isAuth);
  const [register, setRegister] = useState(false);

  if (isAuth) {
    return <Navigate to={ROUTE.mainPage} state={{ from: location }} />;
  }

  const signin = () => {
    navigate(fromPage, { replace: true });
  };

  return <AuthForm cb={signin} register={register} setRegister={setRegister} />;
};

export { AuthPage };
