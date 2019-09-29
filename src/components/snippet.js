import React from 'react';
import Styled from 'styled-components';
import Colors from '../constants/Colors';

const Snippet = Styled.p`
  flex-grow: 1;
  min-width: 350px;
  background: ${Colors.backgroundDarkest};
  color: ${props => props.inputColor || 'white'};
  font-family: 'Inconsolata', monospace;
  
`

export default Snippet;
