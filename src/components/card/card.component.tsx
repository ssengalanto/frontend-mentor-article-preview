import React, { forwardRef } from 'react';

import { S, CardProps } from './card.styles';

export const Card = forwardRef(
  (props: CardProps, ref: React.Ref<HTMLDivElement>): JSX.Element => (
    <S.Card ref={ref} {...props} />
  ),
);
