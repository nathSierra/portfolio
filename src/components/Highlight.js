import Styled from 'styled-components';

const Highlight = Styled.span`
  color: ${props => props.inputColor || 'grey'};
`

export default Highlight;