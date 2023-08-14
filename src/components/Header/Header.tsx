import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import styles from './Header.module.scss';
import Button from '../Button/Button';
import { removeTokenFromLocalStorage } from '../../utils/localStorageHelpers';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../redux/reducers/userSlice';

const Header = (): JSX.Element => {
  const isAuth = useAppSelector((state) => state.userReducer.isAuth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logoutUser = () => {
    dispatch(logout());
    removeTokenFromLocalStorage();
  };

  const login = () => {
    navigate('/login');
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>⚡STREAM BITE</h1>
      <Button
        width={'100px'}
        cb={isAuth ? logoutUser : login}
        content={isAuth ? 'Logout' : 'LogIn'}
      />
    </header>
  );
};

export { Header };
