import React from 'react';
import PropTypes from 'prop-types';
import {
  BurgerIngredients,
  ContentSelector,
  Button,
} from './StyledComponents';

const BurgerIngredientsMenu = (props) => {
  const {
    ingredients,
    addStuffOnBurger,
    removeStuffOnBurger,
    removeAllStuffs,
    burgerContents,
  } = props;
  return (
    <BurgerIngredients>
      {ingredients.map((ingr) => (
        <ContentSelector key={ingr.id}>
          <Button
            disabled={!burgerContents.includes(ingr.id)}
            onClick={() => removeStuffOnBurger(ingr.id)}
            color="#e74c3c"
            type="button"
          >
            -
          </Button>
          <span>{ingr.name}</span>
          <Button
            onClick={() => addStuffOnBurger(ingr.id)}
            type="button"
            disabled={burgerContents.length > 7}
          >
            +
          </Button>
        </ContentSelector>
      ))}
      <Button
        color="#e74c3c"
        disabled={burgerContents.length < 1}
        onClick={removeAllStuffs}
      >
        REMOVE ALL
      </Button>
    </BurgerIngredients>
  )
}
BurgerIngredientsMenu.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.object).isRequired,
  addStuffOnBurger: PropTypes.func.isRequired,
  removeStuffOnBurger: PropTypes.func.isRequired,
  removeAllStuffs: PropTypes.func.isRequired,
  burgerContents: PropTypes.arrayOf(PropTypes.number).isRequired,
}
export default BurgerIngredientsMenu
