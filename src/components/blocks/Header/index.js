import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../elements/Image';

import { Wrapper, Title } from './styled';

import backIcon from '../../../assets/icons/arrowBack.png';

const Header = ({ title, backButton }) => (
  <Wrapper>
    {backButton && (
      <Link to="/">
        <Image width="52px" height="17px" image={backIcon} />
        <span>Nazad</span>
      </Link>
    )}
    <Title>{title}</Title>
  </Wrapper>
);

export default Header;
