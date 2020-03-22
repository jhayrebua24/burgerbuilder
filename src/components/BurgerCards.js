import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Burger from './Burger';
import { Cards } from './StyledComponents';
import { BurgerContext } from '../context/BurgerContextWrapper';

const BurgerCards = ({ data }) => {
  const { ingredients } = useContext(BurgerContext);
  const getBurgerPrice = data.contents.reduce((accu, val) => {
    const ingr = ingredients.find((ingredient) => ingredient.id === val);
    let price = 0;
    if (ingr) price = ingr.price;
    return accu + price;
  }, 20).toFixed(2);
  return (
    <Cards>
      <p>{data.name}</p>
      <Burger
        contents={data.contents}
      />
      <p>{`PHP ${getBurgerPrice}`}</p>
    </Cards>
  )
}
BurgerCards.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
}
export default BurgerCards
