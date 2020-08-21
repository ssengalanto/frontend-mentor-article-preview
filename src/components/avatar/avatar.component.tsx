import React, { forwardRef } from 'react';

import { S, AvatarProps } from './avatar.styles';

interface Props extends AvatarProps {
  owner: string;
  date: Date | string;
}

export const Avatar = forwardRef(
  ({ owner, date, ...props }: Props, ref: React.Ref<HTMLDivElement>): JSX.Element => (
    <S.Avatar {...props} ref={ref}>
      <div className="avatar__img" />
      <div>
        <p className="avatar__name">{owner}</p>
        <p className="avatar__date">{date}</p>
      </div>
    </S.Avatar>
  ),
);
