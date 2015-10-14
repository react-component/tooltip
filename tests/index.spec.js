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
require('./test.less');
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
    it('click works', (done)=> {
      var tooltip = ReactDOM.render(<Tooltip trigger={['click']} placement="left"
                                          overlay={<strong className='x-content'>tooltip2</strong>}>
        <div className="target">click</div>
      </Tooltip>, div);
      var domNode = ReactDOM.findDOMNode(tooltip).firstChild;
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
      var tooltip = ReactDOM.render(<Tooltip trigger={['hover']}
                                          placement="left"
                                          overlay={<strong>tooltip</strong>}>
        <div className="target">click</div>
      </Tooltip>, div);
      var target = scryRenderedDOMComponentsWithClass(tooltip, 'target')[0];
      // can not simulate mouseenter
      target.props.onMouseEnter();
      async.series([timeout(200), (next)=> {
        var popupDomNode = tooltip.getPopupDomNode();
        expect(popupDomNode).to.be.ok();
        target.props.onMouseLeave();
        next();
      }, timeout(200), (next)=> {
        var popupDomNode = tooltip.getPopupDomNode();
        expect($(popupDomNode).css('display')).to.be('none');
        next();
      }], done);
    });
  });

  describe('placement', ()=> {
    it('left works', (done)=> {
      var tooltip = ReactDOM.render(<Tooltip trigger={['click']} placement="left"
                                          overlayStyle={{width:50}}
                                          overlay={<div>tooltip</div>}>
        <div className="target">click</div>
      </Tooltip>, div);
      var domNode = ReactDOM.findDOMNode(tooltip).firstChild;
      Simulate.click(domNode);
      setTimeout(()=> {
        var popupDomNode = tooltip.getPopupDomNode();
        expect(popupDomNode).to.be.ok();
        var targetOffset = $(domNode).offset();
        var popupOffset = $(popupDomNode).offset();
        expect(popupOffset.left + $(popupDomNode).outerWidth()).to.be(targetOffset.left-3);
        Simulate.click(domNode);
        done();
      }, 20);
    });

    it('auto adjust left works', (done)=> {
      var tooltip = ReactDOM.render(<Tooltip trigger={['click']} placement="left"
                                          overlayStyle={{width:400}}
                                          overlay={<div>tooltip</div>}>
        <div className="target">click</div>
      </Tooltip>, div);
      var domNode = ReactDOM.findDOMNode(tooltip).firstChild;
      Simulate.click(domNode);
      setTimeout(()=> {
        var popupDomNode = tooltip.getPopupDomNode();
        expect(popupDomNode).to.be.ok();
        var targetOffset = $(domNode).offset();
        var popupOffset = $(popupDomNode).offset();
        // offset is 3
        if(!window.callPhantom) {
          expect(popupOffset.left).to.be(targetOffset.left + $(domNode).outerWidth() + 3);
        }
        done();
      }, 100);
    });

    it('right works', (done)=> {
      var tooltip = ReactDOM.render(<Tooltip trigger={['click']} placement="right" overlay={<strong>tooltip</strong>}>
        <div className="target">click</div>
      </Tooltip>, div);
      var domNode = ReactDOM.findDOMNode(tooltip).firstChild;
      Simulate.click(domNode);
      setTimeout(()=> {
        var popupDomNode = tooltip.getPopupDomNode();
        expect(popupDomNode).to.be.ok();
        var targetOffset = $(domNode).offset();
        var popupOffset = $(popupDomNode).offset();
        console.log(popupOffset, targetOffset);
        expect(popupOffset.left).to.be(targetOffset.left + $(domNode).outerWidth()+3);
        Simulate.click(domNode);
        done();
      }, 20);
    });

    it('bottom works', (done)=> {
      var tooltip = ReactDOM.render(<Tooltip trigger={['click']} placement="bottom" overlay={<strong>tooltip</strong>}>
        <div className="target">click</div>
      </Tooltip>, div);
      var domNode = ReactDOM.findDOMNode(tooltip).firstChild;
      Simulate.click(domNode);
      setTimeout(()=> {
        var popupDomNode = tooltip.getPopupDomNode();
        expect(popupDomNode).to.be.ok();
        var targetOffset = $(domNode).offset();
        var popupOffset = $(popupDomNode).offset();
        console.log(popupOffset, targetOffset);
        expect(popupOffset.top).to.be(targetOffset.top + $(domNode).outerHeight()+3);
        Simulate.click(domNode);
        done();
      }, 20);
    });

    it('bottomRight works', (done)=> {
      var tooltip = ReactDOM.render(<Tooltip trigger={['click']} placement="bottomRight"
                                          overlay={<strong>tooltip</strong>}>
        <div className="target">click</div>
      </Tooltip>, div);
      var domNode = ReactDOM.findDOMNode(tooltip).firstChild;
      Simulate.click(domNode);
      setTimeout(()=> {
        var popupDomNode = tooltip.getPopupDomNode();
        expect(popupDomNode).to.be.ok();
        var targetOffset = $(domNode).offset();
        var popupOffset = $(popupDomNode).offset();
        var arrowOffset = $(popupDomNode).find('.rc-tooltip-arrow').offset();
        console.log(popupOffset, targetOffset);
        expect(popupOffset.top).to.be(targetOffset.top + $(domNode).outerHeight()+3);
        expect(arrowOffset.left).to.be(180);
        Simulate.click(domNode);
        done();
      }, 20);
    });

    it('bottomLeft works', (done)=> {
      var tooltip = ReactDOM.render(<Tooltip trigger={['click']} placement="bottomLeft" overlay={<strong>tooltip</strong>}>
        <div className="target">click</div>
      </Tooltip>, div);
      var domNode = ReactDOM.findDOMNode(tooltip).firstChild;
      Simulate.click(domNode);
      setTimeout(()=> {
        var popupDomNode = tooltip.getPopupDomNode();
        expect(popupDomNode).to.be.ok();
        var targetOffset = $(domNode).offset();
        var popupOffset = $(popupDomNode).offset();
        var arrowOffset = $(popupDomNode).find('.rc-tooltip-arrow').offset();
        console.log(popupOffset, targetOffset);
        expect(popupOffset.top).to.be(targetOffset.top + $(domNode).outerHeight()+3);
        expect(arrowOffset.left).to.be(110);
        Simulate.click(domNode);
        done();
      }, 20);
    });

    it('top works', (done)=> {
      var tooltip = ReactDOM.render(<Tooltip trigger={['click']} placement="top" overlay={<strong>tooltip</strong>}>
        <div className="target">click</div>
      </Tooltip>, div);
      var domNode = ReactDOM.findDOMNode(tooltip).firstChild;
      Simulate.click(domNode);
      setTimeout(()=> {
        var popupDomNode = tooltip.getPopupDomNode();
        expect(popupDomNode).to.be.ok();
        var targetOffset = $(domNode).offset();
        var popupOffset = $(popupDomNode).offset();
        console.log(popupOffset, targetOffset);
        expect(popupOffset.top).to.be(targetOffset.top - $(popupDomNode).outerHeight()-3);
        Simulate.click(domNode);
        done();
      }, 20);
    });

    it('topLeft works', (done)=> {
      var tooltip = ReactDOM.render(<Tooltip trigger={['click']} placement="topLeft" overlay={<strong>tooltip</strong>}>
        <div className="target">click</div>
      </Tooltip>, div);
      var domNode = ReactDOM.findDOMNode(tooltip).firstChild;
      Simulate.click(domNode);
      setTimeout(()=> {
        var popupDomNode = tooltip.getPopupDomNode();
        expect(popupDomNode).to.be.ok();
        var targetOffset = $(domNode).offset();
        var popupOffset = $(popupDomNode).offset();
        var arrowOffset = $(popupDomNode).find('.rc-tooltip-arrow').offset();
        console.log(popupOffset, targetOffset);
        expect(popupOffset.top).to.be(targetOffset.top - $(popupDomNode).outerHeight()-3);
        expect(popupOffset.left).to.be(targetOffset.left);
        expect(arrowOffset.left).to.be(110);
        Simulate.click(domNode);
        done();
      }, 20);
    });

    it('topRight works', (done)=> {
      var tooltip = ReactDOM.render(<Tooltip trigger={['click']} placement="topRight" overlay={<strong>tooltip</strong>}>
        <div className="target">click</div>
      </Tooltip>, div);
      var domNode = ReactDOM.findDOMNode(tooltip).firstChild;
      Simulate.click(domNode);
      setTimeout(()=> {
        var popupDomNode = tooltip.getPopupDomNode();
        expect(popupDomNode).to.be.ok();
        var targetOffset = $(domNode).offset();
        var popupOffset = $(popupDomNode).offset();
        var arrowOffset = $(popupDomNode).find('.rc-tooltip-arrow').offset();
        console.log(popupOffset, targetOffset);
        expect(popupOffset.top).to.be(targetOffset.top - $(popupDomNode).outerHeight()-3);
        expect(popupOffset.left).to.be(targetOffset.left);
        expect(arrowOffset.left).to.be(180);
        Simulate.click(domNode);
        done();
      }, 20);
    });
  });

  if (window.TransitionEvent) {
    it('transitionName works', (done)=> {
      var tooltip = ReactDOM.render(<Tooltip
        trigger={['click']}
        transitionName="fade"
        placement="top"
        overlay={<strong>tooltip</strong>}>
        <div className="target">click</div>
      </Tooltip>, div);
      var domNode = ReactDOM.findDOMNode(tooltip).firstChild;
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
