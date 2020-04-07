import styled from 'styled-components';

import Text from '../../../elements/Text';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media all and (min-width: 768px) {
    width: 310px;
  }
  @media all and (min-width: 1360px) {
    width: 420px;
  }

  button {
    margin-left: -40px;
    @media all and (min-width: 768px) {
      width: 123px;
    }
    @media all and (min-width: 1360px) {
      width: 168px;
    }
  }
`;

export const SubscribeInputField = styled.input`
  border: none;
  outline: none;
  background-color: ${p => p.theme.greyscale.light};
  border-radius: 43px;
  font-size: ${p => p.theme.typography.fontSize.tiny}px;
  padding: 0 20px;
  flex: 1;
`;

export const ErrorMessage = styled(Text)`
  flex: 0 0 100%;
  margin-left: 20px;
  margin-top: 5px;
`;
