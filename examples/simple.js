webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(30);


/***/ },

/***/ 30:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(2);
	var Tooltip = __webpack_require__(3);
	__webpack_require__(24);
	var assign = __webpack_require__(31);
	
	var Test = React.createClass({
	  displayName: 'Test',
	
	  getInitialState: function getInitialState() {
	    return {
	      placement: 'right',
	      trigger: {
	        hover: 1
	      }
	    };
	  },
	  onPlacementChange: function onPlacementChange(e) {
	    this.setState({
	      placement: e.target.value
	    });
	  },
	
	  onTransitionChange: function onTransitionChange(e) {
	    this.setState({
	      transitionName: e.target.checked ? e.target.value : ''
	    });
	  },
	
	  onTriggerChange: function onTriggerChange(e) {
	    var trigger = assign({}, this.state.trigger);
	    if (e.target.checked) {
	      trigger[e.target.value] = 1;
	    } else {
	      delete trigger[e.target.value];
	    }
	    this.setState({
	      trigger: trigger
	    });
	  },
	
	  preventDefault: function preventDefault(e) {
	    e.preventDefault();
	  },
	
	  onVisibleChange: function onVisibleChange(visible) {
	    console.log('tooltip', visible);
	  },
	
	  render: function render() {
	    console.log(this.state);
	    var trigger = this.state.trigger;
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'div',
	        { style: { margin: '10px 20px' } },
	        React.createElement(
	          'label',
	          null,
	          'placement:',
	          React.createElement(
	            'select',
	            { value: this.state.placement, onChange: this.onPlacementChange },
	            React.createElement(
	              'option',
	              null,
	              'left'
	            ),
	            React.createElement(
	              'option',
	              null,
	              'right'
	            ),
	            React.createElement(
	              'option',
	              null,
	              'top'
	            ),
	            React.createElement(
	              'option',
	              null,
	              'bottom'
	            )
	          )
	        ),
	        '    ',
	        React.createElement(
	          'label',
	          null,
	          React.createElement('input', { value: 'rc-tooltip-zoom', type: 'checkbox', onChange: this.onTransitionChange, checked: this.state.transitionName === 'rc-tooltip-zoom' }),
	          'transitionName'
	        ),
	        '     trigger:',
	        React.createElement(
	          'label',
	          null,
	          React.createElement('input', { value: 'hover', checked: trigger.hover, type: 'checkbox', onChange: this.onTriggerChange }),
	          'hover'
	        ),
	        React.createElement(
	          'label',
	          null,
	          React.createElement('input', { value: 'focus', checked: trigger.focus, type: 'checkbox', onChange: this.onTriggerChange }),
	          'focus'
	        ),
	        React.createElement(
	          'label',
	          null,
	          React.createElement('input', { value: 'click', checked: trigger.click, type: 'checkbox', onChange: this.onTriggerChange }),
	          'click'
	        )
	      ),
	      React.createElement(
	        'div',
	        { style: { margin: 100 } },
	        React.createElement(
	          Tooltip,
	          { placement: this.state.placement,
	            delay: 0.1,
	            renderPopupToBody: this.props.renderPopupToBody,
	            trigger: Object.keys(this.state.trigger),
	            onVisibleChange: this.onVisibleChange,
	            overlay: React.createElement(
	              'span',
	              null,
	              'i am a tooltip'
	            ),
	            transitionName: this.state.transitionName },
	          React.createElement(
	            'a',
	            { href: '#', style: { margin: 20 }, onClick: this.preventDefault },
	            'trigger'
	          )
	        )
	      )
	    );
	  }
	});
	
	React.render(React.createElement(
	  'div',
	  null,
	  React.createElement(
	    'h2',
	    null,
	    'renderPopupToBody=true'
	  ),
	  React.createElement(Test, null),
	  React.createElement(
	    'h2',
	    null,
	    'renderPopupToBody=false'
	  ),
	  React.createElement(Test, { renderPopupToBody: false })
	), document.getElementById('__react-content'));

/***/ },

/***/ 31:
/***/ function(module, exports) {

	'use strict';
	
	function ToObject(val) {
		if (val == null) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	module.exports = Object.assign || function (target, source) {
		var from;
		var keys;
		var to = ToObject(target);
	
		for (var s = 1; s < arguments.length; s++) {
			from = arguments[s];
			keys = Object.keys(Object(from));
	
			for (var i = 0; i < keys.length; i++) {
				to[keys[i]] = from[keys[i]];
			}
		}
	
		return to;
	};


/***/ }

});
//# sourceMappingURL=simple.js.map