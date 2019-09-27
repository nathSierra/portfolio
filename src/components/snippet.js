import React from 'react';
import Styled from 'styled-components';
import Colors from '../constants/Colors';

const Snippet = Styled.p`
  background: ${Colors.backgroundDarkest};
  color: ${props => props.inputColor || 'white'};
  font-family: 'Inconsolata', monospace;
  margin: 5vh 20vw;
`

export default Snippet;
