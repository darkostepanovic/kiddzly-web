import styled from 'styled-components';

import Text from '../../../elements/Text';

export const Wrapper = styled.div`
  @media all and (min-width: 768px) {
    max-width: 300px;
    margin: 0 auto;
  }
`;

export const ContentText = styled(Text)`
  margin-bottom: 20px;
`;
