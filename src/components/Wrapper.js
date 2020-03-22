/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../logo.png';
import {
  Container,
  Content,
  Header,
} from './StyledComponents';

const Wrapper = ({ children, title }) => (
  <Container>
    <Header>
      <img src={Logo} alt="logo" />
      <p>{title || 'Burger Builder'}</p>
    </Header>
    <Content>
      {children}
    </Content>
  </Container>
)
Wrapper.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
}

export default Wrapper
