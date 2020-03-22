import React, {
  useEffect,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import {
  BurgerPrice,
} from './StyledComponents';

const BurgerPriceLists = (props) => {
  const {
    ingredients,
    burgerContents,
  } = props;
  const lists = burgerContents.filter((a, b) => burgerContents.indexOf(a) === b);
  return (
    <BurgerPrice>
      <p>price list</p>
      <div>
        body
      </div>
      <div>
        foot
      </div>
    </BurgerPrice>
  )
}
BurgerPriceLists.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.object).isRequired,
  burgerContents: PropTypes.arrayOf(PropTypes.number).isRequired,
}
export default BurgerPriceLists
