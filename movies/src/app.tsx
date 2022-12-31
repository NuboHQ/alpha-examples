import { InstantSearch } from 'react-instantsearch-dom';
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch';
import Home from './components/Home';
import MovieDetail from './components/MovieDetail';
import { MovieProvider } from './contexts/MovieContext';

const searchClient = instantMeiliSearch(
  import.meta.env.VITE_NUBO_SEARCH_URL,
  import.meta.env.VITE_NUBO_SEARCH_KEY,
);

export default function App() {
  return (
    <InstantSearch indexName="movies" searchClient={searchClient}>
      <MovieProvider>
        <Home />
        <MovieDetail />
      </MovieProvider>
    </InstantSearch>
  );
}
