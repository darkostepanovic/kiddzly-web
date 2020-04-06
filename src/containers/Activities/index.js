import React from 'react';

import CardWrapper from '../../components/blocks/CardWrapper';
import Card from '../../components/blocks/Card';

import Container from '../../components/elements/Container';
import Logo from '../../components/elements/Logo';
import Text from '../../components/elements/Text';

import logo from '../../assets/images/lovo.svg';
import illustration1 from '../../assets/images/activities/illustration1.png';
import { Link } from 'react-router-dom';

const Activities = () => {
  return (
    <>
      <Container flex align="center" justify="space-between">
        <Text as={Link} to="/">
          <Logo image={logo} />
        </Text>
        <Text
          as={Link}
          to="/all-activities"
          size="small"
          color="primary"
          fontFamily="GothamBold"
        >
          Pogledaj sve aktivnosti
        </Text>
      </Container>
      <CardWrapper>
        <Card
          img={illustration1}
          alt="Welcome"
          title={{
            tag: 'h3',
            text: 'Autoperionica',
            fontFamily: 'GothamBold',
            size: 'lg',
          }}
          cta={{
            text: 'Pogledaj',
            to: '/activities',
          }}
        >
          <Text size="small">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </Card>
        <Card
          img={illustration1}
          alt="Welcome"
          title={{
            tag: 'h3',
            text: 'Autoperionica',
            fontFamily: 'GothamBold',
            size: 'lg',
          }}
          cta={{
            text: 'Pogledaj',
            to: '/activities',
          }}
        >
          <Text size="small">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </Card>
        <Card
          img={illustration1}
          alt="Welcome"
          title={{
            tag: 'h3',
            text: 'Autoperionica',
            fontFamily: 'GothamBold',
            size: 'lg',
          }}
          cta={{
            text: 'Pogledaj',
            to: '/activities',
          }}
        >
          <Text size="small">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </Card>
      </CardWrapper>
    </>
  );
};

export default Activities;
