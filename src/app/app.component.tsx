import React from 'react';
import { ThemeProvider } from 'styled-components';

import { main } from 'assets/theme';
import { Wrapper } from 'components';
import { Article } from 'modules/article';

export const App: React.FC = () => (
  <ThemeProvider theme={main}>
    <Wrapper>
      <Article />
    </Wrapper>
  </ThemeProvider>
);
