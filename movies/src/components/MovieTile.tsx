import { useMovie } from '../contexts/MovieContext';
import { Movie } from '@/lib/movies';
import { motion } from 'framer-motion';

interface Props {
  movie: Movie;
}

const variants = {
  hidden: { opacity: 0, scale: 0.5 },
  show: { opacity: 1, scale: 1 },
};

const MovieTile = ({ movie }: Props) => {
  const { select } = useMovie();

  return (
    <motion.div variants={variants} onClick={() => select(movie)}>
      <motion.div
        className="cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
      >
        <img
          className="m-auto rounded-lg"
          src={movie.poster}
          alt={movie.title}
        />
      </motion.div>
    </motion.div>
  );
};

export default MovieTile;
