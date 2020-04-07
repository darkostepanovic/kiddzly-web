import React from 'react';
import { Link } from 'react-router-dom';

import Text from '../../elements/Text';
import { CardWrapper, ContentWrapper } from './styled';

const Card = ({ img, alt, title, subtitle, cta, children }) => (
  <CardWrapper>
    <img src={img} alt={alt} width="100%" height="auto" />
    <ContentWrapper>
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
      {children}
      <Text
        as={cta.renderAs || Link}
        href={cta.href}
        to={cta.to || '#'}
        color={cta.color || 'primary'}
        size={cta.size || 'small'}
        fontFamily={cta.fontFamily || 'GothamBold'}
      >
        {cta.text}
      </Text>
    </ContentWrapper>
  </CardWrapper>
);

Card.Wrapper = CardWrapper;

export default Card;
