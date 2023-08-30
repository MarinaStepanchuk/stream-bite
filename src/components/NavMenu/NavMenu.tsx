import { ROUTE } from '../../constants/constants';
import styles from './NavMenu.module.scss';
import { NavLink } from 'react-router-dom';

const setActive = ({ isActive }: { isActive: boolean }) => (isActive ? 'activeLink' : '');

const NavMenu = () => {
  return (
    <nav className={styles.navigationMenu}>
      <NavLink to={ROUTE.profilePage} className={setActive}>
        My Profile
      </NavLink>
      <NavLink to={ROUTE.searchPage} className={setActive}>
        Search
      </NavLink>
    </nav>
  );
};

export { NavMenu };
