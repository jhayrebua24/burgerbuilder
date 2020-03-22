import React, {
  createContext,
  useReducer,
} from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import {
  ADD_BUILD,
  DELETE_BUILD,
} from './actions';
import reducer from './BurgerReducer';

export const BurgerContext = createContext({});
const BurgerContextWrapper = ({ children }) => {
  const ingredients = [
    {
      id: 1,
      name: 'Meat',
      price: 35,
    },
    {
      id: 2,
      name: 'Cheese',
      price: 8,
    },
    {
      id: 3,
      name: 'Bacon',
      price: 30,
    },
    {
      id: 4,
      name: 'Salad',
      price: 15,
    },
  ]
  const defaultValue = {
    builds: [
      {
        id: uuidv4(),
        name: 'Double Patty',
        contents: [1, 1, 2],
      },
      {
        id: uuidv4(),
        name: 'Cheeseburger',
        contents: [1, 2],
      },
      {
        id: uuidv4(),
        name: 'Burger',
        contents: [1],
      },
      {
        id: uuidv4(),
        name: 'Extreme Burger',
        contents: [4, 1, 2, 3, 1, 4, 2, 3],
      },
    ],
  };
  const [burgerValues, dispatch] = useReducer(reducer, defaultValue);

  return (
    <BurgerContext.Provider
      value={{
        burgerValues,
        ingredients,
      }}
    >
      {children}
    </BurgerContext.Provider>
  )
}
BurgerContextWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}
export default BurgerContextWrapper
