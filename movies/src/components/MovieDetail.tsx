import { motion } from 'framer-motion';
import classNames from 'classnames';
import { useMovie } from '../contexts/MovieContext';

const COLORS = ['bg-primary', 'bg-pink-600', 'bg-emerald-600', 'bg-violet-600'];

const MovieDetail = () => {
  const { movie, isVisible } = useMovie();
  const animate = isVisible ? 'show' : 'hide';

  if (!movie) return null;

  return (
    <>
      <motion.div
        className={classNames(
          'fixed top-0 left-0 z-30 w-screen h-screen backdrop-blur-md bg-background/80',
          { hidden: !isVisible },
        )}
        initial="hide"
        animate={animate}
        variants={{
          hide: { opacity: 0 },
          show: { opacity: 1 },
        }}
      />

      <motion.div
        className={classNames('fixed top-0 left-0 z-40 w-screen h-screen p-20')}
        initial="hide"
        animate={animate}
        variants={{ hide: { left: '-100%' }, show: { left: 0 } }}
      >
        <div className="flex gap-40 w-full h-full">
          <img className="rounded-3xl" src={movie.poster} alt={movie.title} />

          <div className="py-20">
            <h1 className="text-6xl">{movie.title}</h1>

            <div className="flex gap-4 mt-6">
              {movie.genres.map((genre, index) => (
                <div
                  key={genre}
                  className={classNames(
                    'text-white uppercase text-sm py-1 px-4 rounded-full',
                    COLORS[index] || 'bg-primary',
                  )}
                >
                  {genre}
                </div>
              ))}
            </div>

            <p className="max-w-2xl mt-10 text-lg">{movie.overview}</p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default MovieDetail;
