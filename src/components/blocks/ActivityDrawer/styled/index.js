import styled from 'styled-components';

export const BackdropWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.3);
  opacity: ${p => (p.active ? 1 : 0)};
  visibility: ${p => (p.active ? 'visible' : 'hidden')};
  transition: all 0.3s ease;
`;

export const DrawerWrapper = styled.div`
  background-color: #fff;
  width: 100%;
  height: 100vh;
  overflow: auto;
  position: absolute;
  top: 0;
  right: ${p => (p.active ? 0 : '-520px')};
  transition: all 0.3s ease;
  padding: 30px;
  @media all and (min-width: 768px) {
    width: 520px;
  }
`;
