import React, {
  createContext,
  useReducer,
} from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import {
  ADD_BUILD,
  DELETE_BUILD,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  RESET_CART,
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
        onCart: 1,
      },
      {
        id: uuidv4(),
        name: 'Cheeseburger',
        contents: [1, 2],
        onCart: 0,
      },
      {
        id: uuidv4(),
        name: 'Burger',
        contents: [1],
        onCart: 0,
      },
      {
        id: uuidv4(),
        name: 'Extreme Burger',
        contents: [4, 1, 2, 3, 1, 4, 2, 3],
        onCart: 0,
      },
    ],
  };
  const [burgerValues, dispatch] = useReducer(reducer, defaultValue);

  const addBurger = (value) => new Promise((resolve) => {
    const { burgerName, burgerContents } = value;
    let newName = burgerName.toString().trim()
      .toLowerCase().replace(/(?<= )[^\s]|^./g, (a) => a.toUpperCase());
    const countExist = burgerValues.builds.filter((build) => build.name === newName).length;
    if (countExist) newName = `${newName}(${countExist})`;
    const newBuild = {
      id: uuidv4(),
      name: newName,
      contents: burgerContents,
      onCart: 0,
    }

    dispatch({
      type: ADD_BUILD,
      payload: {
        newBuild,
      },
    })

    setTimeout(() => resolve({
      message: 'Burger added',
      newBuild,
    }), 1000);
  })

  const addBurgerToCart = (id) => dispatch({
    type: ADD_TO_CART,
    payload: {
      id,
    },
  })

  const deleteBurger = (deletedId) => new Promise((resolve) => {
    dispatch({
      type: DELETE_BUILD,
      payload: {
        deletedId,
      },
    });

    setTimeout(() => resolve({
      message: 'Burger deleted!',
    }),
    1000);
  })

  const removeBurgerToCart = (id, removeAll = 0) => dispatch({
    type: REMOVE_FROM_CART,
    payload: {
      id,
      removeAll,
    },
  })

  const resetCart = () => new Promise((resolve) => {
    dispatch({
      type: RESET_CART,
    })
    setTimeout(() => resolve('Cart reset!'), 1000);
  })

  return (
    <BurgerContext.Provider
      value={{
        burgerValues,
        ingredients,
        addBurger,
        addBurgerToCart,
        deleteBurger,
        removeBurgerToCart,
        resetCart,
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
