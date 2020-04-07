import React from 'react';

import { SectionWrapper, CardList } from './styled';

const CardWrapper = ({ scroll, children }) => {
  return (
    <SectionWrapper>
      <CardList scroll={scroll}>{children}</CardList>
    </SectionWrapper>
  );
};

export default CardWrapper;
