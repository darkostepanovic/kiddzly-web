import React from 'react';

import SubscribeInput from '../../components/blocks/SubscribeInput';
import Text from '../../components/elements/Text';
import Container from '../../components/elements/Container';

import firebase, { database } from 'firebase';

import { Wrapper } from './styled';

const SubscribeBar = () => {
  const subscribeVisitor = () => {
    console.log('subscribe visitor');
  };
  return (
    <Wrapper>
      <Container flex align="center" justify="space-between">
        <Text fontFamily="GothamBold" size="tiny">
          Želiš da znaš kada izađu nove aktivnosti?
        </Text>
        <SubscribeInput onSubmit={subscribeVisitor} />
      </Container>
    </Wrapper>
  );
};

SubscribeBar.Wrapper = Wrapper;

export default SubscribeBar;
