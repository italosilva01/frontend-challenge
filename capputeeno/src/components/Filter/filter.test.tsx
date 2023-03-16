import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import { Filter } from '.';
import { render, waitFor } from '../../test/setup';

describe('Filter component', () => {
  it('should render Filter correctly', () => {
    const { getByRole } = render(<Filter />);
    expect(
      getByRole('button', {
        name: /organizar por/i,
      })
    ).toBeInTheDocument();
  });

  it('should show all options of menu', async () => {
    const { debug, getByRole, getByText } = render(<Filter />);

    const ButtonFilter = getByRole('button', {
      name: /organizar por/i,
    });

    userEvent.click(ButtonFilter);
    debug();
    await waitFor(() => {
      expect(getByText(/novidades/i)).toBeInTheDocument();
      expect(getByText(/preço: maior \- menor/i)).toBeInTheDocument();
      expect(getByText(/preço: menor \- maior/i)).toBeInTheDocument();
      expect(getByText(/mais vendidos/i)).toBeInTheDocument();
    });
  });
});
