import React from 'react';

import { SectionWrapper, CardList } from './styled';

const CardWrapper = ({ children }) => {
  return (
    <SectionWrapper>
      <CardList>{children}</CardList>
    </SectionWrapper>
  );
};

export default CardWrapper;
