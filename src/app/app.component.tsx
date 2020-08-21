import React from 'react';
import { ThemeProvider } from 'styled-components';

import { main } from 'assets/theme';
import { Wrapper } from 'components';

export const App: React.FC = () => (
  <ThemeProvider theme={main}>
    <Wrapper>app</Wrapper>;
  </ThemeProvider>
);
