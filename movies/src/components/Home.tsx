import Search from './Search';
import Movies from './Movies';

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
