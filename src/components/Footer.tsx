import style from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={ style.footer }>
      <img src="src/img/castelo.png" alt="bolofofo" className={ style.castelo } />
      <h1>STUDIO</h1>
      <img src="src/img/bolofofo.png" alt="bolofofo" className={ style.bolofofo } />
      <h1>GHIBLI</h1>
      <img src="src/img/arte.jpg" alt="bolofofo" className={ style.arte } />
    </footer>
  );
}
