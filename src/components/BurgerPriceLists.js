import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  BurgerPrice,
  Button,
  Input,
} from './StyledComponents';
import PricingTable from './PricingTable';

const BurgerPriceLists = (props) => {
  const {
    ingredients,
    burgerContents,
    burgerName,
    onChangeBurgerName,
    onSubmitBurger,
  } = props;
  const items = burgerContents.filter((a, b) => burgerContents.indexOf(a) === b).map((item) => {
    const getIngredient = ingredients.find((ingredient) => ingredient.id === item);
    const countIngr = burgerContents.filter((id) => id === item).length;

    return ({
      name: getIngredient.name,
      quantity: countIngr || 0,
      price: getIngredient.price,
      amount: (getIngredient.price * countIngr).toFixed(2),
    });
  })
  return (
    <BurgerPrice>
      <p>price list</p>
      <PricingTable items={items} />
      <div style={{ padding: '0 8px', textAlign: 'right' }}>
        {burgerContents.reduce((accu, val) => {
          const ingr = ingredients.find((ingredient) => ingredient.id === val);
          let price = 0;
          if (ingr) price = ingr.price;
          return accu + price;
        }, 20).toFixed(2)}
      </div>
      <div style={{
        padding: '10px 8px',
      }}
      >
        <Input
          type="text"
          maxLength="20"
          minLength="3"
          placeholder="Input Burger Name"
          value={burgerName}
          disabled={items.length < 1}
          onChange={onChangeBurgerName}
        />
        <Button
          style={{ marginTop: '10px' }}
          disabled={items.length < 1 || burgerName.length < 3}
          onClick={onSubmitBurger}
          block
        >
          <FontAwesomeIcon icon="check-square" />
          Save
        </Button>
      </div>
    </BurgerPrice>
  )
}
BurgerPriceLists.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.object).isRequired,
  burgerContents: PropTypes.arrayOf(PropTypes.number).isRequired,
  burgerName: PropTypes.string.isRequired,
  onChangeBurgerName: PropTypes.func.isRequired,
  onSubmitBurger: PropTypes.func.isRequired,
}
export default BurgerPriceLists
