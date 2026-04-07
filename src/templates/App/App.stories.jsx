import { App } from '.';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import { Children } from 'react';

export default {
  title: 'Templates/App',
  component: App,
  args: {
    children: 'Children padrão',
  },
  argTypes: {
    children: { type: 'string' },
  },
  // Esse decorator "abraça" o componente com o tema automaticamente no Storybook
  decorators: [
    // eslint-disable-next-line no-unused-vars
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export const Template = (args) => {
  return (
    <div>
      <App {...args} />
    </div>
  );
};
