import React, {
  useContext,
} from 'react';
import { BurgerContext } from '../context/BurgerContextWrapper';
import BuildsList from '../components/BuildsList';
import {
  Container,
  Content,
  Header,
  Button,
} from '../components/StyledComponents';

const Build = () => {
  const {
    burgerValues,
  } = useContext(BurgerContext);

  const { builds } = burgerValues;
  return (
    <Container>
      <Header>BURGER BUILDER</Header>
      <Content>
        <Button>Build your burger!</Button>
        <BuildsList
          builds={builds}
        />
      </Content>
    </Container>
  )
}

export default Build
