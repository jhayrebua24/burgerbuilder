import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Burger from './Burger';
import { Cards, Button } from './StyledComponents';
import { BurgerContext } from '../context/BurgerContextWrapper';

const BurgerCards = ({ data }) => {
  const { ingredients, addBurgerToCart, deleteBurger } = useContext(BurgerContext);
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
      <section>
        <p>{`PHP ${getBurgerPrice}`}</p>
        <div className="options">
          <Button
            type="button"
            onClick={() => addBurgerToCart(data.id)}
            block
          >
            <FontAwesomeIcon icon="shopping-cart" />
            Add to cart
            {data.onCart ? `(${data.onCart})` : null}
          </Button>
          <Button
            type="button"
            code="danger"
            onClick={() => deleteBurger(data.id)}
            block
          >
            <FontAwesomeIcon icon="trash" />
            Delete
          </Button>
        </div>
      </section>
      {/* <div>test</div> */}
    </Cards>
  )
}
BurgerCards.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
}
export default BurgerCards
