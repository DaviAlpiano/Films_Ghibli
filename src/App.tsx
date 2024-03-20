import { Route, Routes } from 'react-router-dom';

import { useEffect, useState } from 'react';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import FilmsContext from './context/FilmsContext';

function App() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const FetchApi = async () => {
      const dados = await fetch('https://api-trybe-frontend.vercel.app/api/ghibli-animations');
      const resultado = await dados.json();
      setFilmes(resultado);
    };

    FetchApi();
  }, []);

  console.log(filmes);
  return (
    <FilmsContext.Provider value={ { filmes } }>
      <Routes>
        <Route path="/" Component={ Home } />
        <Route path="/favorites" Component={ Favorites } />
      </Routes>
    </FilmsContext.Provider>
  );
}

export default App;
