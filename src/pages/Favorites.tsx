import { useContext } from 'react';
import Header from '../components/Header';
import FilmsContext from '../context/FilmsContext';
import style from './Home.module.css';

export default function Favorites() {
  const { favFilmes, setFavFilmes } = useContext(FilmsContext);

  function handleChange(e:React.MouseEvent<HTMLButtonElement>) {
    const filmeId = e.currentTarget.id;
    const filmeExistente = favFilmes.find((filme) => filme.id === filmeId);

    if (filmeExistente) {
      const news = favFilmes.filter((filme) => filme.id !== filmeId);
      setFavFilmes(news);
    }
  }

  return (
    <main className={ style.main }>
      <Header />
      <div className={ style.films }>

        {favFilmes.map((filme) => (
          <div className={ style.film } key={ filme.id }>
            <h2>{filme.title}</h2>
            <img
              className={ style.poster }
              src={ filme.movie_banner }
              alt={ filme.title }
            />
            <button className={ style.fav } id={ filme.id } onClick={ handleChange }>
              {' '}
              <h2>Favoritado</h2>
            </button>
          </div>))}
      </div>
    </main>
  );
}
