'use strict';

/**
 * @author yiminghe@gmail.com
 */
var React = require('react');
var rcUtil = require('rc-util');
var contains = rcUtil.Dom.contains;
var createChainedFunction = rcUtil.createChainedFunction;
var Popup = require('./Popup');

class Tooltip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: !!props.defaultVisible
    };
    if ('visible' in props) {
      this.state.visible = !!props.visible;
    }
    ['toggle', 'show', 'hide', 'handleDocumentClick'].forEach((m)=> {
      this[m] = this[m].bind(this);
    });
  }

  componentWillReceiveProps(nextProps) {
    if ('visible' in nextProps) {
      this.setState({
        visible: !!nextProps.visible
      });
    }
  }

  handleDocumentClick(e) {
    var targetDomNode = React.findDOMNode(this).firstChild;
    var popupDomNode = this.getPopupDomNode();
    var target = e.target;
    if (target !== targetDomNode && target !== popupDomNode && !contains(popupDomNode, target) && !contains(targetDomNode, target)) {
      this.setVisible(false);
    }
  }

  monitorDocumentClick(prevState) {
    var state = this.state;
    if (this.props.trigger.indexOf('click') !== -1) {
      if (state.visible && !prevState.visible) {
        if (!this.documentClickHander) {
          this.documentClickHander = rcUtil.Dom.addEventListener(document, 'click', this.handleDocumentClick);
        }
      } else if (prevState.visible && !state.visible) {
        if (this.documentClickHander) {
          this.documentClickHander.remove();
          this.documentClickHander = null;
        }
      }
    }
  }

  getTipContainer() {
    if (!this.tipContainer) {
      this.tipContainer = document.createElement('div');
      document.body.appendChild(this.tipContainer);
    }
    return this.tipContainer;
  }

  getPopupElement() {
    if (!this.popupRendered) {
      return null;
    }
    var props = this.props;
    var state = this.state;
    return <Popup prefixCls={props.prefixCls}
      ref={props.renderPopupToBody ? null : 'popup'}
      visible={state.visible}
      placement={props.placement}
      animation={props.animation}
      wrap={this}
      style={props.overlayStyle}
      transitionName={props.transitionName}>
      {props.overlay}
    </Popup>;
  }

  getPopupDomNode() {
    return this.popupDomNode || React.findDOMNode(this.refs.popup);
  }

  renderToolTip(callback) {
    if (this.props.renderPopupToBody) {
      React.render(this.getPopupElement(), this.getTipContainer(), function () {
        callback(this);
      });
    } else {
      callback(this.refs.popup);
    }
  }

  toggle(e) {
    e.preventDefault();
    if (this.state.visible) {
      this.hide();
    } else {
      this.show();
    }
  }

  setVisible(visible) {
    this.setState({
      visible: visible
    }, () => {
      this.props.onVisibleChange(this.state.visible);
    });
  }

  show() {
    this.setVisible(true);
  }

  hide() {
    this.setVisible(false);
  }

  componentDidMount() {
    this.componentDidUpdate();
  }

  componentDidUpdate(prevProps, prevState) {
    if (!this.popupRendered) {
      return;
    }
    prevState = prevState || {};
    this.renderToolTip((tooltip)=> {
      this.popupDomNode = tooltip.getRootNode();
    });
    this.monitorDocumentClick(prevState);
  }

  render() {
    if (this.state.visible) {
      this.popupRendered = true;
    }
    var props = this.props;
    var children = props.children;
    var child = React.Children.only(children);
    var childProps = child.props || {};
    var newChildProps = {};
    var trigger = props.trigger;
    var mouseProps = {};
    if (trigger.indexOf('click') !== -1) {
      newChildProps.onClick = createChainedFunction(this.toggle, childProps.onClick);
    }
    if (trigger.indexOf('hover') !== -1) {
      mouseProps.onMouseEnter = createChainedFunction(this.show, childProps.onMouseEnter);
      mouseProps.onMouseLeave = createChainedFunction(this.hide, childProps.onMouseLeave);
    }
    if (trigger.indexOf('focus') !== -1) {
      newChildProps.onFocus = createChainedFunction(this.show, childProps.onFocus);
      newChildProps.onBlur = createChainedFunction(this.hide, childProps.onBlur);
    }

    var popupElement = props.renderPopupToBody ? null : this.getPopupElement();
    var className = `${props.prefixCls}-wrap`;

    if (this.state.visible) {
      className += ` ${props.prefixCls}-wrap-open`;
    }

    return (<span className={className} {...mouseProps} style={props.wrapStyle}>
    {rcUtil.Children.mapSelf([React.cloneElement(child, newChildProps), popupElement])}
    </span>);
  }
}

Tooltip.propTypes = {
  trigger: React.PropTypes.any,
  placement: React.PropTypes.any,
  onVisibleChange: React.PropTypes.func,
  renderPopupToBody: React.PropTypes.bool,
  overlay: React.PropTypes.node.isRequired,
  overlayStyle: React.PropTypes.object,
  wrapStyle: React.PropTypes.object
};

Tooltip.defaultProps = {
  prefixCls: 'rc-tooltip',
  renderPopupToBody: true,
  onVisibleChange: function () {
  },
  overlayStyle: {},
  wrapStyle: {},
  placement: 'right',
  trigger: ['hover']
};

module.exports = Tooltip;
