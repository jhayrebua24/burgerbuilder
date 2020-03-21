import React from 'react';
import {
  Switch, BrowserRouter as Router, Route,
} from 'react-router-dom';
import Build from './page/Build';
import Ingredients from './page/Ingredients';

import BurgerContextWrapper from './context/BurgerContextWrapper';

function App() {
  return (
    <Router>
      <BurgerContextWrapper>
        <Switch>
          <Route path="/" render={(prop) => <Build routeProp={prop} />} exact />
          <Route path="/ingredients" render={(prop) => <Ingredients routeProp={prop} />} exact />
        </Switch>
      </BurgerContextWrapper>
    </Router>
  );
}

export default App;
