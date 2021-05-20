import {useContext} from 'react';
import PropTypes from 'prop-types';
import NoImage from '../images/no_image.png';
import {IMAGE_BASE_URL, POSTER_SIZE} from '../../config';
import MovieThumb from './MovieThumb';
import {StyledMovieInfo} from '../styles/StyledMovieInfo';
import {addToFavourites, removeFromFavourites} from '../context/Actions';
import {GlobalContext} from '../context/GlobalState';
import Button from './Button';

const MovieInfo = ({movie}) => {
  const {state, dispatch} = useContext(GlobalContext);
  const {favourites} = state;

  let favouriteMovies = favourites.find((o) => o.id === movie.id);
  console.log('we', movie.id);
  console.log('array', favourites);
  console.log('aw ', favouriteMovies);
  return (
    <StyledMovieInfo>
      <div className='movieinfo-content'>
        <div className='movieinfo-thumb'>
          <MovieThumb
            image={
              movie.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                : NoImage
            }
            clickable={false}
            alt='moviethumb'
          />
        </div>
        <div className='movieinfo-text'>
          <h1>{movie.title}</h1>
          <h3>PLOT</h3>
          <p>{movie.overview}</p>

          <div className='rating-director'>
            <div>
              <h3>RATING</h3>
              <div className='score'>{movie.vote_average}</div>
            </div>
            {favouriteMovies ? (
              <Button
                type='big'
                text='Remove from Favourites'
                callback={() => dispatch(removeFromFavourites(movie.id))}
              />
            ) : (
              <Button
                text='Add to Favourites'
                type='big'
                callback={() => dispatch(addToFavourites(movie))}
              />
            )}
          </div>
        </div>
      </div>
    </StyledMovieInfo>
  );
};

MovieInfo.propTypes = {
  movie: PropTypes.object,
  directors: PropTypes.array,
};

export default MovieInfo;
