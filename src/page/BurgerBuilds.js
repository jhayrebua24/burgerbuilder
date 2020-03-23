import React, {
  useContext,
} from 'react';
import { BurgerContext } from '../context/BurgerContextWrapper';
import BuildsList from '../components/BuildsList';
import Wrapper from '../components/Wrapper';

const BurgerBuilds = () => {
  const {
    burgerValues,
  } = useContext(BurgerContext);

  const { builds } = burgerValues;
  return (
    <Wrapper>
      <BuildsList
        builds={builds}
      />
    </Wrapper>
  )
}

export default BurgerBuilds
