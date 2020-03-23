import React from 'react';
import { Link } from 'react-router-dom';
import { ErrorPage } from '../components/StyledComponents';
import Logo from '../logo.png';

const Ingredients = () => (
  <ErrorPage>
    <div>
      <img src={Logo} />
      <h1>BURGER NOT FOUND!</h1>
      <Link to="/">Back to home</Link>
    </div>
  </ErrorPage>
)

export default Ingredients
