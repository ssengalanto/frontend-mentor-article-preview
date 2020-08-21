import React from 'react';

import { ReactComponent as PinterestIcon } from 'assets/images/icon-pinterest.svg';
import { ReactComponent as TwitterIcon } from 'assets/images/icon-twitter.svg';
import { ReactComponent as FacebookIcon } from 'assets/images/icon-facebook.svg';

import { S } from './social.styles';

export const Social: React.FC = () => (
  <S.Social>
    <p className="social__text">Share</p>
    <FacebookIcon />
    <TwitterIcon />
    <PinterestIcon />
  </S.Social>
);
