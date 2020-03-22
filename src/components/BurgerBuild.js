import React from 'react';
import PropTypes from 'prop-types';
import {
  BuildBurger,
} from './StyledComponents';
import Burger from './Burger';

const BurgerBuild = ({ burgerContents }) => {
  let message = 'LET\'S GET STARTED';

  if (burgerContents.length > 6) message = 'Delicious!';
  else if (burgerContents.length > 4) message = 'Way to go!';
  else if (burgerContents.length > 2) message = 'Looking good!';
  else if (burgerContents.length > 0) message = 'Nice!';

  return (
    <BuildBurger>
      <h2>{message}</h2>
      <Burger
        contents={burgerContents}
      />
      <span><br /></span>
    </BuildBurger>
  )
}
BurgerBuild.propTypes = {
  burgerContents: PropTypes.arrayOf(PropTypes.number).isRequired,
}
export default BurgerBuild
