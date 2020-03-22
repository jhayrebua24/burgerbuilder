import React, {
  useContext,
} from 'react';
import { BurgerContext } from '../context/BurgerContextWrapper';
import BuildsList from '../components/BuildsList';
import Wrapper from '../components/Wrapper';
import {
  StyledLink,
} from '../components/StyledComponents';

const BurgerBuilds = () => {
  const {
    burgerValues,
  } = useContext(BurgerContext);

  const { builds } = burgerValues;
  return (
    <Wrapper>
      <StyledLink to="/build">Build your burger!</StyledLink>
      <BuildsList
        builds={builds}
      />
    </Wrapper>
  )
}

export default BurgerBuilds
