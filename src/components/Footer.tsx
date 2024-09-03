import style from './Footer.module.css';
import bolofofo from '../img/bolofofo.png';
import castelo from '../img/castelo.png';
import arte from '../img/arte.jpg'; 

export default function Footer() {
  return (
    <footer className={ style.footer }>
      <img src={castelo} alt="bolofofo" className={ style.castelo } />
      <h1>STUDIO</h1>
      <img src={bolofofo} alt="bolofofo" className={ style.bolofofo } />
      <h1>GHIBLI</h1>
      <img src={arte} alt="bolofofo" className={ style.arte } />
    </footer>
  );
}
