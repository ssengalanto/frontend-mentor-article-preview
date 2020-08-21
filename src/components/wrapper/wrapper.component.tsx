import React, { forwardRef } from 'react';

import { S, WrapperProps } from './wrapper.styles';

export const Wrapper = forwardRef(
  (props: WrapperProps, ref: React.Ref<HTMLDivElement>): JSX.Element => (
    <S.Wrapper ref={ref} {...props} />
  ),
);
