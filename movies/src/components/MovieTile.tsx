import { Movie } from '@/lib/movies';

interface Props {
  movie: Movie;
}

const MovieTile = ({ movie }: Props) => {
  return (
    <div>
      <img className="m-auto rounded-lg" src={movie.poster} alt={movie.title} />
    </div>
  );
};

export default MovieTile;
