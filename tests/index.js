import '../assets/bootstrap.less';
import expect from 'expect.js';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jquery';
import Tooltip from '../index';
import async from 'async';
window.$ = $;
const Simulate = TestUtils.Simulate;

function timeout(ms) {
  return (done) => {
    setTimeout(done, ms);
  };
}

describe('rc-tooltip', function run() {
  this.timeout(40000);
  const div = document.createElement('div');
  div.style.margin = '100px';
  document.body.insertBefore(div, document.body.firstChild);

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(div);
  });

  describe('trigger', () => {
    it('works', (done) => {
      const tooltip = ReactDOM.render(
        <Tooltip
          trigger={['click']}
          placement="left"
          overlay={<strong className="x-content">tooltip2</strong>}
        >
          <div className="target">click</div>
        </Tooltip>, div);
      const domNode = ReactDOM.findDOMNode(tooltip);
      Simulate.click(domNode);
      async.series([timeout(20), (next) => {
        const popupDomNode = tooltip.getPopupDomNode();
        expect($(popupDomNode).find('.x-content').html()).to.be('tooltip2');
        expect(popupDomNode).to.be.ok();
        Simulate.click(domNode);
        next();
      }, timeout(20), (next) => {
        const popupDomNode = tooltip.getPopupDomNode();
        expect($(popupDomNode).css('display')).to.be('none');
        next();
      }], done);
    });
  });
  describe('trigger-functon', () => {
    it('works with a function overlay', (done) => {
      const tooltip = ReactDOM.render(
        <Tooltip
          trigger={['click']}
          placement="left"
          overlay={() => (<strong className="x-content">tooltip</strong>)}
        >
          <div className="target">click</div>
        </Tooltip>, div);
      const domNode = ReactDOM.findDOMNode(tooltip);
      Simulate.click(domNode);
      async.series([timeout(20), (next) => {
        const popupDomNode = tooltip.getPopupDomNode();
        expect($(popupDomNode).find('.x-content').html()).to.be('tooltip');
        expect(popupDomNode).to.be.ok();
        Simulate.click(domNode);
        next();
      }, timeout(20), (next) => {
        const popupDomNode = tooltip.getPopupDomNode();
        expect($(popupDomNode).css('display')).to.be('none');
        next();
      }], done);
    });
  });
});
