import React from 'react';
import { mount } from 'enzyme';
import Tooltip from '../src';

const verifyContent = (wrapper, content) => {
  expect(wrapper.find('.x-content').text()).toBe(content);
  expect(
    wrapper
      .find('Trigger')
      .instance()
      .getPopupDomNode(),
  ).toBeTruthy();
  wrapper.find('.target').simulate('click');
  expect(
    wrapper
      .find('.rc-tooltip')
      .hostNodes()
      .hasClass('rc-tooltip-hidden'),
  ).toBe(true);
};

describe('rc-tooltip', () => {
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
});
