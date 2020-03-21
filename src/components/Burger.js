import React from 'react';
import PropTypes from 'prop-types';
import {
  BreadTop,
  BreadBottom,
  Meat,
  Cheese,
  Salad,
  Bacon,
} from './ingredients/burger';

const Burger = ({ contents = [], isListed }) => (
  contents.length > 0 && contents.map((content) => {
    let Ingr = null;

    switch (content) {
    case 1:
      Ingr = BreadTop;
      break;
    case 2:
      Ingr = BreadBottom;
      break;
    case 3:
      Ingr = Meat;
      break;
    case 4:
      Ingr = Cheese;
      break;
    case 5:
      Ingr = Bacon;
      break;
    case 6:
      Ingr = Salad;
      break;
    default:
      Ingr = <div />;
    }

    return <Ingr isListed={!!isListed}>{content}</Ingr>
  })
)


Burger.propTypes = {
  contents: PropTypes.arrayOf(PropTypes.object).isRequired,
}
export default Burger
