import styled from 'styled-components';

export default styled.div`
  display: ${p => (p.flex ? 'flex' : 'block')};
  align-items: ${p => (p.align ? p.align : 'flex-start')};
  flex-direction: ${p => p.flexDirection || 'row'};
  justify-content: ${p => p.justify || 'flex-start'};
  padding: 0 30px;
  @media all and (min-width: 1120px) {
    width: 1060px;
    margin: 0 auto;
    padding: 0;
  }
  @media all and (min-width: 1360px) {
    width: 1300px;
  }
`;
