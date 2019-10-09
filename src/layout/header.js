import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import Styled from 'styled-components';
import Colors from '../constants/Colors';

const Header = Styled.header`
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  min-height: 9vh;
  margin-bottom: 200px;
  text-shadow: 1px 1px 0 #998, 2px 2px 0 #998, 3px 3px 0 #998;
  &:hover {
    text-shadow: ${props => {
    const location = props.location.pathname;
    if (location === '/contact') {
      return '1px 1px 0 yellow, 2px 2px 0 yellow, 3px 3px 0 yellow';
    } else {
      return '1px 1px 0 white, 2px 2px 0 white, 3px 3px 0 white'
    }
  }}}
  a {
    color: black;
    /* &:hover {
      color: white;
    } */
  }
`

export default props => (
  <Header location={props.location}>
    {console.log(props)}
    <Link
      to="/"
      style={{
        margin: '1rem',
        textDecoration: 'none',
        // color: 'black',
        fontSize: '4rem',
        padding: '0.5rem',
        borderRadius: '4px',
      }}
      activeStyle={{
        color: 'black',
      }}
    >

      {props.children}
    </Link>
  </Header>
)


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

