import Styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FlexLink = Styled(FontAwesomeIcon)`

  transition: transform 300ms ease-in-out;
  &:hover {
    transform: scale(1.3, 1.3)
  }
`

export default FlexLink;