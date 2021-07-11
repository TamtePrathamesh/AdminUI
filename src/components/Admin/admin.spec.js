/* eslint-disable no-undef */
import React from 'react';
import { screen, render, waitFor, act } from '@testing-library/react';
import user from '@testing-library/user-event';
import * as helper from './admin.helper';
import '@testing-library/jest-dom';
import Admin from '.';

describe('Admin', () => {
  // jest.mock('./admin.helper', () => ({
  //   getAdminList: jest.fn().mockImplementation(() =>
  //     Promise.resolve([
  //       { id: '1', name: 'xyz', email: 'an@g.c', role: 'member', selection: false },
  //       { id: '2', name: 'pqr', email: 'an@g.c', role: 'member', selection: false },
  //     ])
  //   ),
  // }));

  it('should match snapshot', () => {
    expect(render(<Admin />).container).toMatchSnapshot();
  });

  it('should display the data', async () => {
    render(<Admin />);

    await act(() => {
      waitFor(async () => await expect(screen.findByText('xyz')).toBeInTheDocument());
    });
    screen.debug();
  });
});
