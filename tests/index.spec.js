'use strict';

var expect = require('expect.js');
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var Simulate = TestUtils.Simulate;
var $ = require('jquery');
window.$ = $;
require('../assets/bootstrap.css');
var Tooltip = require('../index');
var scryRenderedDOMComponentsWithClass = TestUtils.scryRenderedDOMComponentsWithClass;
require('./test.css');
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
    React.unmountComponentAtNode(div);
  });

  describe('trigger', ()=> {
    it('click works', (done)=> {
      var tooltip = React.render(<Tooltip trigger={['click']} placement="left" overlay={<strong className='x-content'>tooltip2</strong>}>
        <div className="target">click</div>
      </Tooltip>, div);
      var domNode = React.findDOMNode(tooltip).firstChild;
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

    it('hover works', (done)=> {
      var tooltip = React.render(<Tooltip trigger={['hover']} placement="left" overlay={<strong>tooltip</strong>}>
        <div className="target">click</div>
      </Tooltip>, div);
      var target = scryRenderedDOMComponentsWithClass(tooltip, 'rc-tooltip-wrap')[0];
      // can not simulate mouseenter
      target.props.onMouseEnter();
      async.series([timeout(20), (next)=> {
        var popupDomNode = tooltip.getPopupDomNode();
        expect(popupDomNode).to.be.ok();
        target.props.onMouseLeave();
        next();
      }, timeout(20), (next)=> {
        var popupDomNode = tooltip.getPopupDomNode();
        expect($(popupDomNode).css('display')).to.be('none');
        next();
      }], done);
    });
  });

  describe('placement', ()=> {
    it('left works', (done)=> {
      var tooltip = React.render(<Tooltip trigger={['click']} placement="left" overlay={<strong>tooltip</strong>}>
        <div className="target">click</div>
      </Tooltip>, div);
      var domNode = React.findDOMNode(tooltip).firstChild;
      Simulate.click(domNode);
      setTimeout(()=> {
        var popupDomNode =tooltip.getPopupDomNode();
        expect(popupDomNode).to.be.ok();
        var targetOffset = $(domNode).offset();
        var popupOffset = $(popupDomNode).offset();
        expect(popupOffset.left + $(popupDomNode).outerWidth()).to.be(targetOffset.left);
        Simulate.click(domNode);
        done();
      }, 20);
    });

    it('right works', (done)=> {
      var tooltip = React.render(<Tooltip trigger={['click']} placement="right" overlay={<strong>tooltip</strong>}>
        <div className="target">click</div>
      </Tooltip>, div);
      var domNode = React.findDOMNode(tooltip).firstChild;
      Simulate.click(domNode);
      setTimeout(()=> {
        var popupDomNode = tooltip.getPopupDomNode();
        expect(popupDomNode).to.be.ok();
        var targetOffset = $(domNode).offset();
        var popupOffset = $(popupDomNode).offset();
        console.log(popupOffset, targetOffset);
        expect(popupOffset.left).to.be(targetOffset.left + $(domNode).outerWidth());
        Simulate.click(domNode);
        done();
      }, 20);
    });

    it('bottom works', (done)=> {
      var tooltip = React.render(<Tooltip trigger={['click']} placement="bottom" overlay={<strong>tooltip</strong>}>
        <div className="target">click</div>
      </Tooltip>, div);
      var domNode = React.findDOMNode(tooltip).firstChild;
      Simulate.click(domNode);
      setTimeout(()=> {
        var popupDomNode = tooltip.getPopupDomNode();
        expect(popupDomNode).to.be.ok();
        var targetOffset = $(domNode).offset();
        var popupOffset = $(popupDomNode).offset();
        console.log(popupOffset, targetOffset);
        expect(popupOffset.top).to.be(targetOffset.top + $(domNode).outerHeight());
        Simulate.click(domNode);
        done();
      }, 20);
    });

    it('top works', (done)=> {
      var tooltip = React.render(<Tooltip trigger={['click']} placement="top" overlay={<strong>tooltip</strong>}>
        <div className="target">click</div>
      </Tooltip>, div);
      var domNode = React.findDOMNode(tooltip).firstChild;
      Simulate.click(domNode);
      setTimeout(()=> {
        var popupDomNode = tooltip.getPopupDomNode();
        expect(popupDomNode).to.be.ok();
        var targetOffset = $(domNode).offset();
        var popupOffset = $(popupDomNode).offset();
        console.log(popupOffset, targetOffset);
        expect(popupOffset.top).to.be(targetOffset.top - $(popupDomNode).outerHeight());
        Simulate.click(domNode);
        done();
      }, 20);
    });
  });

  if (window.TransitionEvent) {
    it('transitionName works', (done)=> {
      var tooltip = React.render(<Tooltip
        trigger={['click']}
        transitionName="fade"
        placement="top"
        overlay={<strong>tooltip</strong>}>
        <div className="target">click</div>
      </Tooltip>, div);
      var domNode = React.findDOMNode(tooltip).firstChild;
      Simulate.click(domNode);
      async.series([
          timeout(100),
          (next)=> {
            var popupDomNode = tooltip.getPopupDomNode();
            expect(popupDomNode).to.be.ok();
            expect($(popupDomNode).css('opacity')).not.to.be('1');
            next();
          },
          timeout(500),
          (next)=> {
            var popupDomNode = tooltip.getPopupDomNode();
            expect(popupDomNode).to.be.ok();
            expect($(popupDomNode).css('opacity')).to.be('1');
            Simulate.click(domNode);
            next();
          },
          timeout(100),
          (next)=> {
            var popupDomNode = tooltip.getPopupDomNode();
            expect(popupDomNode).to.be.ok();

            expect($(popupDomNode).css('opacity')).not.to.be('1');
            next();
          },
          timeout(500),
          (next)=> {
            var popupDomNode = tooltip.getPopupDomNode();
            expect($(popupDomNode).css('display')).to.be('none');
            next();
          }],
        done);
    });
  }
});
