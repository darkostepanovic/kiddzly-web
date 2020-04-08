import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';

import SubscribeInput from '../../components/blocks/SubscribeInput';

import {
  Wrapper,
  SubscribeBarContainer,
  SubscribeBarText,
  InputWrapper,
  SubscriptionLoader,
} from './styled';

const SubscribeBar = () => {
  const [loading, toggleLoading] = useState(false);
  const [userSubscribed, toggleUserSubscribed] = useState(false);
  const [dbError, toggleDbError] = useState('');

  useEffect(() => {
    const subscribed = localStorage.getItem('userSubscribed');
    if (subscribed) {
      toggleUserSubscribed(true);
    }
  }, []);

  const subscribeVisitor = value => {
    toggleLoading(true);
    toggleDbError('');
    firebase
      .database()
      .ref('subscribers')
      .push(value)
      .then(snap => {
        localStorage.setItem('userSubscribed', 'true');
        toggleUserSubscribed(true);
        toggleLoading(false);
      })
      .catch(err => {
        localStorage.removeItem('userSubscribed');
        toggleUserSubscribed(false);
        toggleDbError('Ups! Doslo je do greške sa naše strane!');
        toggleLoading(false);
      });
  };
  return (
    <Wrapper>
      <SubscribeBarContainer flex align="center" justify="space-between">
        <SubscribeBarText
          fontFamily="GothamBold"
          size="tiny"
          subscribed={userSubscribed}
        >
          {userSubscribed
            ? 'Super! Ne moraš da brineš, nove aktivnosti stižu u tvoj inbox'
            : 'Želiš da znaš kada izađu nove aktivnosti?'}
        </SubscribeBarText>
        {!userSubscribed && (
          <InputWrapper>
            {loading ? (
              <SubscriptionLoader
                type="TailSpin"
                color="#E64A4A"
                height={30}
                width={30}
              />
            ) : (
              <div />
            )}
            <SubscribeInput onSubmit={subscribeVisitor} dbError={dbError} />
          </InputWrapper>
        )}
      </SubscribeBarContainer>
    </Wrapper>
  );
};

SubscribeBar.Wrapper = Wrapper;

export default SubscribeBar;
