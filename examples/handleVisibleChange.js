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
	  handleVisibleChange: function handleVisibleChange(visible) {
	    this.setState({
	      visible: visible
	    });
	  },
	  handleDestroy: function handleDestroy() {
	    this.setState({
	      destroy: true
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
	        { style: { marginTop: 300, marginLeft: 100, marginBottom: 100 } },
	        React.createElement(
	          Tooltip,
	          {
	            visible: this.state.visible,
	            animation: 'zoom',
	            onVisibleChange: this.handleVisibleChange,
	            trigger: 'click',
	            overlay: React.createElement(
	              'span',
	              null,
	              'i am a tooltip'
	            ) },
	          React.createElement(
	            'a',
	            { href: '#', onClick: preventDefault },
	            'trigger'
	          )
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
	
	function preventDefault(e) {
	  e.preventDefault();
	}
	
	React.render(React.createElement(Test, null), document.getElementById('__react-content'));

/***/ }
]);
//# sourceMappingURL=handleVisibleChange.js.map