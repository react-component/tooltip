webpackJsonp([2],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(312);


/***/ }),

/***/ 311:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 312:
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
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function preventDefault(e) {
	  e.preventDefault();
	}
	
	var Test = function (_Component) {
	  (0, _inherits3.default)(Test, _Component);
	
	  function Test() {
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, Test);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
	      visible: false
	    }, _this.onVisibleChange = function (visible) {
	      _this.setState({
	        visible: visible
	      });
	    }, _this.onDestroy = function () {
	      _this.setState({
	        destroy: true
	      });
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  Test.prototype.render = function render() {
	    if (this.state.destroy) {
	      return null;
	    }
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'div',
	        { style: { marginTop: 300, marginLeft: 100, marginBottom: 100 } },
	        _react2.default.createElement(
	          _rcTooltip2.default,
	          {
	            visible: this.state.visible,
	            animation: 'zoom',
	            onVisibleChange: this.onVisibleChange,
	            trigger: 'click',
	            overlay: _react2.default.createElement(
	              'span',
	              null,
	              'i am a tooltip'
	            )
	          },
	          _react2.default.createElement(
	            'a',
	            { href: '#', onClick: preventDefault },
	            'trigger'
	          )
	        )
	      ),
	      _react2.default.createElement(
	        'button',
	        { onClick: this.onDestroy },
	        'destroy'
	      )
	    );
	  };
	
	  return Test;
	}(_react.Component);
	
	_reactDom2.default.render(_react2.default.createElement(Test, null), document.getElementById('__react-content'));

/***/ })

});
//# sourceMappingURL=onVisibleChange.js.map