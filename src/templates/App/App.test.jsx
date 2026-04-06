import { it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { App } from '.';
import { renderTheme } from '../../styles/render-theme';

it('should test', () => {
  renderTheme(<App>Test</App>);
  expect(screen.getByText('Test')).toBeInTheDocument();
});
