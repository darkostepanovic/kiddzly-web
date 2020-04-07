import React from 'react';
import { connect } from 'react-redux';

import activitiesRedux from '../../../redux/activities';

import Text from '../../elements/Text';
import Button from '../../elements/Button';
import DrawerList from '../DrawerList';

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
      <Text
        as={title.tag}
        inline={title.inline}
        size={title.size}
        fontFamily={title.fontFamily}
        color={title.color}
        lh={title.lh}
      >
        {title.text}
      </Text>
      <Text
        as={subtitle.tag}
        inline={subtitle.inline}
        size={subtitle.size}
        fontFamily={subtitle.fontFamily}
        color={subtitle.color}
        lh={subtitle.lh}
      >
        {subtitle.text}
      </Text>
      {goals.length > 0 && <DrawerList listTitle="Ciljevi" list={goals} />}
      {missions.length > 0 && <DrawerList listTitle="Zadaci" list={missions} />}
      <ContentText>{description}</ContentText>
      {guides.length > 0 && (
        <DrawerList listTitle="Smernice za roditelje" list={guides} />
      )}
      <Button
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
