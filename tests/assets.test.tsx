import fs from 'fs';
import path from 'path';
import React from 'react';
import { render } from '@testing-library/react';
import Tooltip from '../src';

describe('assets', () => {
  it('style the element the popup renders its content in', () => {
    render(
      <Tooltip overlay="Tip" visible>
        <span>Target</span>
      </Tooltip>,
    );
    const content = document.querySelector('[role="tooltip"]');

    expect(content.className).toContain('rc-tooltip-container');

    ['bootstrap.less', 'bootstrap_white.less'].forEach((file) => {
      const less = fs.readFileSync(path.join(__dirname, '..', 'assets', file), 'utf8');

      expect(less).toContain('.@{tooltip-prefix-cls}-container {');
      expect(less).not.toContain('.@{tooltip-prefix-cls}-inner {');
    });
  });
});
