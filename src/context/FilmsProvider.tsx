import { useEffect, useState } from 'react';
import FilmsContext from './FilmsContext';

type ThemeProviderProps = {
  children: React.ReactNode;
};

function FilmsProvider({ children }: ThemeProviderProps) {
  const [filmes, setFilmes] = useState([]);

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
    <FilmsContext.Provider value={ { filmes } }>
      { children }
    </FilmsContext.Provider>
  );
}

export default FilmsProvider;
