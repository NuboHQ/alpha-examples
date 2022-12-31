import Search from './components/Search';
import Movies from './components/Movies';

const Home = () => {
  return (
    <>
      <Search />

      <div className="pt-20 lg:pt-32">
        <Movies />
      </div>
    </>
  );
};

export default Home;
