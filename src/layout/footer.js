import React from 'react';
import Styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import FlexLink from '../components/FlexLink';
import Colors from '../constants/Colors';

export const Footer = Styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;

  font-size: 4rem
`

export const FooterRow = () => {
  return (
    <Footer>
      <a href="/"><FlexLink style={{ color: Colors.primary }} icon={faLinkedin} /></a>
      <a href="/"><FlexLink style={{ color: Colors.primary }} icon={faGithub} /></a>
    </Footer>
  )
}