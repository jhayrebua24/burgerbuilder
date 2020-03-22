import React from 'react';
import {
  Switch, BrowserRouter as Router, Route,
} from 'react-router-dom';
import BurgerBuilds from './page/BurgerBuilds';
import BurgerBuilder from './page/BurgerBuilder';
import Ingredients from './page/Ingredients';

import BurgerContextWrapper from './context/BurgerContextWrapper';

function App() {
  return (
    <Router>
      <BurgerContextWrapper>
        <Switch>
          <Route path="/" render={(prop) => <BurgerBuilds routeProp={prop} />} exact />
          <Route path="/build" render={(prop) => <BurgerBuilder routeProp={prop} />} />
          <Route path="/ingredients" render={(prop) => <Ingredients routeProp={prop} />} />
        </Switch>
      </BurgerContextWrapper>
    </Router>
  );
}

export default App;
