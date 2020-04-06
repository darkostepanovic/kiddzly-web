import styled from 'styled-components';

export default styled.div`
  display: ${p => (p.flex ? 'flex' : 'block')};
  flex-wrap: wrap;
  flex-direction: ${p => p.flex || 'row'};
  background-image: ${p => (p.image ? `url(${p.image})` : '')};
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: top right;
  min-height: 100vh;
  @media all and (min-width: 768px) {
    background-size: 80% auto;
  }
  @media all and (min-width: 1024px) {
    background-size: 70% auto;
  }
  @media all and (min-width: 1900px) {
    background-size: 60% auto;
  }
`;
