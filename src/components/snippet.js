import Styled from 'styled-components';
import Colors from '../constants/Colors';

const Snippet = Styled.div`
  flex-grow: 1;
  min-width: 350px;
  background: ${Colors.backgroundDarkest};
  color: ${props => props.inputColor || 'white'};
  font-family: 'Inconsolata', monospace;
  margin-bottom: 4vh;
  padding: 0.5vw;
  
`

export default Snippet;
