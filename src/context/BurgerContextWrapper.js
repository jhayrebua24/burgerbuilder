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
      name: 'Bread Top',
      price: 10,
      maxAllowed: 1,
    },
    {
      id: 2,
      name: 'Bread Bottom',
      price: 10,
      maxAllowed: 1,
    },
    {
      id: 3,
      name: 'Meat',
      price: 35,
      maxAllowed: 3,
    },
    {
      id: 4,
      name: 'Cheese',
      price: 8,
      maxAllowed: 2,
    },
    {
      id: 5,
      name: 'Bacon',
      price: 30,
      maxAllowed: 2,
    },
    {
      id: 6,
      name: 'Salad',
      price: 15,
      maxAllowed: 2,
    },
  ]
  const defaultValue = {
    builds: [
      {
        id: uuidv4(),
        name: 'Double Patty',
        contents: [1, 4, 4, 3, 6, 2],
      },
      {
        id: uuidv4(),
        name: 'Double Patty',
        contents: [1, 3, 3, 6, 2],
      },
      {
        id: uuidv4(),
        name: 'Double Patty',
        contents: [1, 3, 3, 6, 2],
      },
      {
        id: uuidv4(),
        name: 'Double Patty',
        contents: [1, 3, 3, 6, 2],
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
