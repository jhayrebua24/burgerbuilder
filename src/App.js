import React from 'react';
import {
  Switch, BrowserRouter as Router, Route,
} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import BurgerBuilds from './page/BurgerBuilds';
import BurgerBuilder from './page/BurgerBuilder';
import Cart from './page/Cart';
import Error404 from './page/Error404';

import BurgerContextWrapper from './context/BurgerContextWrapper';

library.add(fas);
function App() {
  return (
    <Router>
      <BurgerContextWrapper>
        <Switch>
          <Route path="/" render={(prop) => <BurgerBuilds routeProps={prop} />} exact />
          <Route path="/build" render={(prop) => <BurgerBuilder routeProps={prop} />} />
          <Route path="/cart" render={(prop) => <Cart routeProps={prop} />} />
          <Route render={(prop) => <Error404 routeProps={prop} />} exact />
        </Switch>
      </BurgerContextWrapper>
    </Router>
  );
}

export default App;
