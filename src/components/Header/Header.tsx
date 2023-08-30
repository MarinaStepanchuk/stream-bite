import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import styles from './Header.module.scss';
import Button from '../Button/Button';
import { removeValueFromLocalStorage } from '../../utils/localStorageHelpers';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../redux/reducers/userSlice';
import { NavMenu } from '../NavMenu/NavMenu';

const Header = (): JSX.Element => {
  const isAuth = useAppSelector((state) => state.userReducer.isAuth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logoutUser = () => {
    dispatch(logout());
    removeValueFromLocalStorage('token');
  };

  const login = () => {
    navigate('/login');
  };

  const navigateToMainPage = () => {
    navigate('/');
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.logo} onClick={navigateToMainPage}>
        ⚡STREAM BITE
      </h1>
      {isAuth && <NavMenu />}
      <Button
        width={'100px'}
        cb={isAuth ? logoutUser : login}
        content={isAuth ? 'Logout' : 'LogIn'}
      />
    </header>
  );
};

export { Header };
