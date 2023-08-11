import { useAppSelector } from '../../hooks/redux';
import styles from './Header.module.scss';
import Button from '../Button/Button';

const Header = (): JSX.Element => {
  const isAuth = useAppSelector((state) => state.userReducer.isAuth);

  const logout = () => {};
  const login = () => {};

  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>⚡STREAM BITE</h1>
      <Button width={'100px'} cb={isAuth ? logout : login} content={isAuth ? 'Logout' : 'LogIn'} />
    </header>
  );
};

export { Header };
