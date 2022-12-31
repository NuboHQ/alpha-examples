import { Movie } from '@/lib/movies';
import {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

export interface MovieType {
  movie: Movie | null;
  isVisible: boolean;
  show: () => void;
  hide: () => void;
  select: (movie: Movie) => void;
}

export interface Props {
  children: ReactNode;
}

export const MovieContext = createContext<MovieType>({} as MovieType);

export const { Provider } = MovieContext;

export const MovieProvider: FC<Props> = ({ children }) => {
  const [movie, setMovie] = useState<Movie | null>(null);

  const [isVisible, setIsVisible] = useState(false);

  const show = () => {
    setIsVisible(true);
  };

  const hide = () => {
    setIsVisible(false);
  };

  const select = (movie: Movie) => {
    setMovie(movie);
    show();
  };

  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        hide();
      }
    },
    [isVisible, hide],
  );

  useEffect(() => {
    window.addEventListener('keyup', handleKeyPress);

    return () => {
      window.removeEventListener('keyup', handleKeyPress);
    };
  }, []);

  return (
    <MovieContext.Provider
      value={{
        movie,
        isVisible,
        show,
        hide,
        select,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export const useMovie = () => useContext(MovieContext);
