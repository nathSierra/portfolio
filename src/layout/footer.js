import React from 'react';
import Styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import Colors from '../constants/Colors';


const FlexLink = Styled(FontAwesomeIcon)`

  color: white;
  transition: transform 250ms ease;
  &:hover {
    color: black;
    transform: translateY(-20px);
    /* transform: scale(1.3, 1.3) */
  }
`


export const Footer = Styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;

  font-size: 4rem
`

export const FooterRow = () => {
  return (
    <Footer>
      <a href="https://www.linkedin.com/in/nathsierra/"><FlexLink icon={faLinkedin} /></a>
      <a href="https://github.com/nathSierra"><FlexLink icon={faGithub} /></a>
    </Footer>
  )
}