import React, { forwardRef } from 'react';

import { S, AvatarProps } from './avatar.styles';

export const Avatar = forwardRef(
  (props: AvatarProps, ref: React.Ref<HTMLDivElement>): JSX.Element => (
    <S.Avatar {...props} ref={ref}>
      <div className="avatar__img" />
      <div>
        <p className="avatar__name">Michelle Appleton</p>
        <p className="avatar__date">28 Jun 2020</p>
      </div>
    </S.Avatar>
  ),
);
