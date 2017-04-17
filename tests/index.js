import '../assets/bootstrap.less';
import expect from 'expect.js';
import React from 'react';
import ReactDOM from 'react-dom';
import { Simulate } from 'react-dom/test-utils';
import $ from 'jquery';
import Tooltip from '../index';
import async from 'async';
window.$ = $;

const timeout = (ms) => {
  return (done) => {
    setTimeout(done, ms);
  };
};

const expectComponentPopupToBeOk = (component) => {
  const popupDomNode = component.getPopupDomNode();
  expect(popupDomNode).to.be.ok();
};

const expectPopupToHaveContent = (component, content) => {
  const popupDomNode = component.getPopupDomNode();
  expect($(popupDomNode).find('.x-content').html()).to.be(content);
  expect(popupDomNode).to.be.ok();
};

const expectPopupToBeHidden = (component) => {
  const popupDomNode = component.getPopupDomNode();
  expect($(popupDomNode).css('display')).to.be('none');
};

const verifyContent = (component, content, done) => {
  const componentDomNode = ReactDOM.findDOMNode(component);
  async.series([timeout(20), (next) => {
    expectPopupToHaveContent(component, content);
    expectComponentPopupToBeOk(component);
    Simulate.click(componentDomNode);
    next();
  }, timeout(20), (next) => {
    expectPopupToBeHidden(component);
    next();
  }], done);
};

describe('rc-tooltip', () => {
  let div;
  before(() => {
    timeout(40000);
    div = document.createElement('div');
    div.style.margin = '100px';
    document.body.insertBefore(div, document.body.firstChild);
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(div);
  });

  describe('shows and hides itself on click', () => {
    it('using an element overlay', (done) => {
      const tooltip = ReactDOM.render(
        <Tooltip
          trigger={['click']}
          placement="left"
          overlay={<strong className="x-content">Tooltip content</strong>}
        >
          <div className="target">Click this</div>
        </Tooltip>, div);
      const componentDomNode = ReactDOM.findDOMNode(tooltip);
      Simulate.click(componentDomNode);
      verifyContent(tooltip, 'Tooltip content', done);
    });

    it('using a function overlay', (done) => {
      const tooltip = ReactDOM.render(
        <Tooltip
          trigger={['click']}
          placement="left"
          overlay={() => (<strong className="x-content">Tooltip content</strong>)}
        >
          <div className="target">Click this</div>
        </Tooltip>, div);
      const componentDomNode = ReactDOM.findDOMNode(tooltip);
      Simulate.click(componentDomNode);
      verifyContent(tooltip, 'Tooltip content', done);
    });
  });
});
