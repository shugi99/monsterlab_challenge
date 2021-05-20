import {createContext, useReducer, useEffect} from 'react';
import reducers from './AppReducer';

// initial state
const initialState = {
  favourites: localStorage.getItem('favourites')
    ? JSON.parse(localStorage.getItem('favourites'))
    : [],
};

// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducers, initialState);
  const {favourites} = state;

  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites));
  }, [favourites]);

  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
