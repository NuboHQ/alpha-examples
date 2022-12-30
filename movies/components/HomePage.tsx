import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const searchClient = instantMeiliSearch(
  publicRuntimeConfig.searchUrl,
  publicRuntimeConfig.searchKey,
);

const HomePage = () => (
  <InstantSearch indexName="movies" searchClient={searchClient}>
    <SearchBox />
    <Hits hitComponent={Hit} />
  </InstantSearch>
);

const Hit = ({ hit }: any) => {
  return <div key={hit.id}>{hit.title}</div>;
};

export default HomePage;
