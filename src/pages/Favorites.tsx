import { useContext } from 'react';
import Header from '../components/Header';
import FilmsContext from '../context/FilmsContext';

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
    <div>
      <Header />
      {favFilmes.map((filme) => (
        <div key={ filme.id }>
          <h2>{filme.title}</h2>
          <img src={ filme.movie_banner } alt={ filme.title } />
          <button id={ filme.id } onClick={ handleChange }>Favorite</button>
        </div>))}
    </div>
  );
}
