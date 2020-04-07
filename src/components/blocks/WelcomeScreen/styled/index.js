import styled from 'styled-components';
import Container from '../../../elements/Container';

export const WelcomeContent = styled.div`
  padding-bottom: 30px;

  @media all and (min-width: 768px) {
    padding-bottom: 80px;
    max-width: 375px;
  }
  @media all and (min-width: 1120px) {
    padding-bottom: 0;
  }

  h1 {
    margin-top: 10px;
    margin-bottom: 16px;
    @media all and (min-width: 768px) {
      margin-top: 17px;
      margin-bottom: 17px;
    }
  }
  p {
    margin-bottom: 35px;
    @media all and (min-width: 768px) {
      margin-bottom: 50px;
    }
  }
  a {
    @media all and (min-width: 1120px) {
      max-width: 205px;
    }
  }
`;

export const WelcomeContainer = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-end;
  @media all and (min-width: 1120px) {
    justify-content: center;
  }
`;
