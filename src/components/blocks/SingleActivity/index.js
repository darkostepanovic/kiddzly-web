import React from 'react';

import Button from '../../elements/Button';
import { Wrapper } from './styled';

const SingleActivity = ({ title, image, id }) => (
  <Wrapper>
    <img src={image} alt="activity" width="200" />
    <h3>{title}</h3>
    <Button inverted to={`/activities/${id}`}>
      Pogledaj ovu aktivnost
    </Button>
  </Wrapper>
);

export default SingleActivity;
