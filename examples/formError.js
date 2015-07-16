webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(2);
	var Tooltip = __webpack_require__(3);
	__webpack_require__(24);
	
	var Test = React.createClass({
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
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'div',
	        { style: { marginTop: 100, marginLeft: 100, marginBottom: 100 } },
	        React.createElement(
	          Tooltip,
	          {
	            visible: this.state.visible,
	            animation: 'zoom',
	            trigger: '',
	            overlay: React.createElement(
	              'span',
	              null,
	              '必填哦'
	            ) },
	          React.createElement('input', { onChange: this.handleChange })
	        )
	      ),
	      React.createElement(
	        'button',
	        { onClick: this.handleDestroy },
	        'destroy'
	      )
	    );
	  }
	});
	
	React.render(React.createElement(Test, null), document.getElementById('__react-content'));

/***/ }
]);
//# sourceMappingURL=formError.js.map