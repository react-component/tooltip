'use strict';

var expect = require('expect.js');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var Simulate = TestUtils.Simulate;
var $ = require('jquery');
window.$ = $;
require('../assets/bootstrap.less');
var Tooltip = require('../index');
var scryRenderedDOMComponentsWithClass = TestUtils.scryRenderedDOMComponentsWithClass;
var async = require('async');

function timeout(ms) {
  return (done)=> {
    setTimeout(done, ms);
  }
}

describe('rc-tooltip', function () {
  this.timeout(40000);
  var div = document.createElement('div');
  div.style.margin = '100px';
  document.body.insertBefore(div, document.body.firstChild);

  afterEach(()=> {
    ReactDOM.unmountComponentAtNode(div);
  });

  describe('trigger', ()=> {
    it('works', (done)=> {
      var tooltip = ReactDOM.render(<Tooltip trigger={['click']}
                                             placement="left"
                                             overlay={<strong className='x-content'>tooltip2</strong>}>
        <div className="target">click</div>
      </Tooltip>, div);
      var domNode = ReactDOM.findDOMNode(tooltip);
      Simulate.click(domNode);
      async.series([timeout(20), (next)=> {
        var popupDomNode = tooltip.getPopupDomNode();
        expect($(popupDomNode).find('.x-content').html()).to.be('tooltip2');
        expect(popupDomNode).to.be.ok();
        Simulate.click(domNode);
        next();
      }, timeout(20), (next)=> {
        var popupDomNode = tooltip.getPopupDomNode();
        expect($(popupDomNode).css('display')).to.be('none');
        next();
      }], done);
    });
  });
});
