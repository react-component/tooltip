webpackJsonp([4],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(314);


/***/ }),

/***/ 311:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 314:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _classCallCheck2 = __webpack_require__(225);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(226);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(262);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(37);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _rcTooltip = __webpack_require__(183);
	
	var _rcTooltip2 = _interopRequireDefault(_rcTooltip);
	
	__webpack_require__(311);
	
	var _objectAssign = __webpack_require__(281);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _placements = __webpack_require__(308);
	
	var _placements2 = _interopRequireDefault(_placements);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Test = function (_Component) {
	  (0, _inherits3.default)(Test, _Component);
	
	  function Test() {
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, Test);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
	      destroyTooltipOnHide: false,
	      placement: 'right',
	      trigger: {
	        hover: 1
	      },
	      offsetX: _placements2.default.right.offset[0],
	      offsetY: _placements2.default.right.offset[1]
	    }, _this.onPlacementChange = function (e) {
	      var placement = e.target.value;
	      var offset = _placements2.default[placement].offset;
	      _this.setState({
	        placement: e.target.value,
	        offsetX: offset[0],
	        offsetY: offset[1]
	      });
	    }, _this.onTransitionChange = function (e) {
	      _this.setState({
	        transitionName: e.target.checked ? e.target.value : ''
	      });
	    }, _this.onTriggerChange = function (e) {
	      var trigger = (0, _objectAssign2.default)({}, _this.state.trigger);
	      if (e.target.checked) {
	        trigger[e.target.value] = 1;
	      } else {
	        delete trigger[e.target.value];
	      }
	      _this.setState({
	        trigger: trigger
	      });
	    }, _this.onOffsetXChange = function (e) {
	      var targetValue = e.target.value;
	      _this.setState({
	        offsetX: targetValue || undefined
	      });
	    }, _this.onOffsetYChange = function (e) {
	      var targetValue = e.target.value;
	      _this.setState({
	        offsetY: targetValue || undefined
	      });
	    }, _this.onVisibleChange = function (visible) {
	      console.log('tooltip', visible); // eslint-disable-line no-console
	    }, _this.onDestroyCheck = function () {
	      _this.setState({
	        destroyTooltipOnHide: !_this.state.destroyTooltipOnHide
	      });
	    }, _this.preventDefault = function (e) {
	      e.preventDefault();
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  Test.prototype.render = function render() {
	    var state = this.state;
	    var trigger = state.trigger;
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'div',
	        { style: { margin: '10px 20px' } },
	        _react2.default.createElement(
	          'label',
	          null,
	          'placement:',
	          _react2.default.createElement(
	            'select',
	            { value: this.state.placement, onChange: this.onPlacementChange },
	            Object.keys(_placements2.default).map(function (p) {
	              return _react2.default.createElement(
	                'option',
	                { key: p, value: p },
	                p
	              );
	            })
	          )
	        ),
	        '\xA0\xA0\xA0\xA0',
	        _react2.default.createElement(
	          'label',
	          null,
	          _react2.default.createElement('input', {
	            value: 'rc-tooltip-zoom',
	            type: 'checkbox',
	            onChange: this.onTransitionChange,
	            checked: this.state.transitionName === 'rc-tooltip-zoom'
	          }),
	          'transitionName'
	        ),
	        '\xA0\xA0\xA0\xA0',
	        _react2.default.createElement(
	          'label',
	          null,
	          _react2.default.createElement('input', {
	            type: 'checkbox',
	            onChange: this.onDestroyCheck,
	            checked: this.state.destroyTooltipOnHide
	          }),
	          'destroyTooltipOnHide'
	        ),
	        '\xA0\xA0\xA0\xA0 trigger:',
	        _react2.default.createElement(
	          'label',
	          null,
	          _react2.default.createElement('input', {
	            value: 'hover',
	            checked: trigger.hover,
	            type: 'checkbox',
	            onChange: this.onTriggerChange
	          }),
	          'hover'
	        ),
	        _react2.default.createElement(
	          'label',
	          null,
	          _react2.default.createElement('input', {
	            value: 'focus',
	            checked: trigger.focus,
	            type: 'checkbox',
	            onChange: this.onTriggerChange
	          }),
	          'focus'
	        ),
	        _react2.default.createElement(
	          'label',
	          null,
	          _react2.default.createElement('input', {
	            value: 'click',
	            checked: trigger.click,
	            type: 'checkbox',
	            onChange: this.onTriggerChange
	          }),
	          'click'
	        ),
	        _react2.default.createElement('br', null),
	        _react2.default.createElement(
	          'label',
	          null,
	          'offsetX:',
	          _react2.default.createElement('input', {
	            type: 'text',
	            value: state.offsetX,
	            onChange: this.onOffsetXChange,
	            style: { width: 50 }
	          })
	        ),
	        '\xA0\xA0\xA0\xA0',
	        _react2.default.createElement(
	          'label',
	          null,
	          'offsetY:',
	          _react2.default.createElement('input', {
	            type: 'text',
	            value: state.offsetY,
	            onChange: this.onOffsetYChange,
	            style: { width: 50 }
	          })
	        )
	      ),
	      _react2.default.createElement(
	        'div',
	        { style: { margin: 100 } },
	        _react2.default.createElement(
	          _rcTooltip2.default,
	          {
	            placement: this.state.placement,
	            mouseEnterDelay: 0,
	            mouseLeaveDelay: 0.1,
	            destroyTooltipOnHide: this.state.destroyTooltipOnHide,
	            trigger: Object.keys(this.state.trigger),
	            onVisibleChange: this.onVisibleChange,
	            overlay: _react2.default.createElement(
	              'div',
	              { style: { height: 50, width: 50 } },
	              'i am a tooltip'
	            ),
	            align: {
	              offset: [this.state.offsetX, this.state.offsetY]
	            },
	            transitionName: this.state.transitionName
	          },
	          _react2.default.createElement(
	            'div',
	            { style: { height: 100, width: 100, border: '1px solid red' } },
	            'trigger'
	          )
	        )
	      )
	    );
	  };
	
	  return Test;
	}(_react.Component);
	
	// do not use rc-tooltip/lib/placements
	
	
	_reactDom2.default.render(_react2.default.createElement(Test, null), document.getElementById('__react-content'));

/***/ })

});
//# sourceMappingURL=simple.js.map