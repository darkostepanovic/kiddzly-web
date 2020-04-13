import React from 'react';
import { connect } from 'react-redux';

import activitiesRedux from '../../../redux/activities';

import Text from '../../elements/Text';
import Button from '../../elements/Button';

import { ContentText, Wrapper } from './styled';

const DrawerContent = ({
  img,
  alt,
  title,
  subtitle,
  goals,
  missions,
  description,
  guides,
  closeDrawer,
}) => {
  return (
    <Wrapper>
      <img src={img} alt={alt} width="100%" height="auto" />
      <Text as="h2" size="xl" fontFamily="GothamBold">
        {title}
      </Text>
      <Text as="h4" size="small" fontFamily="GothamBold">
        {subtitle}
      </Text>
      {/*{goals.length > 0 && <DrawerList listTitle="Ciljevi" list={goals} />}*/}
      {/*{missions.length > 0 && <DrawerList listTitle="Zadaci" list={missions} />}*/}
      <ContentText size="small" lh="large">{description}</ContentText>
      {/*{guides.length > 0 && (*/}
      {/*  <DrawerList listTitle="Smernice za roditelje" list={guides} />*/}
      {/*)}*/}
      <Button
        to="#"
        as="button"
        type="primary"
        size="tiny"
        fontFamily="GothamBold"
        onClick={closeDrawer}
      >
        Završi
      </Button>
    </Wrapper>
  );
};

const mapDispatchToProps = dispatch => ({
  closeDrawer: () =>
    dispatch(activitiesRedux.actions.activities.deactivateDrawer()),
});

export default connect(null, mapDispatchToProps)(DrawerContent);
