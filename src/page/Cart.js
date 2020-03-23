import React, {
  useContext,
  useState,
} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BurgerContext } from '../context/BurgerContextWrapper';
import Wrapper from '../components/Wrapper';
import {
  CartList,
  Button,
  Checkout,
} from '../components/StyledComponents';
import Payment from '../components/Payment';
import Loader from '../components/Loader/Loader';

const Cart = () => {
  const {
    burgerValues,
    ingredients,
    removeBurgerToCart,
    resetCart,
  } = useContext(BurgerContext);
  const [viewPopup, setViewPopup] = useState(false);
  const [viewLoader, setViewLoader] = useState(false);
  let total = 0;
  return (
    <Wrapper>
      {viewPopup && (
        <Payment onClose={() => setViewPopup(false)} />
      )}
      {viewLoader && (<Loader />)}
      <div>
        {burgerValues.builds.filter((build) => build.onCart > 0)
          .map((build) => {
            const getBurgerPrice = (build.contents.reduce((accu, val) => {
              const ingr = ingredients.find((ingredient) => ingredient.id === val);
              let price = 0;
              if (ingr) price = ingr.price;
              return accu + price;
            }, 20) * build.onCart);
            total += getBurgerPrice;
            return (
              <CartList key={build.id}>
                <div className="cart-item-details">
                  <p className="cart-name">{build.name}</p>
                  <p className="cart-quantity">{build.onCart}</p>
                  <p className="cart-amount">{getBurgerPrice.toFixed(2)}</p>
                </div>
                <div className="cart-action">
                  <Button onClick={() => removeBurgerToCart(build.id)} code="danger" block>
                    <FontAwesomeIcon icon="minus-square" />
                    Less
                  </Button>
                  <Button onClick={() => removeBurgerToCart(build.id, 1)} code="danger" block>
                    <FontAwesomeIcon icon="trash" />
                    Remove
                  </Button>
                </div>
              </CartList>
            )
          })}
        {burgerValues.builds.filter((build) => build.onCart > 0).length > 0 && (
          <Checkout>
            <div className="cart-checkout">
              <p>
                Total:&nbsp;
                {total.toFixed(2)}
              </p>
              <Button
                onClick={() => {
                  setViewLoader(true);
                  resetCart()
                    .then(() => {
                      setViewLoader(false);
                      setViewPopup(true);
                    })
                }}
                block
              >
                Pay now
              </Button>
            </div>
          </Checkout>
        )}
        {/* display when no items on cart */}
        {burgerValues.builds.filter((build) => build.onCart > 0).length < 1 && (
          <div style={{
            border: '2px solid #ffda79',
            borderRadius: '4px',
            textAlign: 'center',
            padding: '20px',
          }}
          >
            NO ITEMS ON CART
          </div>
        )}
      </div>
    </Wrapper>
  )
}

export default Cart
