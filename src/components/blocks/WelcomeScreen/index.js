import React from 'react';

import WelcomeLogo from '../../elements/WelcomeLogo';
import PageWrapper from '../../elements/PageWrapper';
import Text from '../../elements/Text';
import Button from '../../elements/Button';

import { WelcomeContent, WelcomeContainer } from './styled';

import welcomeScreenImg from '../../../assets/images/welcomeScreen.svg';
import logo from '../../../assets/images/lovo.svg';

const Welcome = () => {
  return (
    <PageWrapper flex image={welcomeScreenImg}>
      <WelcomeContainer>
        <WelcomeLogo image={logo} />
        <WelcomeContent>
          <Text as="h1" size="regular">
            Aktivnosti za decu
          </Text>
          <Text size="tiny">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            faucibus accumsan eleifend. Maecenas eget erat sed mi accumsan
            egestas ut eget erat. Ut in orci rutrum, tempor lorem at, imperdiet
            nisl.
          </Text>
          <Button to="/featured-activities" size="14px" type="primary">
            Vidi aktivnosti
          </Button>
        </WelcomeContent>
      </WelcomeContainer>
    </PageWrapper>
  );
};

export default Welcome;
