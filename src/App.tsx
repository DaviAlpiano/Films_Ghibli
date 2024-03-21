import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import FilmsProvider from './context/FilmsProvider';

function App() {
  return (
    <FilmsProvider>
      <Routes>
        <Route path="/" Component={ Home } />
        <Route path="/favorites" Component={ Favorites } />
      </Routes>
    </FilmsProvider>
  );
}

export default App;
