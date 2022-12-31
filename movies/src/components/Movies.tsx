import { connectHits } from 'react-instantsearch-dom';
import { Movie } from '@/lib/movies';
import MovieTile from './MovieTile';
import { motion } from 'framer-motion';

interface Props {
  hits: Movie[];
}

const Movies = ({ hits: movies }: Props) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4 lg:gap-12 p-10 lg:p-20 max-w-7xl m-auto">
      {movies.map((movie) => (
        <MovieTile key={movie.id} movie={movie} />
      ))}
    </motion.div>
  );
};

export default connectHits(Movies);
