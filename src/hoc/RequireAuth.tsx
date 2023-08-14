import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '../hooks/redux';
import { ROUTE } from '../constants/constants';

const RequireAuth = ({ children }: { children: JSX.Element }): JSX.Element => {
  const isAuth = useAppSelector((state) => state.userReducer.isAuth);
  const location = useLocation();

  if (!isAuth) {
    return <Navigate to={ROUTE.loginPage} state={{ from: location }} />;
  }
  return children;
};

export { RequireAuth };
