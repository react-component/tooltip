import { UniqueProvider } from '@rc-component/trigger';
import { act, fireEvent, render } from '@testing-library/react';
import React from 'react';
import Tooltip, { type TooltipRef } from '../src';

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

  describe('destroyOnHidden', () => {
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
          destroyOnHidden
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
          destroyOnHidden
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
          destroyOnHidden
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
          destroyOnHidden
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
          destroyOnHidden
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

    it('should merge arrow className from showArrow and classNames.arrow', () => {
      const { container } = render(
        <Tooltip
          trigger={['click']}
          placement="left"
          overlay={<strong className="x-content">Tooltip content</strong>}
          showArrow={{
            className: 'from-showArrow',
          }}
          classNames={{
            arrow: 'from-classNames',
          }}
          visible
        >
          <div className="target">Click this</div>
        </Tooltip>,
      );

      const arrowElement = container.querySelector('.rc-tooltip-arrow');
      expect(arrowElement).toHaveClass('from-showArrow');
      expect(arrowElement).toHaveClass('from-classNames');
    });

    it('should use arrowContent from showArrow object', () => {
      const { container } = render(
        <Tooltip
          trigger={['click']}
          placement="left"
          overlay={<strong className="x-content">Tooltip content</strong>}
          showArrow={{
            content: <span className="custom-arrow-content">↑</span>,
          }}
          visible
        >
          <div className="target">Click this</div>
        </Tooltip>,
      );

      expect(container.querySelector('.custom-arrow-content')).toBeTruthy();
      expect(container.querySelector('.custom-arrow-content').textContent).toBe('↑');
    });

    it('should use arrowContent prop when showArrow has no content', () => {
      const { container } = render(
        <Tooltip
          trigger={['click']}
          placement="left"
          overlay={<strong className="x-content">Tooltip content</strong>}
          showArrow
          arrowContent={<span className="prop-arrow-content">→</span>}
          visible
        >
          <div className="target">Click this</div>
        </Tooltip>,
      );

      expect(container.querySelector('.prop-arrow-content')).toBeTruthy();
      expect(container.querySelector('.prop-arrow-content').textContent).toBe('→');
    });

    it('should prioritize showArrow.content over arrowContent prop', () => {
      const { container } = render(
        <Tooltip
          trigger={['click']}
          placement="left"
          overlay={<strong className="x-content">Tooltip content</strong>}
          showArrow={{
            content: <span className="showArrow-content">↑</span>,
          }}
          arrowContent={<span className="prop-content">→</span>}
          visible
        >
          <div className="target">Click this</div>
        </Tooltip>,
      );

      expect(container.querySelector('.showArrow-content')).toBeTruthy();
      expect(container.querySelector('.prop-content')).toBeFalsy();
      expect(container.querySelector('.showArrow-content').textContent).toBe('↑');
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
  describe('classNames and styles', () => {
    it('should apply custom classNames to all semantic elements', () => {
      const customClassNames = {
        root: 'custom-root',
        container: 'custom-container',
        arrow: 'custom-arrow',
      };

      const { container } = render(
        <Tooltip
          classNames={customClassNames}
          overlay={<div>Tooltip content</div>}
          visible
          showArrow
        >
          <button>Trigger</button>
        </Tooltip>,
      );

      const tooltipElement = container.querySelector('.rc-tooltip') as HTMLElement;
      const tooltipBodyElement = container.querySelector('.rc-tooltip-container') as HTMLElement;
      const tooltipArrowElement = container.querySelector('.rc-tooltip-arrow') as HTMLElement;

      // Verify classNames
      expect(tooltipElement).toHaveClass('custom-root');
      expect(tooltipBodyElement).toHaveClass('custom-container');
      expect(tooltipArrowElement).toHaveClass('custom-arrow');
    });

    it('should apply custom styles to all semantic elements', () => {
      const customStyles = {
        root: { backgroundColor: 'blue', zIndex: 1000 },
        container: { color: 'red', fontSize: '14px' },
        arrow: { borderColor: 'green' },
      };

      const { container } = render(
        <Tooltip styles={customStyles} overlay={<div>Tooltip content</div>} visible showArrow>
          <button>Trigger</button>
        </Tooltip>,
      );

      const tooltipElement = container.querySelector('.rc-tooltip') as HTMLElement;
      const tooltipBodyElement = container.querySelector('.rc-tooltip-container') as HTMLElement;
      const tooltipArrowElement = container.querySelector('.rc-tooltip-arrow') as HTMLElement;

      // Verify styles
      expect(tooltipElement).toHaveStyle({ backgroundColor: 'blue', zIndex: '1000' });
      expect(tooltipBodyElement).toHaveStyle({ color: 'red', fontSize: '14px' });
      expect(tooltipArrowElement).toHaveStyle({ borderColor: 'green' });
    });

    it('should apply both classNames and styles simultaneously', () => {
      const customClassNames = {
        root: 'custom-root',
        container: 'custom-container',
        arrow: 'custom-arrow',
      };

      const customStyles = {
        root: { backgroundColor: 'blue' },
        container: { color: 'red' },
        arrow: { borderColor: 'green' },
      };

      const { container } = render(
        <Tooltip
          classNames={customClassNames}
          styles={customStyles}
          overlay={<div>Tooltip content</div>}
          visible
          showArrow
        >
          <button>Trigger</button>
        </Tooltip>,
      );

      const tooltipElement = container.querySelector('.rc-tooltip') as HTMLElement;
      const tooltipBodyElement = container.querySelector('.rc-tooltip-container') as HTMLElement;
      const tooltipArrowElement = container.querySelector('.rc-tooltip-arrow') as HTMLElement;

      // Verify that classNames and styles work simultaneously
      expect(tooltipElement).toHaveClass('custom-root');
      expect(tooltipElement).toHaveStyle({ backgroundColor: 'blue' });
      expect(tooltipBodyElement).toHaveClass('custom-container');
      expect(tooltipBodyElement).toHaveStyle({ color: 'red' });
      expect(tooltipArrowElement).toHaveClass('custom-arrow');
      expect(tooltipArrowElement).toHaveStyle({ borderColor: 'green' });
    });

    it('should work with partial classNames and styles', () => {
      const partialClassNames = {
        container: 'custom-container',
      };

      const partialStyles = {
        root: { backgroundColor: 'blue' },
      };

      const { container } = render(
        <Tooltip
          classNames={partialClassNames}
          styles={partialStyles}
          overlay={<div>Tooltip content</div>}
          visible
          showArrow
        >
          <button>Trigger</button>
        </Tooltip>,
      );

      const tooltipElement = container.querySelector('.rc-tooltip') as HTMLElement;
      const tooltipBodyElement = container.querySelector('.rc-tooltip-container') as HTMLElement;
      const tooltipArrowElement = container.querySelector('.rc-tooltip-arrow') as HTMLElement;

      // Verify partial configuration takes effect
      expect(tooltipElement).toHaveStyle({ backgroundColor: 'blue' });
      expect(tooltipBodyElement).toHaveClass('custom-container');

      // Verify that unconfigured elements don't have custom class names or styles
      expect(tooltipElement).not.toHaveClass('custom-root');
      expect(tooltipArrowElement).not.toHaveClass('custom-arrow');
    });

    it('should pass uniqueContainer to Trigger as uniqueContainerClassName and uniqueContainerStyle', () => {
      // Test that the component renders without errors when uniqueContainer is provided
      expect(() => {
        render(
          <UniqueProvider>
            <Tooltip
              classNames={{ uniqueContainer: 'unique-container-class' }}
              styles={{ uniqueContainer: { color: 'red' } }}
              overlay={<div>Tooltip content</div>}
              visible
              unique
            >
              <button>Trigger</button>
            </Tooltip>
          </UniqueProvider>,
        );
      }).not.toThrow();

      // Test that uniqueContainer doesn't break the normal tooltip functionality
      // Note: The actual DOM behavior depends on @rc-component/trigger implementation
    });

    it('should not break when showArrow is false', () => {
      const customClassNames = {
        root: 'custom-root',
        container: 'custom-container',
        arrow: 'custom-arrow', // 即使配置了arrow，但不显示箭头时不应该报错
      };

      const customStyles = {
        root: { backgroundColor: 'blue' },
        container: { color: 'red' },
        arrow: { borderColor: 'green' },
      };

      const { container } = render(
        <Tooltip
          classNames={customClassNames}
          styles={customStyles}
          overlay={<div>Tooltip content</div>}
          visible
          showArrow={false}
        >
          <button>Trigger</button>
        </Tooltip>,
      );

      const tooltipElement = container.querySelector('.rc-tooltip') as HTMLElement;
      const tooltipBodyElement = container.querySelector('.rc-tooltip-container') as HTMLElement;
      const tooltipArrowElement = container.querySelector('.rc-tooltip-arrow');

      // Verify when arrow is not shown
      expect(tooltipArrowElement).toBeFalsy();

      // Other styles still take effect
      expect(tooltipElement).toHaveClass('custom-root');
      expect(tooltipElement).toHaveStyle({ backgroundColor: 'blue' });
      expect(tooltipBodyElement).toHaveClass('custom-container');
      expect(tooltipBodyElement).toHaveStyle({ color: 'red' });
    });
  });

  describe('children handling', () => {
    it('should pass aria-describedby to child element when overlay exists', () => {
      const { container } = render(
        <Tooltip id="test-id" overlay="tooltip content">
          <button>Click me</button>
        </Tooltip>,
      );

      expect(container.querySelector('button')).toHaveAttribute('aria-describedby', 'test-id');
    });

    it('should not pass aria-describedby when overlay is empty', () => {
      const { container } = render(
        <Tooltip id="test-id" overlay={null}>
          <button>Click me</button>
        </Tooltip>,
      );

      expect(container.querySelector('button')).not.toHaveAttribute('aria-describedby');
    });

    it('should preserve original props of children', () => {
      const onMouseEnter = jest.fn();

      const { container } = render(
        <Tooltip overlay="tip">
          <button className="custom-btn" onMouseEnter={onMouseEnter}>
            Click me
          </button>
        </Tooltip>,
      );

      const btn = container.querySelector('button');
      expect(btn).toHaveClass('custom-btn');

      // Trigger original event handler
      fireEvent.mouseEnter(btn);
      expect(onMouseEnter).toHaveBeenCalled();
    });

    it('should throw error when multiple children provided', () => {
      const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

      expect(() => {
        render(
          // @ts-expect-error
          <Tooltip overlay="tip">
            <button>First</button>
            <button>Second</button>
          </Tooltip>,
        );
      }).toThrow();

      errorSpy.mockRestore();
    });
  });
});
