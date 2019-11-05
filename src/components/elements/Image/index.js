import styled from 'styled-components';

export default styled.div`
  width: ${p => (p.width ? p.width : '100%')};
  height: ${p => (p.height ? p.height : 'auto')};
  background-image: ${p => (p.image ? `url(${p.image})` : '')};
  background-position: center;
  background-repeat: no-repeat;
  background-size: ${p => p.cover ? 'cover' : 'contain'};
`;
