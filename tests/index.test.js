import React from 'react';
import { mount } from 'enzyme';
import Tooltip from '../src';

const verifyContent = (wrapper, content) => {
  expect(wrapper.find('.x-content').text()).toBe(content);
  expect(wrapper.instance().getPopupDomNode()).toBeTruthy();
  wrapper.find('.target').simulate('click');
  expect(wrapper.find('.rc-tooltip').hostNodes().hasClass('rc-tooltip-hidden')).toBe(true);
};

describe('rc-tooltip', () => {
  describe('show when set prop visible', () => {
    it('is boolean', () => {
      const wrapper = mount(
        <Tooltip
          visible
          overlay={<strong className="x-content">Tooltip content</strong>}
        >
          <div className="target">Click this</div>
        </Tooltip>
      );

      expect(wrapper.find('.x-content').text()).toBe('Tooltip content');
      expect(wrapper.instance().getPopupDomNode()).toBeTruthy();
    });

    it('is undefined', () => {
      const wrapper = mount(
        <Tooltip
          visible={undefined}
          trigger={['click']}
          placement="left"
          overlay={<strong className="x-content">Tooltip content</strong>}
        >
          <div className="target">Click this</div>
        </Tooltip>
      );
      wrapper.find('.target').simulate('click');
      verifyContent(wrapper, 'Tooltip content');
    });
  });


  describe('shows and hides itself on click', () => {
    it('using an element overlay', () => {
      const wrapper = mount(
        <Tooltip
          trigger={['click']}
          placement="left"
          overlay={<strong className="x-content">Tooltip content</strong>}
        >
          <div className="target">Click this</div>
        </Tooltip>
      );
      wrapper.find('.target').simulate('click');
      verifyContent(wrapper, 'Tooltip content');
    });

    it('using a function overlay', () => {
      const wrapper = mount(
        <Tooltip
          trigger={['click']}
          placement="left"
          overlay={() => (<strong className="x-content">Tooltip content</strong>)}
        >
          <div className="target">Click this</div>
        </Tooltip>
      );
      wrapper.find('.target').simulate('click');
      verifyContent(wrapper, 'Tooltip content');
    });
  });
});
