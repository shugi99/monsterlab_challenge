import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './elements/Header';
import Home from './Home';
import Movie from './Movie';
import NotFound from './NotFound';
import {GlobalProvider} from './context/GlobalState';
import {GlobalStyle} from './styles/GlobalStyle';
import Favourites from './Favourites';

const App = () => (
  <>
    <GlobalProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/movie/:movieId' component={Movie}></Route>
          <Route path='/favourites' component={Favourites}></Route>
          <NotFound default />
        </Switch>
      </Router>
    </GlobalProvider>
    <GlobalStyle />
  </>
);

export default App;
