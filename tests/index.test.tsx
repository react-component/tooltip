import { act, fireEvent, render } from '@testing-library/react';
import React from 'react';
import Tooltip, { TooltipRef } from '../src';

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

  async function waitFakeTimers() {
    for (let i = 0; i < 100; i += 1) {
      await act(async () => {
        jest.advanceTimersByTime(100);
        await Promise.resolve();
      });
    }
  }

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
      const domRef = React.createRef<TooltipRef>();
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
    const destroyVerifyContent = async (wrapper: HTMLElement, content: string) => {
      fireEvent.click(wrapper.querySelector('.target'));
      await waitFakeTimers();

      expect(wrapper.querySelector('.x-content').textContent).toBe(content);

      fireEvent.click(wrapper.querySelector('.target'));
      await waitFakeTimers();
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

    it('should only remove tooltip when value is true', async () => {
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
      await destroyVerifyContent(container, 'Tooltip content');
      expect(document.querySelector('.x-content')).toBeFalsy();
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
          destroyTooltipOnHide
          trigger={['click']}
          placement="left"
          overlay={<strong className="x-content">Tooltip content</strong>}
        >
          <div className="target">Click this</div>
        </Tooltip>,
      );
      fireEvent.click(container.querySelector('.target'));
      expect(container.querySelector('.rc-tooltip-arrow')).toBeTruthy();
    });
    it('should show tooltip arrow when showArrow is true', () => {
      const { container } = render(
        <Tooltip
          destroyTooltipOnHide
          trigger={['click']}
          placement="left"
          overlay={<strong className="x-content">Tooltip content</strong>}
          showArrow
        >
          <div className="target">Click this</div>
        </Tooltip>,
      );
      fireEvent.click(container.querySelector('.target'));
      expect(container.querySelector('.rc-tooltip-arrow')).toBeTruthy();
    });
    it('should show tooltip arrow when showArrow is object', () => {
      const { container } = render(
        <Tooltip
          destroyTooltipOnHide
          trigger={['click']}
          placement="left"
          overlay={<strong className="x-content">Tooltip content</strong>}
          showArrow={{
            className: 'abc',
          }}
        >
          <div className="target">Click this</div>
        </Tooltip>,
      );
      fireEvent.click(container.querySelector('.target'));
      expect(container.querySelector('.rc-tooltip-arrow')).toBeTruthy();
      expect(container.querySelector('.rc-tooltip-arrow').classList.contains('abc')).toBeTruthy();
    });
    it('should hide tooltip arrow when showArrow is false', () => {
      const { container } = render(
        <Tooltip
          destroyTooltipOnHide
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
      expect(container.querySelector('.rc-tooltip-arrow')).toBeFalsy();
    });
  });

  it('visible', () => {
    const App = () => {
      const [open, setOpen] = React.useState(false);
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

  it('ref support nativeElement', () => {
    const nodeRef = React.createRef<TooltipRef>();

    const { container } = render(
      <Tooltip ref={nodeRef} overlay={<div />}>
        <button />
      </Tooltip>,
    );

    expect(nodeRef.current.nativeElement).toBe(container.querySelector('button'));
  });
  it('should apply custom styles to Tooltip', () => {
    const customClassNames = {
      body: 'custom-body',
      root: 'custom-root',
    };

    const customStyles = {
      body: { color: 'red' },
      root: { backgroundColor: 'blue' },
    };

    const { container } = render(
      <Tooltip classNames={customClassNames} overlay={<div />} styles={customStyles} visible>
        <button />
      </Tooltip>,
    );

    const tooltipElement = container.querySelector('.rc-tooltip') as HTMLElement;
    const tooltipBodyElement = container.querySelector('.rc-tooltip-inner') as HTMLElement;

    // 验证 classNames
    expect(tooltipElement.classList).toContain('custom-root');
    expect(tooltipBodyElement.classList).toContain('custom-body');

    // 验证 styles
    expect(tooltipElement.style.backgroundColor).toBe('blue');
    expect(tooltipBodyElement.style.color).toBe('red');
  });
});

describe('children validation', () => {
  it('should return non-React element children directly', () => {
    // Test string
    const { container: stringContainer } = render(
      // @ts-expect-error
      <Tooltip overlay="tooltip content">
        plain text
      </Tooltip>
    );
    expect(stringContainer.textContent).toBe('plain text');

    // Test number
    const { container: numberContainer } = render(
      <Tooltip overlay="tooltip content">
        {/* @ts-expect-error */}
        {42}
      </Tooltip>
    );
    expect(numberContainer.textContent).toBe('42');

    // Test null
    const { container: nullContainer } = render(
      <Tooltip overlay="tooltip content">
        {null}
      </Tooltip>
    );
    expect(nullContainer.textContent).toBe('');

    // Test undefined
    const { container: undefinedContainer } = render(
      <Tooltip overlay="tooltip content">
        {undefined}
      </Tooltip>
    );
    expect(undefinedContainer.textContent).toBe('');

    // Test array of strings
    const { container: arrayContainer } = render(
      <Tooltip overlay="tooltip content">
        {/* @ts-expect-error */}
        {['text1', 'text2']}
      </Tooltip>
    );
    expect(arrayContainer.textContent).toBe('text1text2');
  });

  it('should process valid React element normally', () => {
    const { container } = render(
      <Tooltip
        trigger={['click']}
        overlay="tooltip content"
      >
        <div className="target">Valid React Element</div>
      </Tooltip>
    );

    expect(container.querySelector('.target')).toBeTruthy();

    fireEvent.click(container.querySelector('.target'));
    expect(container.querySelector('.rc-tooltip')).toBeTruthy();
  });
});

