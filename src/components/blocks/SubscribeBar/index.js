import React from 'react';

import SubscribeInput from '../SubscribeInput';
import Text from '../../elements/Text';
import Container from '../../elements/Container';

import { Wrapper } from './styled';

const SubscribeBar = ({ onSubmit }) => {
  return (
    <Wrapper>
      <Container flex align="center" justify="space-between">
        <Text fontFamily="GothamBold" size="tiny">
          Želiš da znaš kada izađu nove aktivnosti?
        </Text>
        <SubscribeInput onSubmit={onSubmit} />
      </Container>
    </Wrapper>
  );
};

SubscribeBar.Wrapper = Wrapper;

export default SubscribeBar;
