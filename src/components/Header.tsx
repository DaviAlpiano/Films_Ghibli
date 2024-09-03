import { Link, useLocation } from 'react-router-dom';
import style from './Header.module.css';

export default function Header() {
  const { pathname } = useLocation();
  return (
    <header className={ style.header }>
      <nav className={ style.nav }>
        {pathname === '/favorites' ? (
          <Link to="/Films_Ghibli">Films</Link>
        ) : (
          <Link to="/favorites">Favorites</Link>
        )}
      </nav>
    </header>
  );
}
