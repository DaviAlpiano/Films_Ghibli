import { useEffect, useState } from 'react';
import FilmsContext from './FilmsContext';
import { Film } from '../types';

type ThemeProviderProps = {
  children: React.ReactNode;
};

function FilmsProvider({ children }: ThemeProviderProps) {
  const [filmes, setFilmes] = useState<Film[]>([]);
  const [favFilmes, setFavFilmes] = useState<Film[]>([]);

  useEffect(() => {
    const FetchApi = async () => {
      try {
        const dados = await fetch('https://api-trybe-frontend.vercel.app/api/ghibli-animations');
        const resultado = await dados.json();
        setFilmes(resultado);
      } catch (erro) {
        console.error(erro);
      }
    };

    FetchApi();
  }, []);

  return (
    <FilmsContext.Provider value={ { filmes, favFilmes, setFavFilmes } }>
      { children }
    </FilmsContext.Provider>
  );
}

export default FilmsProvider;
