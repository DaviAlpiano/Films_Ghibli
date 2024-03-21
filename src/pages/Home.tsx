import { useContext } from 'react';
import FilmsContext from '../context/FilmsContext';
import Header from '../components/Header';

export default function Home() {
  const { filmes } = useContext(FilmsContext);
  return (
    <div>
      <Header />
      <h1>Films</h1>
      {filmes.map((filme) => (
        <div key={ filme.id }>
          <h2>{filme.title}</h2>
          <img src={ filme.movie_banner } alt={ filme.title } />
          <button>Favorite</button>
        </div>))}
    </div>
  );
}
