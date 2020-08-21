import React, { forwardRef } from 'react';

import { Social } from 'components';
import { Breakpoints } from 'enums';
import { useWindowSize } from 'hooks';
import { ReactComponent as ShareIcon } from 'assets/images/arrow-redo.svg';

import { S, ShareButtonProps } from './share-button.styles';

interface Props extends ShareButtonProps {
  open?: boolean;
}

export const ShareButton = forwardRef(
  ({ open, ...props }: Props, ref: React.Ref<HTMLButtonElement>): JSX.Element => {
    const { width } = useWindowSize();

    const isMobileScreen = width && width <= +Breakpoints.MOBILE.split('em')[0] * 16;

    return (
      <div style={{ position: 'relative' }}>
        {open && isMobileScreen ? null : open ? (
          <S.AbsoluteContainer>
            <Social />
          </S.AbsoluteContainer>
        ) : null}
        <S.Button {...props} ref={ref} isOpen={open}>
          <ShareIcon className="share-button__icon" />
        </S.Button>
      </div>
    );
  },
);
