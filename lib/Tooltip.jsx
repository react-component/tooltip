/** @jsx React.DOM */

/**
 * @author yiminghe@gmail.com
 */
var React = require('react');
var rcUtil = require('rc-util');
var createChainedFunction = rcUtil.createChainedFunction;
var domAlign = require('dom-align');
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
    ['toggle', 'show', 'hide'].forEach((m)=> {
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

  getTipContainer() {
    if (!this.tipContainer) {
      this.tipContainer = document.createElement('div');
      document.body.appendChild(this.tipContainer);
    }
    return this.tipContainer;
  }

  renderToolTip(callback) {
    var props = this.props;
    var state = this.state;
    React.render(<Popup prefixCls={props.prefixCls}
        visible={state.visible}
        placement={props.placement}
        transitionName={props.transitionName}>
      {props.overlay}
      </Popup>,
      this.getTipContainer(), function () {
        callback(this);
      });
  }

  toggle() {
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

  componentDidUpdate() {
    var state = this.state;
    this.renderToolTip((tooltip)=> {
      if (state.visible) {
        var rootNode = React.findDOMNode(this);
        var tipNode = tooltip.getRootNode();
        var points = ['cr', 'cl'];
        var placement = this.props.placement;
        if (placement === 'right') {
          points = ['cl', 'cr'];
        } else if (placement === 'top') {
          points = ['bc', 'tc'];
        } else if (placement === 'bottom') {
          points = ['tc', 'bc'];
        }
        domAlign(tipNode, rootNode, {
          points: points
        });
      }
    });
  }

  render() {
    var props = this.props;
    var children = props.children;
    var child = React.Children.only(children);
    var childProps = child.props || {};
    var newChildProps = {};
    var trigger = props.trigger;
    if (trigger.indexOf('click') !== -1) {
      newChildProps.onClick = createChainedFunction(this.toggle, childProps.onClick);
    }
    if (trigger.indexOf('hover') !== -1) {
      newChildProps.onMouseEnter = createChainedFunction(this.show, childProps.onMouseEnter);
      newChildProps.onMouseLeave = createChainedFunction(this.hide, childProps.onMouseLeave);
    }
    if (trigger.indexOf('focus') !== -1) {
      newChildProps.onFocus = createChainedFunction(this.show, childProps.onFocus);
      newChildProps.onBlur = createChainedFunction(this.hide, childProps.onBlur);
    }
    return React.cloneElement(child, newChildProps);
  }
}

Tooltip.propTypes = {
  trigger: React.PropTypes.arrayOf(React.PropTypes.oneOf(['click', 'hover', 'focus'])),
  placement: React.PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  onVisibleChange: React.PropTypes.func,
  overlay: React.PropTypes.node.isRequired
};

Tooltip.defaultProps = {
  prefixCls: 'rc-tooltip',
  onVisibleChange: function () {
  },
  placement: 'right',
  trigger: ['hover']
};

module.exports = Tooltip;
