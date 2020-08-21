import React, { forwardRef } from 'react';

import { ReactComponent as ShareIcon } from 'assets/images/arrow-redo.svg';
import { ReactComponent as PinterestIcon } from 'assets/images/icon-pinterest.svg';
import { ReactComponent as TwitterIcon } from 'assets/images/icon-twitter.svg';
import { ReactComponent as FacebookIcon } from 'assets/images/icon-facebook.svg';

import { S, ShareButtonProps } from './share-button.styles';

interface Props extends ShareButtonProps {
  open?: boolean;
}

export const ShareButton = forwardRef(
  ({ open, ...props }: Props, ref: React.Ref<HTMLButtonElement>): JSX.Element => (
    <div style={{ position: 'relative' }}>
      {open ? (
        <S.AbsoluteContainer>
          <S.Social>
            <p className="social__text">Share</p>
            <FacebookIcon />
            <TwitterIcon />
            <PinterestIcon />
          </S.Social>
        </S.AbsoluteContainer>
      ) : null}
      <S.Button {...props} ref={ref} isOpen={open}>
        <ShareIcon className="share-button__icon" />
      </S.Button>
    </div>
  ),
);
