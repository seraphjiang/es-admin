import React from 'react';
import { render } from '@testing-library/react';
import LseDetail from './LseDetail';

describe('<LseDetail /> spec', () => {
  test('renders the component', () => {
    const { container } = render(
      <LseDetail>
      </LseDetail>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});