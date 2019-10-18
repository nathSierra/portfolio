import Styled from 'styled-components';
import Colors from '../constants/Colors';

const Snippet = Styled.div`
  flex-grow: 1;
  min-width: 350px;
  border-radius: 2px;
  border-width: 1px;
  border-style: solid;
  border-color: black;
  background: ${Colors.backgroundDarkest};
  color: ${props => props.inputColor || 'white'};
  font-family: 'Inconsolata', monospace;
  margin-bottom: 10vh;
  padding: 0.5vw;
  &::selection {
    background-color: red;
    /* caret-color: red; */
  }
  transition: border-color 0.3s;
  &:hover {
    border-color: yellow
  }
  
`

export default Snippet;
