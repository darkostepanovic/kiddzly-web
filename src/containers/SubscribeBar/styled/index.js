import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';

import Container from '../../../components/elements/Container';
import Text from '../../../components/elements/Text';

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
`;

export const SubscribeBarContainer = styled(Container)`
  display: block;
  @media all and (min-width: 768px) {
    display: flex;
    height: 100px;
  }
`;

export const SubscribeBarText = styled(Text)`
  margin-bottom: 16px;
  @media all and (min-width: 768px) {
    font-size: ${p => p.theme.typography.fontSize.regular}px;
    max-width: ${p => p.subscribed ? '80%' : '245px'};
    margin-bottom: 0;
  }
  @media all and (min-width: 1120px) {
    font-size: ${p => p.theme.typography.fontSize.lg}px;
    max-width: 100%;
  }
`;

export const SubscriptionLoader = styled(Loader)`
  @media all and (min-width: 768px) {
    margin-right: 20px;
  }
`

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  justify-content: space-between;
  @media all and (min-width: 768px) {
    flex-direction: row;
  }
`;
