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
  padding: 40px 5px;
  border-radius: 3px;
  text-align: center;
  font-size: 48px;
  font-weight: 500;
  text-transform: uppercase;
  background-color: #e74c3c;
  color: #ffffff;
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
    opacity: 90%;
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
    font-weight: 500;
    align-selft: flex-start;
    text-transform: uppercase;
    height: 50px;
  }
`;

export const BurgerIngredients = styled.div`
  ${CardCSs}
  width: 30%;
  justify-content: center;
  align-items: center;
  height: 550px;
  margin: 10px 0;
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
`;
