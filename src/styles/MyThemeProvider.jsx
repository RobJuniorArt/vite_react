import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import P from 'prop-types';
import { GlobalStyle } from './global-styles';

export const MyThemeProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
      <GlobalStyle />
    </ThemeProvider>
  );
};

MyThemeProvider.prototype = {
  children: P.node.isRequired,
};
