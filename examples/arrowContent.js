webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },

/***/ 1:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(159);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _rcTooltip = __webpack_require__(160);
	
	var _rcTooltip2 = _interopRequireDefault(_rcTooltip);
	
	__webpack_require__(211);
	
	var text = _react2['default'].createElement(
	  'span',
	  null,
	  '提示文字'
	);
	var styles = {
	  display: 'inline-block',
	  lineHeight: '40px',
	  height: '40px',
	  width: '80px',
	  textAlign: 'center',
	  background: '#f6f6f6',
	  marginRight: '1em',
	  marginBottom: '1em',
	  borderRadius: '6px'
	};
	
	var Test = _react2['default'].createClass({
	  displayName: 'Test',
	
	  render: function render() {
	    return _react2['default'].createElement(
	      'div',
	      null,
	      _react2['default'].createElement(
	        _rcTooltip2['default'],
	        { placement: 'left', overlay: text, arrowContent: _react2['default'].createElement('div', { className: 'rc-tooltip-arrow-inner' }) },
	        _react2['default'].createElement(
	          'a',
	          { href: '#', style: styles },
	          '左边'
	        )
	      ),
	      _react2['default'].createElement(
	        _rcTooltip2['default'],
	        { placement: 'top', overlay: text, arrowContent: _react2['default'].createElement('div', { className: 'rc-tooltip-arrow-inner' }) },
	        _react2['default'].createElement(
	          'a',
	          { href: '#', style: styles },
	          '上边'
	        )
	      ),
	      _react2['default'].createElement(
	        _rcTooltip2['default'],
	        { placement: 'bottom', overlay: text, arrowContent: _react2['default'].createElement('div', { className: 'rc-tooltip-arrow-inner' }) },
	        _react2['default'].createElement(
	          'a',
	          { href: '#', style: styles },
	          '下边'
	        )
	      ),
	      _react2['default'].createElement(
	        _rcTooltip2['default'],
	        { placement: 'right', overlay: text, arrowContent: _react2['default'].createElement('div', { className: 'rc-tooltip-arrow-inner' }) },
	        _react2['default'].createElement(
	          'a',
	          { href: '#', style: styles },
	          '右边'
	        )
	      ),
	      _react2['default'].createElement('br', null),
	      _react2['default'].createElement(
	        _rcTooltip2['default'],
	        { placement: 'leftTop', overlay: text, arrowContent: _react2['default'].createElement('div', { className: 'rc-tooltip-arrow-inner' }) },
	        _react2['default'].createElement(
	          'a',
	          { href: '#', style: styles },
	          '左上'
	        )
	      ),
	      _react2['default'].createElement(
	        _rcTooltip2['default'],
	        { placement: 'leftBottom', overlay: text, arrowContent: _react2['default'].createElement('div', { className: 'rc-tooltip-arrow-inner' }) },
	        _react2['default'].createElement(
	          'a',
	          { href: '#', style: styles },
	          '左下'
	        )
	      ),
	      _react2['default'].createElement(
	        _rcTooltip2['default'],
	        { placement: 'rightTop', overlay: text, arrowContent: _react2['default'].createElement('div', { className: 'rc-tooltip-arrow-inner' }) },
	        _react2['default'].createElement(
	          'a',
	          { href: '#', style: styles },
	          '右上'
	        )
	      ),
	      _react2['default'].createElement(
	        _rcTooltip2['default'],
	        { placement: 'rightBottom', overlay: text, arrowContent: _react2['default'].createElement('div', { className: 'rc-tooltip-arrow-inner' }) },
	        _react2['default'].createElement(
	          'a',
	          { href: '#', style: styles },
	          '右下'
	        )
	      ),
	      _react2['default'].createElement('br', null),
	      _react2['default'].createElement(
	        _rcTooltip2['default'],
	        { placement: 'topLeft', overlay: text, arrowContent: _react2['default'].createElement('div', { className: 'rc-tooltip-arrow-inner' }) },
	        _react2['default'].createElement(
	          'a',
	          { href: '#', style: styles },
	          '上左'
	        )
	      ),
	      _react2['default'].createElement(
	        _rcTooltip2['default'],
	        { placement: 'topRight', overlay: text, arrowContent: _react2['default'].createElement('div', { className: 'rc-tooltip-arrow-inner' }) },
	        _react2['default'].createElement(
	          'a',
	          { href: '#', style: styles },
	          '上右'
	        )
	      ),
	      _react2['default'].createElement(
	        _rcTooltip2['default'],
	        { placement: 'bottomLeft', overlay: text, arrowContent: _react2['default'].createElement('div', { className: 'rc-tooltip-arrow-inner' }) },
	        _react2['default'].createElement(
	          'a',
	          { href: '#', style: styles },
	          '下左'
	        )
	      ),
	      _react2['default'].createElement(
	        _rcTooltip2['default'],
	        { placement: 'bottomRight', overlay: text, arrowContent: _react2['default'].createElement('div', { className: 'rc-tooltip-arrow-inner' }) },
	        _react2['default'].createElement(
	          'a',
	          { href: '#', style: styles },
	          '下右'
	        )
	      )
	    );
	  }
	});
	
	_reactDom2['default'].render(_react2['default'].createElement(Test, null), document.getElementById('__react-content'));

/***/ },

/***/ 211:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});
//# sourceMappingURL=arrowContent.js.map