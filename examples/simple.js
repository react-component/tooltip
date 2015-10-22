webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(199);


/***/ },

/***/ 199:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(158);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _rcTooltip = __webpack_require__(159);
	
	var _rcTooltip2 = _interopRequireDefault(_rcTooltip);
	
	__webpack_require__(196);
	
	var _objectAssign = __webpack_require__(195);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var Test = _react2['default'].createClass({
	  displayName: 'Test',
	
	  getInitialState: function getInitialState() {
	    return {
	      placement: 'right',
	      trigger: {
	        hover: 1
	      },
	      offsetX: undefined,
	      offsetY: undefined
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
	
	  onOffsetXChange: function onOffsetXChange(e) {
	    var targetValue = e.target.value;
	    this.setState({
	      offsetX: targetValue ? targetValue : undefined
	    });
	  },
	
	  onOffsetYChange: function onOffsetYChange(e) {
	    var targetValue = e.target.value;
	    this.setState({
	      offsetY: targetValue ? targetValue : undefined
	    });
	  },
	
	  preventDefault: function preventDefault(e) {
	    e.preventDefault();
	  },
	
	  onVisibleChange: function onVisibleChange(visible) {
	    console.log('tooltip', visible);
	  },
	
	  render: function render() {
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
	            ),
	            _react2['default'].createElement(
	              'option',
	              null,
	              'topLeft'
	            ),
	            _react2['default'].createElement(
	              'option',
	              null,
	              'topRight'
	            ),
	            _react2['default'].createElement(
	              'option',
	              null,
	              'bottomRight'
	            ),
	            _react2['default'].createElement(
	              'option',
	              null,
	              'bottomLeft'
	            )
	          )
	        ),
	        '    ',
	        _react2['default'].createElement(
	          'label',
	          null,
	          _react2['default'].createElement('input', { value: 'rc-tooltip-zoom', type: 'checkbox', onChange: this.onTransitionChange,
	            checked: this.state.transitionName === 'rc-tooltip-zoom' }),
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
	        ),
	        _react2['default'].createElement('br', null),
	        _react2['default'].createElement(
	          'label',
	          null,
	          'offsetX:',
	          _react2['default'].createElement('input', { type: 'text', onChange: this.onOffsetXChange, style: { width: 50 } })
	        ),
	        '    ',
	        _react2['default'].createElement(
	          'label',
	          null,
	          'offsetY:',
	          _react2['default'].createElement('input', { type: 'text', onChange: this.onOffsetYChange, style: { width: 50 } })
	        )
	      ),
	      _react2['default'].createElement(
	        'div',
	        { style: { margin: 100 } },
	        _react2['default'].createElement(
	          _rcTooltip2['default'],
	          { placement: this.state.placement,
	            mouseEnterDelay: 0,
	            mouseLeaveDelay: 0.1,
	            trigger: Object.keys(this.state.trigger),
	            onVisibleChange: this.onVisibleChange,
	            overlay: _react2['default'].createElement(
	              'span',
	              null,
	              'i am a tooltip'
	            ),
	            align: {
	              offset: [this.state.offsetX, this.state.offsetY]
	            },
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
	
	_reactDom2['default'].render(_react2['default'].createElement(
	  'div',
	  null,
	  _react2['default'].createElement(Test, null)
	), document.getElementById("__react-content"));

/***/ }

});
//# sourceMappingURL=simple.js.map