webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(201);


/***/ },

/***/ 201:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(159);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _rcTooltip = __webpack_require__(160);
	
	var _rcTooltip2 = _interopRequireDefault(_rcTooltip);
	
	__webpack_require__(202);
	
	var Test = _react2['default'].createClass({
	  displayName: 'Test',
	
	  getInitialState: function getInitialState() {
	    return {
	      visible: false
	    };
	  },
	  handleDestroy: function handleDestroy() {
	    this.setState({
	      destroy: true
	    });
	  },
	  handleChange: function handleChange(e) {
	    this.setState({
	      visible: !e.target.value
	    });
	  },
	  render: function render() {
	    if (this.state.destroy) {
	      return null;
	    }
	    return _react2['default'].createElement(
	      'div',
	      null,
	      _react2['default'].createElement(
	        'div',
	        { style: { marginTop: 100, marginLeft: 100, marginBottom: 100 } },
	        _react2['default'].createElement(
	          _rcTooltip2['default'],
	          {
	            visible: this.state.visible,
	            animation: 'zoom',
	            trigger: [],
	            overlayStyle: { zIndex: 1000 },
	            overlay: _react2['default'].createElement(
	              'span',
	              null,
	              'required!'
	            ) },
	          _react2['default'].createElement('input', { onChange: this.handleChange })
	        )
	      ),
	      _react2['default'].createElement(
	        'button',
	        { onClick: this.handleDestroy },
	        'destroy'
	      )
	    );
	  }
	});
	
	_reactDom2['default'].render(_react2['default'].createElement(Test, null), document.getElementById('__react-content'));

/***/ },

/***/ 202:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});
//# sourceMappingURL=formError.js.map