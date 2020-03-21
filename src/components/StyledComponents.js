import styled from 'styled-components';

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
`;

export const Header = styled.h1`
  margin: 0 0 15px 0;
  padding: 40px 5px;
  border-radius: 3px;
  text-align: center;
  font-size: 48px;
  font-weight: 500;
  background-color: #10ac84;
  color: #ffffff;
`;

export const Button = styled.button`
  ${(props) => (props.block ? 'width: 100%;' : '')}
  padding: 7px 15px;
  color: #ffffff;
  background-color: #00b894;
  text-transform: uppercase;
  border: 0;
  font-size: 16px;
  border-radius: 3px;
`;

export const BurgerLists = styled.section`
  margin: 10px 0;
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
  border: 2px solid #95afc0;
  border-radius: 4px;
  padding: 10px 5px;
  & p {
    color: #535c68;
    text-align: center;
  }
`;
