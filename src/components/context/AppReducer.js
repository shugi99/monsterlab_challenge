import {ACTIONS} from './Actions';

const reducers = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TO_FAVOURITES:
      return {
        ...state,
        favourites: [action.payload, ...state.favourites],
      };
    case ACTIONS.REMOVE_FROM_FAVOURITES:
      return {
        ...state,
        favourites: state.favourites.filter(
          (movie) => movie.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default reducers;
