import { Header } from '../components/Header/Header';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.scss';

const Layout = (): JSX.Element => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
};

export { Layout };
