import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import Tooltip from '../src';

jest.unmock('@rc-component/trigger');

describe('Escape integration', () => {
  it('closes an uncontrolled click tooltip through the real Trigger dependency', () => {
    const onVisibleChange = jest.fn();
    const { container } = render(
      <Tooltip trigger={['click']} overlay="Tooltip content" onVisibleChange={onVisibleChange}>
        <button type="button">Show tooltip</button>
      </Tooltip>,
    );

    fireEvent.click(container.querySelector('button'));
    expect(onVisibleChange).toHaveBeenLastCalledWith(true);
    expect(document.querySelector('.rc-tooltip')).not.toHaveClass('rc-tooltip-hidden');

    fireEvent.keyDown(window, { key: 'Escape' });
    expect(onVisibleChange).toHaveBeenLastCalledWith(false);
    expect(document.querySelector('.rc-tooltip')).toHaveClass('rc-tooltip-hidden');
  });
});
