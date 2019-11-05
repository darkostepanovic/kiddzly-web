import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${p => (p.inverted ? '#fff' : p.theme.colors.primary)};
  color: ${p => (p.inverted ? p.theme.colors.primary : '#fff')};
  font-size: 18px;
  font-family: 'ProximaBold', sans-serif;
  height: 60px;
  width: 100%;
  text-transform: uppercase;
  border-radius: 30px;
  cursor: pointer;
`;
