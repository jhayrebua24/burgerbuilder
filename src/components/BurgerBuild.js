import React from 'react';
import PropTypes from 'prop-types';
import {
  BuildBurger,
} from './StyledComponents';
import Burger from './Burger';

const BurgerBuild = ({ burgerContents }) => {
  let message = '';

  if (burgerContents.length > 6) message = 'Delicious!';
  else if (burgerContents.length > 4) message = 'Way to go!';
  else if (burgerContents.length > 1) message = 'Looking good!';
  else if (burgerContents.length > 0) message = 'Nice!';

  return (
    <BuildBurger>
      <h2>Your burger is ready!</h2>
      <Burger
        contents={burgerContents}
      />
      <span>{message}</span>
    </BuildBurger>
  )
}
BurgerBuild.propTypes = {
  burgerContents: PropTypes.arrayOf(PropTypes.number).isRequired,
}
export default BurgerBuild
