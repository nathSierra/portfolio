import Styled from 'styled-components';
import Colors from '../constants/Colors';

export const Container = Styled.div`
  display: flex;
  margin: 0;
  flex-direction: column;
  background: ${Colors.background};
  /* max-width: 960px; */
  color: white;
  min-height: 100vh;
  margin: 0 auto;
  font-family: 'Fira Sans', sans-serif;
`