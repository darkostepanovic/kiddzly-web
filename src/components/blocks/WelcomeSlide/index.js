import React from 'react';

import Image from '../../elements/Image';
import { Title } from './styled';

const WelcomeSlide = ({ image, text }) => {
  return (
    <div>
      <Image height="252px" image={image} />
      <Title>{text}</Title>
    </div>
  );
};

export default WelcomeSlide;
