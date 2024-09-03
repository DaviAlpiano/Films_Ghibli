import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import FilmsProvider from './context/FilmsProvider';
import Layout from './components/Layout';

function App() {
  return (
    <FilmsProvider>
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route path="/Films_Ghibli" Component={ Home } />
          <Route path="/favorites" Component={ Favorites } />
        </Route>
      </Routes>
    </FilmsProvider>
  );
}

export default App;
