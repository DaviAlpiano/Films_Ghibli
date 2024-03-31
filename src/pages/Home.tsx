import { useContext } from 'react';
import FilmsContext from '../context/FilmsContext';
import Header from '../components/Header';
import style from './Home.module.css';

export default function Home() {
  const { filmes, favFilmes, setFavFilmes } = useContext(FilmsContext);

  function handleChange(e:React.MouseEvent<HTMLButtonElement>) {
    const filmeId = e.currentTarget.id;
    const filmeExistente = favFilmes.find((filme) => filme.id === filmeId);

    if (filmeExistente) {
      const news = favFilmes.filter((filme) => filme.id !== filmeId);
      setFavFilmes(news);
    } else {
      const filmeNew = filmes.find((filme) => filme.id === filmeId);
      if (filmeNew) {
        setFavFilmes([...favFilmes, filmeNew]);
      }
    }
  }
  return (
    <main className={ style.main }>
      <Header />
      <h1>Films</h1>
      <div className={ style.films }>
        {filmes.map((filme) => (
          <div className={ style.film } key={ filme.id }>
            <h2>{filme.title}</h2>
            <img
              className={ style.poster }
              src={ filme.movie_banner }
              alt={ filme.title }
            />
            <button className={ style.fav } id={ filme.id } onClick={ handleChange }>
              {favFilmes.some((fil) => fil.id === filme.id)
                ? <h2>Favoritado</h2>
                : <h2>Favoritar</h2>}
            </button>
          </div>))}
      </div>
    </main>
  );
}
