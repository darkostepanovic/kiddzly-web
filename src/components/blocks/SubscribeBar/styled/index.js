import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #fff;
  box-shadow: 0px -4px 20px rgba(78, 98, 109, 0.06);
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 20px 0;
  @media all and (min-width: 768px) {
    padding: 0;
  }

  > div {
    display: block;
    @media all and (min-width: 768px) {
      display: flex;
      height: 100px;
    }
  }

  p {
    margin-bottom: 16px;
    @media all and (min-width: 768px) {
      font-size: ${p => p.theme.typography.fontSize.regular}px;
      max-width: 245px;
      margin-bottom: 0;
    }
    @media all and (min-width: 1120px) {
      font-size: ${p => p.theme.typography.fontSize.lg}px;
      max-width: 100%;
    }
  }
`;
