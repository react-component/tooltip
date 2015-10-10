webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(189);


/***/ },

/***/ 189:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _rcTooltip = __webpack_require__(158);
	
	var _rcTooltip2 = _interopRequireDefault(_rcTooltip);
	
	__webpack_require__(187);
	
	var placement = {
	  points: ['tc', 'bc'],
	  offset: [11, 3],
	  overflow: {
	    adjustX: 1,
	    adjustY: 1
	  }
	};
	
	var style = '\n.rc-tooltip-placement-points-tc-bc, .rc-tooltip-placement-points-bc-tc {\n  padding: 5px 0;\n}\n\n.rc-tooltip-placement-points-tc-bc > .rc-tooltip-arrow{\n  top: 0;\n  margin-left: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000000;\n}\n\n.rc-tooltip-placement-offset-x-11 > .rc-tooltip-arrow {\n  left: 11px;\n}\n\n.rc-tooltip-placement-points-bc-tc > .rc-tooltip-arrow{\n  bottom: 0;\n  margin-left: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000000;\n}\n';
	
	var Test = _react2['default'].createClass({
	  displayName: 'Test',
	
	  render: function render() {
	    return _react2['default'].createElement(
	      'div',
	      null,
	      _react2['default'].createElement('style', { dangerouslySetInnerHTML: { __html: style } }),
	      _react2['default'].createElement(
	        'div',
	        { style: { marginTop: 300, marginLeft: 100, marginBottom: 100 } },
	        _react2['default'].createElement(
	          _rcTooltip2['default'],
	          { placement: placement,
	            trigger: 'click',
	            overlay: _react2['default'].createElement(
	              'span',
	              null,
	              'i am a tooltip'
	            ) },
	          _react2['default'].createElement(
	            'a',
	            { href: '#', onClick: preventDefault },
	            'trigger'
	          )
	        )
	      )
	    );
	  }
	});
	
	function preventDefault(e) {
	  e.preventDefault();
	}
	
	_react2['default'].render(_react2['default'].createElement(Test, null), document.getElementById("__react-content"));

/***/ }

});
//# sourceMappingURL=points.js.map