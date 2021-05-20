import {useContext} from 'react';
import {useParams} from 'react-router-dom';

// Components
import Navigation from './elements/Navigation';
import MovieInfo from './elements/MovieInfo';
import Grid from './elements/Grid';
import Spinner from './elements/Spinner';
import {GlobalContext} from './context/GlobalState';

import {useMovieFetch} from './hooks/useMovieFetch';
import MovieThumb from './elements/MovieThumb';
import {POSTER_SIZE, IMAGE_BASE_URL} from '../config';
import NoImage from './images/no_image.png';

const Movie = () => {
  const {movieId} = useParams();
  const [movie, loading, error] = useMovieFetch(movieId);
  const {state} = useContext(GlobalContext);
  const {favourites} = state;

  if (error) return <div>Something went wrong ...</div>;
  if (loading) return <Spinner />;

  return (
    <>
      <Navigation movie={movie.original_title} />
      <MovieInfo movie={movie} />
      <Grid header={'My Favourites'}>
        {favourites &&
          favourites.map((movie) => (
            <MovieThumb
              key={movie.id}
              clickable
              image={
                movie.poster_path
                  ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                  : NoImage
              }
              movie={movie}
              movieId={movie.id}
              movieName={movie.original_title}
            />
          ))}
      </Grid>
      {favourites.length <= 0 && (
        <h1
          style={{
            textAlign: 'center',
            height: '100px',
          }}
        >
          No movies in your list! Add some!
        </h1>
      )}
    </>
  );
};

export default Movie;
