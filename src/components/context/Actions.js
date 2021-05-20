export const ACTIONS = {
  ADD_TO_FAVOURITES: 'ADD_TO_FAVOURITES',
  REMOVE_FROM_FAVOURITES: 'REMOVE_FROM_FAVOURITES',
};

// actions
export const addToFavourites = (movie) => {
  return {type: 'ADD_TO_FAVOURITES', payload: movie};
};

export const removeFromFavourites = (id) => {
  return {type: 'REMOVE_FROM_FAVOURITES', payload: id};
};
