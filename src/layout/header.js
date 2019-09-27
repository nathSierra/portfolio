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
`

export default props => (
  <Header>
    <Link
      to="/"
      style={{
        margin: '1rem',
        textDecoration: 'none',
        color: Colors.backgroundLight,
        fontSize: '2rem',
        padding: '0.5rem',
        borderRadius: '4px',
      }}
      activeStyle={{
        color: Colors.primary,
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

