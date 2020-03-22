import React, {
  useContext,
  useState,
} from 'react';
import { BurgerContext } from '../context/BurgerContextWrapper';
import Wrapper from '../components/Wrapper';
import {
  StyledLink,
  BuildSection,
} from '../components/StyledComponents';
import BurgerBuild from '../components/BurgerBuild';
import BurgerIngredientsMenu from '../components/BurgerIngredientsMenu';
import BurgerPriceLists from '../components/BurgerPriceLists';

const BurgerBuilder = () => {
  const { ingredients } = useContext(BurgerContext);
  const [burgerContents, setBurgerContents] = useState([]);

  const addStuffOnBurger = (stuff) => {
    setBurgerContents([
      ...burgerContents,
      stuff,
    ])
  }

  const removeStuffOnBurger = (stuff) => {
    const burgerStuffs = [...burgerContents];
    const stuffKey = burgerContents.lastIndexOf(stuff);
    if (stuffKey !== -1) burgerStuffs.splice(stuffKey, 1);
    setBurgerContents([
      ...burgerStuffs,
    ])
  }

  const removeAllStuffs = () => {
    setBurgerContents([]);
  }

  return (
    <Wrapper title="Start building your burger">
      <StyledLink to="/">Display burgers</StyledLink>
      <BuildSection>
        <BurgerBuild
          burgerContents={burgerContents}
        />
        <BurgerIngredientsMenu
          burgerContents={burgerContents}
          ingredients={ingredients}
          addStuffOnBurger={addStuffOnBurger}
          removeStuffOnBurger={removeStuffOnBurger}
          removeAllStuffs={removeAllStuffs}
        />
        <BurgerPriceLists
          ingredients={ingredients}
          burgerContents={burgerContents}
        />
        {/* <BuildBurger>1</BuildBurger>
        <BurgerIngredients>2</BurgerIngredients>
        <BurgerPrice>3</BurgerPrice> */}
      </BuildSection>
    </Wrapper>
  )
}

export default BurgerBuilder
