import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Link, useLocation, useRouteMatch, Redirect,
} from 'react-router-dom';
import Logo from '../logo.png';
import {
  Container,
  Content,
  Header,
  MenuBar,
  Unordered,
  StyledList,
  Badge,
  Footer,
} from './StyledComponents';
import { BurgerContext } from '../context/BurgerContextWrapper';

const Wrapper = ({ children, title }) => {
  const { burgerValues: { builds } } = useContext(BurgerContext);
  const { pathname } = useLocation();
  const { isExact } = useRouteMatch();
  const onCartItems = builds.reduce((accu, val) => accu + val.onCart, 0);

  if (!isExact) return (<Redirect to="/404" />)

  return (
    <Container>
      <Header>
        <img src={Logo} alt="logo" />
        <p>{title || 'Burger Builder'}</p>
      </Header>
      {/* menu */}
      <MenuBar>
        <Unordered>
          <StyledList active={pathname === '/'}>
            <Link to="/">
              <FontAwesomeIcon icon="hamburger" />
              burger list
            </Link>
          </StyledList>
          <StyledList active={pathname === '/build'}>
            <Link to="/build">
              <FontAwesomeIcon icon="utensils" />
              build now
            </Link>
          </StyledList>
        </Unordered>
        <Unordered>
          <StyledList active={pathname === '/cart'}>
            <Link to="/cart">
              <FontAwesomeIcon icon="shopping-cart" />
              <Badge>{onCartItems || null}</Badge>
            </Link>
          </StyledList>
        </Unordered>
      </MenuBar>
      {/* end menu */}
      <Content>
        {children}
      </Content>
      <Footer>
        <span>&copy; J. Rebua</span>
      </Footer>
    </Container>
  )
}
Wrapper.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
}

Wrapper.defaultProps = {
  children: <div />,
  title: 'Burger Builder',
}

export default Wrapper
