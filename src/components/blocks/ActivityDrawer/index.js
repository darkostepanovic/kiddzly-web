import React from 'react';
import { connect } from 'react-redux';

import activitiesRedux from '../../../redux/activities';

import DrawerContent from '../DrawerContent';

import { BackdropWrapper, DrawerWrapper } from './styled';

import activities from '../../../helpers/activities';

const ActivityDrawer = ({ id, active, closeDrawer }) => {
  const renderActivity = () => {
    return activities.map(activity =>
      activity.id === id ? (
        <DrawerContent
          key={activity.id}
          img={activity.image}
          alt={activity.title}
          title={activity.title}
          subtitle={activity.subtitle}
          goals={activity.goals}
          missions={activity.missions}
          description={activity.description}
          guides={activity.guides}
        />
      ) : null,
    );
  };
  return (
    <>
      <BackdropWrapper
        active={active}
        onClick={() => {
          closeDrawer();
        }}
      >
        <DrawerWrapper onClick={e => e.stopPropagation()} active={active}>
          {renderActivity()}
        </DrawerWrapper>
      </BackdropWrapper>
    </>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    closeDrawer: () =>
      dispatch(activitiesRedux.actions.activities.deactivateDrawer()),
  };
};

export default connect(null, mapDispatchToProps)(ActivityDrawer);
