/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Content,
  Header,
} from './StyledComponents';

const Wrapper = ({ children, title }) => (
  <Container>
    <Header>{title || 'Burger Builder'}</Header>
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
