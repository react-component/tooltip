import React from 'react';
import { render } from '@testing-library/react';
import Tooltip from '../src';

it.each([0, false, '', null, undefined])(
  'preserves aria-describedby presence for overlay %s',
  (overlay) => {
    const { getByRole } = render(
      <Tooltip visible overlay={overlay} id="tip">
        <button>Target</button>
      </Tooltip>,
    );
    const button = getByRole('button');
    if (overlay === null || overlay === undefined) {
      expect(button).not.toHaveAttribute('aria-describedby');
    } else {
      expect(button).toHaveAttribute('aria-describedby', 'tip');
    }
  },
);
