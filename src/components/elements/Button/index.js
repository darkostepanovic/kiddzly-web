import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${p => (p.inverted ? '#fff' : p.theme.colors[p.type])};
  color: ${p => (p.inverted ? p.theme.colors[p.type] : '#fff')};
  font-size: ${p => p.theme.typography.fontSize[p.size] || 'inherit'};
  font-family: 'Gotham', sans-serif;
  height: 50px;
  width: ${p => p.width || '100%'};
  border-radius: 43px;
  cursor: pointer;
`;
