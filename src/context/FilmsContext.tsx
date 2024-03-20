import { createContext } from 'react';

type Film = {
  id: string;
  title: string;
  original_title: string;
  original_title_romanised: string;
  image: string;
  movie_banner: string;
  description: string;
  director: string;
  producer: string;
  release_date: string;
  running_time: string;
  rt_score: string;
  people: string[];
  species: string[];
  locations: string[];
  vehicles: string[];
  url: string;
};

type FilmsContextType = {
  filmes: Film[],
};

const FilmsContext = createContext({} as FilmsContextType);

export default FilmsContext;
