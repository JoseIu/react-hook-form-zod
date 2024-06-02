import { NavLink } from 'react-router-dom';
import style from './NavList.module.css';

const NavList = () => {
  return (
    <nav className={style.nav}>
      <ul className={style.nav__list}>
        <li className={style.nav__item}>
          <NavLink
            className={({ isActive }) => (isActive ? style.nav__linkActive : style.nav__link)}
            to="/user-form"
          >
            User Form
          </NavLink>
        </li>
        <li className={style.nav__item}>
          <NavLink
            className={({ isActive }) => (isActive ? style.nav__linkActive : style.nav__link)}
            to="/data-form"
          >
            User Form
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavList;
