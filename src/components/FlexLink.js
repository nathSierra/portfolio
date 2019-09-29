import Styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FlexLink = Styled(FontAwesomeIcon)`

  color: white;
  transition: transform 300ms ease;
  &:hover {
    color: black;
    transform: translateY(-20px);
    /* transform: scale(1.3, 1.3) */
  }
`

export default FlexLink;