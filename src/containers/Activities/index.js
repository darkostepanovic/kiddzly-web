import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import activitiesRedux from '../../redux/activities';

import CardWrapper from '../../components/blocks/CardWrapper';
import Card from '../../components/blocks/Card';
import SubscribeBar from '../SubscribeBar';

import Container from '../../components/elements/Container';
import Logo from '../../components/elements/Logo';
import Text from '../../components/elements/Text';

import logo from '../../assets/images/lovo.svg';

import activityData from '../../helpers/activities';

const Activities = ({ activateDrawer }) => {
  const renderAllActivities = () => {
    return activityData.map(activity => (
      <Card
        key={activity.id}
        img={activity.image}
        alt={activity.title}
        title={{
          tag: 'h3',
          text: activity.title,
          fontFamily: 'GothamBold',
          size: 'lg',
        }}
        subtitle={{
          tag: 'h5',
          text: activity.subtitle,
          fontFamily: 'GothamBold',
          size: 'tiny',
        }}
        cta={{
          text: 'Pogledaj',
          to: '#',
          onClick: () => {
            activateDrawer(activity.id);
          },
        }}
      >
        <Text size="small">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
      </Card>
    ));
  };
  return (
    <>
      <Container flex align="center" justify="space-between">
        <Text as={Link} to="/">
          <Logo image={logo} />
        </Text>
        <Text
          as={Link}
          to="/featured-activities"
          size="small"
          color="primary"
          fontFamily="GothamBold"
        >
          Nazad
        </Text>
      </Container>
      <CardWrapper scroll>{renderAllActivities()}</CardWrapper>
      <SubscribeBar />
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  activateDrawer: id =>
    dispatch(activitiesRedux.actions.activities.activateDrawer(id)),
});

export default connect(null, mapDispatchToProps)(Activities);
