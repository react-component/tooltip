webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(37);


/***/ },

/***/ 37:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _rcTooltip = __webpack_require__(3);
	
	var _rcTooltip2 = _interopRequireDefault(_rcTooltip);
	
	__webpack_require__(31);
	
	var _objectAssign = __webpack_require__(38);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var Test = _react2['default'].createClass({
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
	    var trigger = (0, _objectAssign2['default'])({}, this.state.trigger);
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
	    return _react2['default'].createElement(
	      'div',
	      null,
	      _react2['default'].createElement(
	        'div',
	        { style: { margin: '10px 20px' } },
	        _react2['default'].createElement(
	          'label',
	          null,
	          'placement:',
	          _react2['default'].createElement(
	            'select',
	            { value: this.state.placement, onChange: this.onPlacementChange },
	            _react2['default'].createElement(
	              'option',
	              null,
	              'left'
	            ),
	            _react2['default'].createElement(
	              'option',
	              null,
	              'right'
	            ),
	            _react2['default'].createElement(
	              'option',
	              null,
	              'top'
	            ),
	            _react2['default'].createElement(
	              'option',
	              null,
	              'bottom'
	            )
	          )
	        ),
	        '    ',
	        _react2['default'].createElement(
	          'label',
	          null,
	          _react2['default'].createElement('input', { value: 'rc-tooltip-zoom', type: 'checkbox', onChange: this.onTransitionChange, checked: this.state.transitionName === 'rc-tooltip-zoom' }),
	          'transitionName'
	        ),
	        '     trigger:',
	        _react2['default'].createElement(
	          'label',
	          null,
	          _react2['default'].createElement('input', { value: 'hover', checked: trigger.hover, type: 'checkbox', onChange: this.onTriggerChange }),
	          'hover'
	        ),
	        _react2['default'].createElement(
	          'label',
	          null,
	          _react2['default'].createElement('input', { value: 'focus', checked: trigger.focus, type: 'checkbox', onChange: this.onTriggerChange }),
	          'focus'
	        ),
	        _react2['default'].createElement(
	          'label',
	          null,
	          _react2['default'].createElement('input', { value: 'click', checked: trigger.click, type: 'checkbox', onChange: this.onTriggerChange }),
	          'click'
	        )
	      ),
	      _react2['default'].createElement(
	        'div',
	        { style: { margin: 100 } },
	        _react2['default'].createElement(
	          _rcTooltip2['default'],
	          { placement: this.state.placement,
	            delay: 0.1,
	            renderPopupToBody: this.props.renderPopupToBody,
	            trigger: Object.keys(this.state.trigger),
	            onVisibleChange: this.onVisibleChange,
	            overlay: _react2['default'].createElement(
	              'span',
	              null,
	              'i am a tooltip'
	            ),
	            transitionName: this.state.transitionName },
	          _react2['default'].createElement(
	            'a',
	            { href: '#', style: { margin: 20 }, onClick: this.preventDefault },
	            'trigger'
	          )
	        )
	      )
	    );
	  }
	});
	
	_react2['default'].render(_react2['default'].createElement(
	  'div',
	  null,
	  _react2['default'].createElement(
	    'h2',
	    null,
	    'renderPopupToBody=true'
	  ),
	  _react2['default'].createElement(Test, null),
	  _react2['default'].createElement(
	    'h2',
	    null,
	    'renderPopupToBody=false'
	  ),
	  _react2['default'].createElement(Test, { renderPopupToBody: false })
	), document.getElementById("__react-content"));

/***/ },

/***/ 38:
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