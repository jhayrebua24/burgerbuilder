import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  padding-bottom: 15px;
  max-width: 1170px;
`;

export const Content = styled.div`
  margin: 20px 0;
  padding: 0;
  @media (max-width: 1170px) {
    padding: 0 10px;
  }
  @media (max-width: 590px) {
    padding: 0 50px;
  }
`;

export const Header = styled.div`
  margin: 0;
  padding: 5px;
  text-align: center;
  font-size: 48px;
  font-weight: 500;
  text-transform: uppercase;
  background-color: #e74c3c;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    width: 100px;
    height: 100px;
  }
`;

// menu
export const MenuBar = styled.nav`
  background-color: #ffb142;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  display: flex;
  justify-content: space-between;
`;

export const Unordered = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  background-color: #f39c12;
`;

export const StyledList = styled.li`
  list-style-type: none;
  ${(props) => (props.active ? 'background-color: #e67e22;' : '')}
  & a {
    text-decoration: none;
    text-transform: uppercase;
    color: #ffffff;
    padding: 10px 10px;
    display: inline-block;
    position: relative;

    & svg {
      margin: 0 5px;
    }
  }
  : hover {
    background-color: #d35400;
  }
`;

export const Badge = styled.span`
  position: absolute;
  top: -5px;
  right: -5px;
  padding: 0px 7px;
  font-size: 12px;
  border-radius: 50%;
  background-color: red;
  color: white;
`;

const ButtonAndLinkStyle = css`
  width: ${(props) => {
    if (props.block) return '100%'
    return props.width || 'auto'
  }};
  padding: 7px 15px;
  color: #ffffff;
  cursor: pointer;
  background-color: ${(props) => {
    if (props.color) return props.color
    if (props.code) {
      if (props.code === 'danger') return '#e74c3c'
    }
    return '#27ae60'
  }};
  text-transform: uppercase;
  border: 0;
  font-size: 16px;
  border-radius: 3px;

  :hover {
    opacity: ${(props) => (props.disabled ? 0.6 : 0.9)};
  }

  & svg {
    margin: 0 5px;
  }
`;

const CardCSs = css`
  border: 2px solid #ffda79;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 15px;
  & p {
    margin: 0;
    background-color: #ffb142;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: capitalize; 
  }
`;

export const Button = styled.button`
  ${ButtonAndLinkStyle}
  margin: 0;
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
`;

export const StyledLink = styled(Link)`
  ${ButtonAndLinkStyle}
  text-decoration: none;
`;

export const BurgerLists = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
  @media (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 590px) {
    grid-template-columns: 1fr;
  }
`;

export const Cards = styled.div`
  ${CardCSs}
`;

export const BuildSection = styled.section`
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-flow: wrap;
`;

export const BuildBurger = styled.div`
  ${CardCSs}
  width: 40%;
  padding: 10px 10px;
  text-align: center;

  & h2 {
    text-transform: uppercase;
  }

  @media (max-width: 768px) {
    width: 60%;
  }
  @media (max-width: 590px) {
    width: 100%;
  }
`;

export const BurgerIngredients = styled.div`
  ${CardCSs}
  width: 30%;
  justify-content: flex-start;
  align-items: center;
  height: 550px;

  @media (max-width: 768px) {
    width: 35%;
  }
  @media (max-width: 590px) {
    width: 100%;
  }
`;

export const ContentSelector = styled.div`
  margin: 10px 5px;
  & span {
    font-size: 18px;
    padding: 0 10px;
    padding-bottom: 3px;
    margin: 0;
    display: inline-block;
    width: 60px;
    text-align: center;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
  }
`;

export const BurgerPrice = styled.div`
  ${CardCSs}
  width: 25%;
  justify-content: flex-start;

  @media (max-width: 768px) {
    width: 40%;
  }

  @media (max-width: 590px) {
    width: 100%;
  }
`;

export const Input = styled.input`
  padding: 8px 5px;
  width: 100%;
  box-sizing : border-box;
  margin: 0;
  text-transform: capitalize;
  border-radius: 2px;
  border: 1px solid gray;
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
`

export const Dialog = styled.div`
  width : 100%;
  height: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.7);
  top: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  & .dialog {
    width: 350px;
    height: 200px;
    overflow: hidden;
    background-color: #ffffff;
    border: 2px solid #27ae60;
    border-radius: 8px;
  }
  & .dialog-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 30px;

    & p {
      font-size: 24px;
      text-transform: uppercase;
    }

    & button {
      margin-top: 5px;
    }
  }
  
`;

export const CartList = styled.div`
  border: 2px solid #ffda79;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  padding: 15px;
  margin-bottom: 15px;

  & .cart-item-details {
    width: 80%;
    display: flex;
    padding: 0 15px;
    flex-flow: wrap;
    justify-content: space-between;
    & .cart-name {
      width: 40%;
    }
    & .cart-quantity {
      width: 30%;
      text-align: right;
    }
    & .cart-amount {
      width: 30%;
      text-align: right;
    }
  }

  & .cart-action {
    width: 20%;
    padding: 0 10px;
    & button {
      margin-bottom: 5px;
      font-size: 13px;
    }
  }
  
  @media (max-width: 675px){
    .cart-item-details {
      width: 60%;
      & .cart-name {
        width: 100%;
      }
      & .cart-quantity {
        width: 100%;
        text-align: left;
      }
      & .cart-amount {
        width: 100%;
        text-align: left;
      }
    }

    .cart-action {
      width: 40%;
    }
`;

export const Checkout = styled.div`
  display: flex;
  justify-content: flex-end;
  border: 2px solid #ffda79;
  width: 100%;
  & .cart-checkout {
    width: 30%;
    display: flex;
    flex-direction: column;
    & button {
      border-top-left-radius: 60px;
    }

    & p {
      margin-right: 40px;
      text-align: right;
    }
  }

  @media (max-width: 590px){
    .cart-checkout {
      border-top-left-radius: 60px;
      width: 70%;
    }
  }
`;

export const ErrorPage = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #ffda79;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  & img {
    border: 3px solid #333;
    border-radius: 50%;
  }

  & h1 {
    font-size: 48px;
    font-weight: 600;
    color: #333;
    margin: 0;
    }
  & a {
    color: #333;
   }
  }
`;

export const Footer = styled.footer`
  width: 100%;
  text-align: center;
  text-decoration: underline;
`;
