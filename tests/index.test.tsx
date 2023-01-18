import React, { useState } from 'react';
import { render, fireEvent } from '@testing-library/react';
import Tooltip from '../src';

const verifyContent = (wrapper: HTMLElement, content: string) => {
  expect(wrapper.querySelector('.x-content').textContent).toBe(content);
  fireEvent.click(wrapper.querySelector('.target'));
  expect(wrapper.querySelector('.rc-tooltip').classList.contains('rc-tooltip-hidden')).toBe(true);
};

describe('rc-tooltip', () => {
  window.requestAnimationFrame = window.setTimeout;
  window.cancelAnimationFrame = window.clearTimeout;
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  describe('shows and hides itself on click', () => {
    it('using an element overlay', () => {
      const { container } = render(
        <Tooltip
          trigger={['click']}
          placement="left"
          overlay={<strong className="x-content">Tooltip content</strong>}
        >
          <div className="target">Click this</div>
        </Tooltip>,
      );
      fireEvent.click(container.querySelector('.target'));
      verifyContent(container, 'Tooltip content');
    });

    it('using a function overlay', () => {
      const { container } = render(
        <Tooltip
          trigger={['click']}
          placement="left"
          overlay={() => <strong className="x-content">Tooltip content</strong>}
        >
          <div className="target">Click this</div>
        </Tooltip>,
      );
      fireEvent.click(container.querySelector('.target'));
      verifyContent(container, 'Tooltip content');
    });

    // https://github.com/ant-design/ant-design/pull/23155
    it('using style inner style', () => {
      const { container } = render(
        <Tooltip
          trigger={['click']}
          placement="left"
          overlay={() => <strong className="x-content">Tooltip content</strong>}
          overlayInnerStyle={{ background: 'red' }}
        >
          <div className="target">Click this</div>
        </Tooltip>,
      );
      fireEvent.click(container.querySelector('.target'));
      expect(
        (container.querySelector('.rc-tooltip-inner') as HTMLElement).style.background,
      ).toEqual('red');
    });

    it('access of ref', () => {
      const domRef = React.createRef();
      render(
        <Tooltip
          trigger={['click']}
          placement="left"
          overlay={() => <strong className="x-content">Tooltip content</strong>}
          ref={domRef}
        >
          <div className="target">Click this</div>
        </Tooltip>,
      );
      expect(domRef.current).toBeTruthy();
    });
  });
  describe('destroyTooltipOnHide', () => {
    const destroyVerifyContent = (wrapper: HTMLElement, content: string) => {
      fireEvent.click(wrapper.querySelector('.target'));
      expect(wrapper.querySelector('.x-content').textContent).toBe(content);
      fireEvent.click(wrapper.querySelector('.target'));
    };
    it('default value', () => {
      const { container } = render(
        <Tooltip
          trigger={['click']}
          placement="left"
          overlay={<strong className="x-content">Tooltip content</strong>}
        >
          <div className="target">Click this</div>
        </Tooltip>,
      );
      fireEvent.click(container.querySelector('.target'));
      verifyContent(container, 'Tooltip content');
    });
    it('should only remove tooltip when value is true', () => {
      const { container } = render(
        <Tooltip
          destroyTooltipOnHide
          trigger={['click']}
          placement="left"
          overlay={<strong className="x-content">Tooltip content</strong>}
        >
          <div className="target">Click this</div>
        </Tooltip>,
      );
      destroyVerifyContent(container, 'Tooltip content');
      expect(container.innerHTML).toBe('<div class="target">Click this</div><div></div>');
    });
    it('should only remove tooltip when keepParent is true', () => {
      const { container } = render(
        <Tooltip
          destroyTooltipOnHide={{ keepParent: true }}
          trigger={['click']}
          placement="left"
          overlay={<strong className="x-content">Tooltip content</strong>}
        >
          <div className="target">Click this</div>
        </Tooltip>,
      );
      destroyVerifyContent(container, 'Tooltip content');
      expect(container.innerHTML).toBe('<div class="target">Click this</div><div></div>');
    });
    it('should remove tooltip and container when keepParent is false', () => {
      const { container } = render(
        <Tooltip
          destroyTooltipOnHide={{ keepParent: false }}
          trigger={['click']}
          placement="left"
          overlay={<strong className="x-content">Tooltip content</strong>}
        >
          <div className="target">Click this</div>
        </Tooltip>,
      );
      destroyVerifyContent(container, 'Tooltip content');
      expect(container.innerHTML).toBe('<div class="target">Click this</div>');
    });
  });

  it('zIndex', () => {
    jest.useFakeTimers();

    const { container } = render(
      <Tooltip trigger={['click']} zIndex={903} overlay="Bamboo">
        <div className="target">Light</div>
      </Tooltip>,
    );
    fireEvent.click(container.querySelector('.target'));

    jest.runAllTimers();

    expect((container.querySelector('div.rc-tooltip') as HTMLElement).style.zIndex).toBe('903');

    jest.useRealTimers();
  });

  describe('showArrow', () => {
    it('should show tooltip arrow default', () => {
      const { container } = render(
        <Tooltip
          destroyTooltipOnHide={{ keepParent: false }}
          trigger={['click']}
          placement="left"
          overlay={<strong className="x-content">Tooltip content</strong>}
        >
          <div className="target">Click this</div>
        </Tooltip>,
      );
      fireEvent.click(container.querySelector('.target'));
      expect(container.querySelector('.rc-tooltip-content').outerHTML).toBe(
        '<div class="rc-tooltip-content"><div class="rc-tooltip-arrow"></div><div class="rc-tooltip-inner" role="tooltip"><strong class="x-content">Tooltip content</strong></div></div>',
      );
    });
    it('should show tooltip arrow when showArrow is true', () => {
      const { container } = render(
        <Tooltip
          destroyTooltipOnHide={{ keepParent: false }}
          trigger={['click']}
          placement="left"
          overlay={<strong className="x-content">Tooltip content</strong>}
          showArrow
        >
          <div className="target">Click this</div>
        </Tooltip>,
      );
      fireEvent.click(container.querySelector('.target'));
      expect(container.querySelector('.rc-tooltip-content').outerHTML).toBe(
        '<div class="rc-tooltip-content"><div class="rc-tooltip-arrow"></div><div class="rc-tooltip-inner" role="tooltip"><strong class="x-content">Tooltip content</strong></div></div>',
      );
    });
    it('should hide tooltip arrow when showArrow is false', () => {
      const { container } = render(
        <Tooltip
          destroyTooltipOnHide={{ keepParent: false }}
          trigger={['click']}
          placement="left"
          overlay={<strong className="x-content">Tooltip content</strong>}
          showArrow={false}
        >
          <div className="target">Click this</div>
        </Tooltip>,
      );
      fireEvent.click(container.querySelector('.target'));
      expect(container.querySelector('.rc-tooltip').classList).not.toContain(
        'rc-tooltip-show-arrow',
      );
      expect(container.querySelector('.rc-tooltip-content').outerHTML).toBe(
        '<div class="rc-tooltip-content"><div class="rc-tooltip-inner" role="tooltip"><strong class="x-content">Tooltip content</strong></div></div>',
      );
    });
  });

  it('visible', () => {
    const App = () => {
      const [open, setOpen] = useState(false);
      return (
        <Tooltip overlay={<strong className="x-content">Tooltip content</strong>} visible={open}>
          <div
            className="target"
            onClick={() => {
              setOpen(true);
            }}
          />
        </Tooltip>
      );
    };
    const { container } = render(<App />);

    expect(container.querySelector('.x-content')).toBeFalsy();

    fireEvent.click(container.querySelector('.target'));
    expect(container.querySelector('.x-content')).toBeTruthy();
  });
});
