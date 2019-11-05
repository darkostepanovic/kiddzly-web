import styled from 'styled-components';

export default styled.span`
  font-size: ${p => p.fontSize || p.theme.typography.fontSize.p};
`;
