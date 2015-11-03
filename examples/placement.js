webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(202);


/***/ },

/***/ 202:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(159);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _rcTooltip = __webpack_require__(160);
	
	var _rcTooltip2 = _interopRequireDefault(_rcTooltip);
	
	__webpack_require__(200);
	
	var text = _react2['default'].createElement(
	  'span',
	  null,
	  '提示文字'
	);
	
	var A = function A(props) {
	  return _react2['default'].createElement('a', _extends({}, props, { style: {
	      display: 'inline-block',
	      lineHeight: '40px',
	      height: '40px',
	      width: '80px',
	      textAlign: 'center',
	      background: '#f6f6f6',
	      marginRight: '1em',
	      marginBottom: '1em',
	      borderRadius: '6px'
	    } }));
	};
	
	var Test = _react2['default'].createClass({
	  displayName: 'Test',
	
	  render: function render() {
	    return _react2['default'].createElement(
	      'div',
	      null,
	      _react2['default'].createElement(
	        _rcTooltip2['default'],
	        { placement: 'left', overlay: text },
	        _react2['default'].createElement(
	          A,
	          { href: '#' },
	          '左边'
	        )
	      ),
	      _react2['default'].createElement(
	        _rcTooltip2['default'],
	        { placement: 'top', overlay: text },
	        _react2['default'].createElement(
	          A,
	          { href: '#' },
	          '上边'
	        )
	      ),
	      _react2['default'].createElement(
	        _rcTooltip2['default'],
	        { placement: 'bottom', overlay: text },
	        _react2['default'].createElement(
	          A,
	          { href: '#' },
	          '下边'
	        )
	      ),
	      _react2['default'].createElement(
	        _rcTooltip2['default'],
	        { placement: 'right', overlay: text },
	        _react2['default'].createElement(
	          A,
	          { href: '#' },
	          '右边'
	        )
	      ),
	      _react2['default'].createElement('br', null),
	      _react2['default'].createElement(
	        _rcTooltip2['default'],
	        { placement: 'leftTop', overlay: text },
	        _react2['default'].createElement(
	          A,
	          { href: '#' },
	          '左上'
	        )
	      ),
	      _react2['default'].createElement(
	        _rcTooltip2['default'],
	        { placement: 'leftBottom', overlay: text },
	        _react2['default'].createElement(
	          A,
	          { href: '#' },
	          '左下'
	        )
	      ),
	      _react2['default'].createElement(
	        _rcTooltip2['default'],
	        { placement: 'rightTop', overlay: text },
	        _react2['default'].createElement(
	          A,
	          { href: '#' },
	          '右上'
	        )
	      ),
	      _react2['default'].createElement(
	        _rcTooltip2['default'],
	        { placement: 'rightBottom', overlay: text },
	        _react2['default'].createElement(
	          A,
	          { href: '#' },
	          '右下'
	        )
	      ),
	      _react2['default'].createElement('br', null),
	      _react2['default'].createElement(
	        _rcTooltip2['default'],
	        { placement: 'topLeft', overlay: text },
	        _react2['default'].createElement(
	          A,
	          { href: '#' },
	          '上左'
	        )
	      ),
	      _react2['default'].createElement(
	        _rcTooltip2['default'],
	        { placement: 'topRight', overlay: text },
	        _react2['default'].createElement(
	          A,
	          { href: '#' },
	          '上右'
	        )
	      ),
	      _react2['default'].createElement(
	        _rcTooltip2['default'],
	        { placement: 'bottomLeft', overlay: text },
	        _react2['default'].createElement(
	          A,
	          { href: '#' },
	          '下左'
	        )
	      ),
	      _react2['default'].createElement(
	        _rcTooltip2['default'],
	        { placement: 'bottomRight', overlay: text },
	        _react2['default'].createElement(
	          A,
	          { href: '#' },
	          '下右'
	        )
	      )
	    );
	  }
	});
	
	function preventDefault(e) {
	  e.preventDefault();
	}
	
	_reactDom2['default'].render(_react2['default'].createElement(Test, null), document.getElementById("__react-content"));

/***/ }

});
//# sourceMappingURL=placement.js.map