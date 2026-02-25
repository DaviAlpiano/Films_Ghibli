import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import styles from './Layoutr.module.css';

export default function Layout() {
  return (
    <div className={ styles.all }>
      <Header />
      <main className={ styles.main }>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
