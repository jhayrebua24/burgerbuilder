import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  padding-bottom: 15px;
  max-width: 1170px;
`;

export const Content = styled.div`
  margin: 0;
  padding: 0;
  @media (max-width: 1170px) {
    padding: 0 10px;
  }
  @media (max-width: 590px) {
    padding: 0 50px;
  }
`;

export const Header = styled.h1`
  margin: 0 0 15px 0;
  padding: 20px 5px;
  border-radius: 3px;
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

const ButtonAndLinkStyle = css`
  width: ${(props) => {
    if (props.block) return '100%'
    return props.width || 'auto'
  }};
  padding: 7px 15px;
  color: #ffffff;
  background-color: ${(props) => props.color || '#27ae60'};
  text-transform: uppercase;
  border: 0;
  font-size: 16px;
  border-radius: 3px;

  :hover {
    opacity: ${(props) => (props.disabled ? 0.6 : 0.9)};
  }
`;

const CardCSs = css`
  border: 2px solid #ffda79;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  margin: 15px 0;
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
  margin: 15px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-flow: wrap;
`;

export const BuildBurger = styled.div`
  ${CardCSs}
  margin: 10px 0;
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
  margin: 10px 0;

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
  margin: 10px 0;
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
  border: 1px solid #27ae60;
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
`

export const Dialog = styled.div`
  width: 400px;
  overflow: hidden;
  background-color: #ffffff;
  border: 2px solid #27ae60;
  border-radius: 8px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  & div {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 30px;
  }
  & p {
    font-size: 24px;
  }

  & button {
    margin-top: 5px;
  }
`;
