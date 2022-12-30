import * as RID from 'react-instantsearch-dom';
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch';
import Home from './Home';

const InstantSearch: any = RID.InstantSearch;

const searchClient = instantMeiliSearch(
  import.meta.env.VITE_NUBO_SEARCH_URL,
  import.meta.env.VITE_NUBO_SEARCH_KEY,
);

export function App() {
  return (
    <InstantSearch indexName="movies" searchClient={searchClient}>
      <Home />
    </InstantSearch>
  );
}
