import { connectHits } from 'react-instantsearch-dom';
import { Movie } from '@/lib/movies';
import MovieTile from './MovieTile';
import { motion } from 'framer-motion';
import { useMovie } from '../contexts/MovieContext';

interface Props {
  hits: Movie[];
}

const Movies = ({ hits: movies }: Props) => {
  const { isVisible } = useMovie();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: isVisible ? 0.7 : 1,
      transition: {
        staggerChildren: 0.05,
      },
      scale: isVisible ? 0.5 : 1,
    },
  };

  return (
    <motion.div
      className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4 lg:gap-12 p-10 lg:p-20 max-w-7xl m-auto origin-top"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {movies.map((movie) => (
        <MovieTile key={movie.id} movie={movie} />
      ))}
    </motion.div>
  );
};

export default connectHits(Movies);
