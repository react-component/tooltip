import React from 'react';
import { render } from '@testing-library/react';
import Popup from '../src/Popup';

describe('Popup', () => {
  // Used in antd for C2D2C
  it('should export', () => {
    expect(Popup).toBeTruthy();
  });

  it('should correctly extract text from string, number, function, and element', () => {
    const { getByRole } = render(
      <Popup prefixCls="test" id="popup-id">
        {() => (
          <>
            {'Hello'}
            {123}
            <span>World</span>
          </>
        )}
      </Popup>,
    );

    const tooltip = getByRole('tooltip');
    const hiddenTextContainer = tooltip.querySelector('div > div');

    expect(hiddenTextContainer.textContent).toBe('Hello 123 World');
  });

  it('should apply updated hidden text styles correctly', () => {
    const { getByRole } = render(
      <Popup prefixCls="test" id="popup-id">
        test hidden text
      </Popup>,
    );

    const tooltip = getByRole('tooltip');
    const hiddenTextContainer = tooltip.querySelector('div > div');

    expect(hiddenTextContainer).toHaveStyle({
      width: '0',
      height: '0',
      position: 'absolute',
      overflow: 'hidden',
      opacity: '0',
    });
  });

  it('should return empty string if children is null or undefined', () => {
    const { getByRole } = render(
      <Popup prefixCls="test" id="popup-empty">
        {null}
      </Popup>,
    );
    const tooltip = getByRole('tooltip');

    expect(tooltip.querySelector('div > div')).toBeNull();
  });

  it('should handle nested arrays correctly', () => {
    const { getByRole } = render(
      <Popup prefixCls="test" id="popup-nested">
        {[
          'First',
          ['Second', 'Third'],
          <span key="fourth">Fourth</span>,
        ]}
      </Popup>,
    );
    const tooltip = getByRole('tooltip');
    const hiddenTextContainer = tooltip.querySelector('div > div');

    // "First Second Third Fourth"
    expect(hiddenTextContainer.textContent).toBe('First Second Third Fourth');
  });

  it('should handle function returning an array', () => {
    const { getByRole } = render(
      <Popup prefixCls="test" id="popup-func-array">
        {() => ['Alpha', <span key="beta">Beta</span>]}
      </Popup>,
    );
    const tooltip = getByRole('tooltip');
    const hiddenTextContainer = tooltip.querySelector('div > div');

    // "Alpha Beta"
    expect(hiddenTextContainer.textContent).toBe('Alpha Beta');
  });

  it('should handle function returning undefined', () => {
    const { getByRole } = render(
      <Popup prefixCls="test" id="popup-func-undefined">
        {() => undefined}
      </Popup>,
    );
    const tooltip = getByRole('tooltip');

    expect(tooltip.querySelector('div > div')).toBeNull();
  });
});
