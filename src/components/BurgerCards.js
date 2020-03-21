import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Burger from './Burger';
import { Cards } from './StyledComponents';
import { BurgerContext } from '../context/BurgerContextWrapper';

const BurgerCards = ({ data }) => {
  const { ingredients } = useContext(BurgerContext);
  console.log(ingredients)
  return (
    <Cards>
      <p>{data.name}</p>
      <Burger
        contents={data.contents}
      />
    </Cards>
  )
}
BurgerCards.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
}
export default BurgerCards
