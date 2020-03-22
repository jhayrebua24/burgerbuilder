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

const Burger = ({ contents = [] }) => {
  const burger = contents.map((content) => {
    let Ingr = null;

    switch (content) {
    case 1:
      Ingr = Meat;
      break;
    case 2:
      Ingr = Cheese;
      break;
    case 3:
      Ingr = Bacon;
      break;
    case 4:
      Ingr = Salad;
      break;
    default:
      Ingr = <div />;
    }

    return (
      <Ingr
        key={Math.random(1, 9999999)}
      >
        {content}
      </Ingr>
    )
  });

  return (
    <div
      style={{
        margin: '0 5px',
      }}
    >
      <BreadTop />
      {burger}
      <BreadBottom />
    </div>
  )
}

Burger.propTypes = {
  contents: PropTypes.arrayOf(PropTypes.number).isRequired,
}
export default Burger
