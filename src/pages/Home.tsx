import { useContext } from 'react';
import FilmsContext from '../context/FilmsContext';
import Header from '../components/Header';

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
    <div>
      <Header />
      <h1>Films</h1>
      {filmes.map((filme) => (
        <div key={ filme.id }>
          <h2>{filme.title}</h2>
          <img src={ filme.movie_banner } alt={ filme.title } />
          <button id={ filme.id } onClick={ handleChange }>Favorite</button>
        </div>))}
    </div>
  );
}
