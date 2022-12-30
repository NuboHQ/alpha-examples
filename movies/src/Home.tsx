import { SearchBox, Hits, Highlight } from 'react-instantsearch-dom';

const Hit = ({ hit }: any) => <Highlight attribute="title" hit={hit} />;

const Home = () => {
  return (
    <div>
      <SearchBox />
      <Hits hitComponent={Hit} />
    </div>
  );
};

export default Home;
