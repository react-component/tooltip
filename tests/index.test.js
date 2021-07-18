import React from 'react';
import { mount } from 'enzyme';
import Tooltip from '../src';

const verifyContent = (wrapper, content) => {
  expect(wrapper.find('.x-content').text()).toBe(content);
  expect(wrapper.find('Trigger').instance().getPopupDomNode()).toBeTruthy();
  wrapper.find('.target').simulate('click');
  expect(wrapper.find('.rc-tooltip').hostNodes().hasClass('rc-tooltip-hidden')).toBe(true);
};

describe('rc-tooltip', () => {
  window.requestAnimationFrame = window.setTimeout;
  window.cancelAnimationFrame = window.clearTimeout;

  describe('shows and hides itself on click', () => {
    it('using an element overlay', () => {
      const wrapper = mount(
        <Tooltip
          trigger={['click']}
          placement="left"
          overlay={<strong className="x-content">Tooltip content</strong>}
        >
          <div className="target">Click this</div>
        </Tooltip>,
      );
      wrapper.find('.target').simulate('click');
      verifyContent(wrapper, 'Tooltip content');
    });

    it('using a function overlay', () => {
      const wrapper = mount(
        <Tooltip
          trigger={['click']}
          placement="left"
          overlay={() => <strong className="x-content">Tooltip content</strong>}
        >
          <div className="target">Click this</div>
        </Tooltip>,
      );
      wrapper.find('.target').simulate('click');
      verifyContent(wrapper, 'Tooltip content');
    });

    // https://github.com/ant-design/ant-design/pull/23155
    it('using style inner style', () => {
      const wrapper = mount(
        <Tooltip
          trigger={['click']}
          placement="left"
          overlay={() => <strong className="x-content">Tooltip content</strong>}
          overlayInnerStyle={{ background: 'red' }}
        >
          <div className="target">Click this</div>
        </Tooltip>,
      );
      wrapper.find('.target').simulate('click');
      expect(wrapper.find('.rc-tooltip-inner').props().style).toEqual({ background: 'red' });
    });

    it('access of ref', () => {
      const domRef = React.createRef();
      mount(
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
    const destroyVerifyContent = (wrapper, content) => {
      wrapper.find('.target').simulate('click');
      expect(wrapper.find('.x-content').text()).toBe(content);
      expect(wrapper.find('Trigger').instance().getPopupDomNode()).toBeTruthy();
      wrapper.find('.target').simulate('click');
    };
    it('default value', () => {
      const wrapper = mount(
        <Tooltip
          trigger={['click']}
          placement="left"
          overlay={<strong className="x-content">Tooltip content</strong>}
        >
          <div className="target">Click this</div>
        </Tooltip>,
      );
      wrapper.find('.target').simulate('click');
      verifyContent(wrapper, 'Tooltip content');
    });
    it('should only remove tooltip when value is true', () => {
      const wrapper = mount(
        <Tooltip
          destroyTooltipOnHide
          trigger={['click']}
          placement="left"
          overlay={<strong className="x-content">Tooltip content</strong>}
        >
          <div className="target">Click this</div>
        </Tooltip>,
      );
      destroyVerifyContent(wrapper, 'Tooltip content');
      expect(wrapper.html()).toBe('<div class="target">Click this</div><div></div>');
    });
    it('should only remove tooltip when keepParent is true', () => {
      const wrapper = mount(
        <Tooltip
          destroyTooltipOnHide={{ keepParent: true }}
          trigger={['click']}
          placement="left"
          overlay={<strong className="x-content">Tooltip content</strong>}
        >
          <div className="target">Click this</div>
        </Tooltip>,
      );
      destroyVerifyContent(wrapper, 'Tooltip content');
      expect(wrapper.html()).toBe('<div class="target">Click this</div><div></div>');
    });
    it('should remove tooltip and container when keepParent is false', () => {
      const wrapper = mount(
        <Tooltip
          destroyTooltipOnHide={{ keepParent: false }}
          trigger={['click']}
          placement="left"
          overlay={<strong className="x-content">Tooltip content</strong>}
        >
          <div className="target">Click this</div>
        </Tooltip>,
      );
      destroyVerifyContent(wrapper, 'Tooltip content');
      expect(wrapper.html()).toBe('<div class="target">Click this</div>');
    });
  });

  // This is only test for motion pass to internal rc-trigger
  // It's safe to remove since meaningless to rc-tooltip if refactor
  it('should motion props work', () => {
    const wrapper = mount(
      <Tooltip overlay="Light" motion={{ motionName: 'bamboo-is-light' }}>
        <span>Bamboo</span>
      </Tooltip>,
    );

    expect(wrapper.find('Trigger').props().popupMotion).toEqual({ motionName: 'bamboo-is-light' });
  });

  it('zIndex', () => {
    jest.useFakeTimers();

    const wrapper = mount(
      <Tooltip trigger={['click']} zIndex={903} overlay="Bamboo">
        <div className="target">Light</div>
      </Tooltip>,
    );
    wrapper.find('.target').simulate('click');

    jest.runAllTimers();
    wrapper.update();

    expect(wrapper.find('div.rc-tooltip').prop('style')).toEqual(
      expect.objectContaining({
        zIndex: 903,
      }),
    );

    jest.useRealTimers();
  });
});
