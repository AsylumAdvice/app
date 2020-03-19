import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders "Hello world!"', () => {
  const { getByText } = render(<App />);
  const helloWorld = getByText('Hello world!');
  expect(helloWorld).toBeInTheDocument();
});
