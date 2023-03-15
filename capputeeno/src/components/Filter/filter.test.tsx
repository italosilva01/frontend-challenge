import React from 'react';
import '@testing-library/jest-dom';

import { Filter } from '.';
import { render } from '../../test/setup';

describe('Filter component', () => {
  it('should render Filter correctly', () => {
    const { getByRole, debug } = render(<Filter />);
    debug();
    expect(
      getByRole('button', {
        name: /organizar por/i,
      })
    ).toBeInTheDocument();
  });
});
