import { InstantSearch } from 'react-instantsearch-dom';
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch';
import Home from './Home';

const searchClient = instantMeiliSearch(
  import.meta.env.VITE_NUBO_SEARCH_URL,
  import.meta.env.VITE_NUBO_SEARCH_KEY,
);

export default function App() {
  return (
    <InstantSearch indexName="movies" searchClient={searchClient}>
      <Home />
    </InstantSearch>
  );
}
