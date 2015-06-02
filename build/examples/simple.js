webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },

/***/ 1:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(3);
	var Tooltip = __webpack_require__(4);
	__webpack_require__(27);
	var assign = __webpack_require__(2);
	var packageJson = __webpack_require__(31);
	__webpack_require__(32);
	
	var Test = React.createClass({
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
	    var trigger = assign({}, this.state.trigger);
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
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'h1',
	        null,
	        packageJson.name,
	        '@',
	        packageJson.version
	      ),
	      React.createElement(
	        'div',
	        { style: { margin: '10px 20px' } },
	        React.createElement(
	          'label',
	          null,
	          'placement:',
	          React.createElement(
	            'select',
	            { value: this.state.placement, onChange: this.onPlacementChange },
	            React.createElement(
	              'option',
	              null,
	              'left'
	            ),
	            React.createElement(
	              'option',
	              null,
	              'right'
	            ),
	            React.createElement(
	              'option',
	              null,
	              'top'
	            ),
	            React.createElement(
	              'option',
	              null,
	              'bottom'
	            )
	          )
	        ),
	        '    ',
	        React.createElement(
	          'label',
	          null,
	          React.createElement('input', { value: 'zoom-down', type: 'checkbox', onChange: this.onTransitionChange }),
	          'transitionName'
	        ),
	        '    ',
	        React.createElement(
	          'label',
	          null,
	          'trigger:',
	          React.createElement('input', { value: 'hover', checked: trigger.hover, type: 'checkbox', onChange: this.onTriggerChange }),
	          'hover',
	          React.createElement('input', { value: 'focus', checked: trigger.focus, type: 'checkbox', onChange: this.onTriggerChange }),
	          'focus',
	          React.createElement('input', { value: 'click', checked: trigger.click, type: 'checkbox', onChange: this.onTriggerChange }),
	          'click'
	        )
	      ),
	      React.createElement(
	        'div',
	        { style: { margin: 100 } },
	        React.createElement(
	          Tooltip,
	          { placement: this.state.placement,
	            trigger: Object.keys(this.state.trigger),
	            onVisibleChange: this.onVisibleChange,
	            overlay: React.createElement(
	              'span',
	              null,
	              'i am a tooltip'
	            ),
	            transitionName: this.state.transitionName },
	          React.createElement(
	            'a',
	            { href: '#', onClick: this.preventDefault },
	            'trigger'
	          )
	        )
	      )
	    );
	  }
	});
	
	React.render(React.createElement(Test, null), document.getElementById('__react-content'));

/***/ },

/***/ 32:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(33);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(30)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Users/yiminghe/code/react-components/tooltip/node_modules/rc-tools/node_modules/css-loader/index.js!/Users/yiminghe/code/react-components/tooltip/examples/anim.css", function() {
			var newContent = require("!!/Users/yiminghe/code/react-components/tooltip/node_modules/rc-tools/node_modules/css-loader/index.js!/Users/yiminghe/code/react-components/tooltip/examples/anim.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 33:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(29)();
	exports.push([module.id, ".in-enter {\n  opacity: 0.01;\n  transition: opacity 4s ease-in;\n}\n.in-enter.in-enter-active {\n  opacity: 1;\n}\n.in-leave {\n  opacity: 1;\n  transition: opacity 4s ease-in;\n}\n.in-leave.in-leave-active {\n  opacity: 0.01;\n}\n.zoom-down {\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.zoom-down-enter {\n  opacity: 0;\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-animation-timing-function: cubic-bezier(0.18, 0.89, 0.32, 1.28);\n  animation-timing-function: cubic-bezier(0.18, 0.89, 0.32, 1.28);\n  -webkit-animation-play-state: paused;\n  animation-play-state: paused;\n}\n.zoom-down-leave {\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-animation-timing-function: cubic-bezier(0.6, -0.3, 0.74, 0.05);\n  animation-timing-function: cubic-bezier(0.6, -0.3, 0.74, 0.05);\n  -webkit-animation-play-state: paused;\n  animation-play-state: paused;\n}\n.zoom-down-enter.zoom-down-enter-active {\n  -webkit-animation-name: zoomDownIn;\n  animation-name: zoomDownIn;\n  -webkit-animation-play-state: running;\n  animation-play-state: running;\n}\n.zoom-down-leave.zoom-down-leave-active {\n  -webkit-animation-name: zoomDownOut;\n  animation-name: zoomDownOut;\n  -webkit-animation-play-state: running;\n  animation-play-state: running;\n}\n@-webkit-keyframes zoomIn {\n  0% {\n    opacity: 0;\n    -webkit-transform-origin: 50% 50%;\n    transform-origin: 50% 50%;\n    -webkit-transform: scale(0, 0);\n    transform: scale(0, 0);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform-origin: 50% 50%;\n    transform-origin: 50% 50%;\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1);\n  }\n}\n@keyframes zoomIn {\n  0% {\n    opacity: 0;\n    -webkit-transform-origin: 50% 50%;\n    transform-origin: 50% 50%;\n    -webkit-transform: scale(0, 0);\n    transform: scale(0, 0);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform-origin: 50% 50%;\n    transform-origin: 50% 50%;\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1);\n  }\n}\n@-webkit-keyframes zoomOut {\n  0% {\n    opacity: 1;\n    -webkit-transform-origin: 50% 50%;\n    transform-origin: 50% 50%;\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform-origin: 50% 50%;\n    transform-origin: 50% 50%;\n    -webkit-transform: scale(0, 0);\n    transform: scale(0, 0);\n  }\n}\n@keyframes zoomOut {\n  0% {\n    opacity: 1;\n    -webkit-transform-origin: 50% 50%;\n    transform-origin: 50% 50%;\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform-origin: 50% 50%;\n    transform-origin: 50% 50%;\n    -webkit-transform: scale(0, 0);\n    transform: scale(0, 0);\n  }\n}\n@-webkit-keyframes zoomUpIn {\n  0% {\n    opacity: 0;\n    -webkit-transform-origin: 50% 0%;\n    transform-origin: 50% 0%;\n    -webkit-transform: scale(0, 0);\n    transform: scale(0, 0);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform-origin: 50% 0%;\n    transform-origin: 50% 0%;\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1);\n  }\n}\n@keyframes zoomUpIn {\n  0% {\n    opacity: 0;\n    -webkit-transform-origin: 50% 0%;\n    transform-origin: 50% 0%;\n    -webkit-transform: scale(0, 0);\n    transform: scale(0, 0);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform-origin: 50% 0%;\n    transform-origin: 50% 0%;\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1);\n  }\n}\n@-webkit-keyframes zoomUpOut {\n  0% {\n    opacity: 1;\n    -webkit-transform-origin: 50% 0%;\n    transform-origin: 50% 0%;\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform-origin: 50% 0%;\n    transform-origin: 50% 0%;\n    -webkit-transform: scale(0, 0);\n    transform: scale(0, 0);\n  }\n}\n@keyframes zoomUpOut {\n  0% {\n    opacity: 1;\n    -webkit-transform-origin: 50% 0%;\n    transform-origin: 50% 0%;\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform-origin: 50% 0%;\n    transform-origin: 50% 0%;\n    -webkit-transform: scale(0, 0);\n    transform: scale(0, 0);\n  }\n}\n@-webkit-keyframes zoomLeftIn {\n  0% {\n    opacity: 0;\n    -webkit-transform-origin: 0% 50%;\n    transform-origin: 0% 50%;\n    -webkit-transform: scale(0, 0);\n    transform: scale(0, 0);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform-origin: 0% 50%;\n    transform-origin: 0% 50%;\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1);\n  }\n}\n@keyframes zoomLeftIn {\n  0% {\n    opacity: 0;\n    -webkit-transform-origin: 0% 50%;\n    transform-origin: 0% 50%;\n    -webkit-transform: scale(0, 0);\n    transform: scale(0, 0);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform-origin: 0% 50%;\n    transform-origin: 0% 50%;\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1);\n  }\n}\n@-webkit-keyframes zoomLeftOut {\n  0% {\n    opacity: 1;\n    -webkit-transform-origin: 0% 50%;\n    transform-origin: 0% 50%;\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform-origin: 0% 50%;\n    transform-origin: 0% 50%;\n    -webkit-transform: scale(0, 0);\n    transform: scale(0, 0);\n  }\n}\n@keyframes zoomLeftOut {\n  0% {\n    opacity: 1;\n    -webkit-transform-origin: 0% 50%;\n    transform-origin: 0% 50%;\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform-origin: 0% 50%;\n    transform-origin: 0% 50%;\n    -webkit-transform: scale(0, 0);\n    transform: scale(0, 0);\n  }\n}\n@-webkit-keyframes zoomRightIn {\n  0% {\n    opacity: 0;\n    -webkit-transform-origin: 100% 50%;\n    transform-origin: 100% 50%;\n    -webkit-transform: scale(0, 0);\n    transform: scale(0, 0);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform-origin: 100% 50%;\n    transform-origin: 100% 50%;\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1);\n  }\n}\n@keyframes zoomRightIn {\n  0% {\n    opacity: 0;\n    -webkit-transform-origin: 100% 50%;\n    transform-origin: 100% 50%;\n    -webkit-transform: scale(0, 0);\n    transform: scale(0, 0);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform-origin: 100% 50%;\n    transform-origin: 100% 50%;\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1);\n  }\n}\n@-webkit-keyframes zoomRightOut {\n  0% {\n    opacity: 1;\n    -webkit-transform-origin: 100% 50%;\n    transform-origin: 100% 50%;\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform-origin: 100% 50%;\n    transform-origin: 100% 50%;\n    -webkit-transform: scale(0, 0);\n    transform: scale(0, 0);\n  }\n}\n@keyframes zoomRightOut {\n  0% {\n    opacity: 1;\n    -webkit-transform-origin: 100% 50%;\n    transform-origin: 100% 50%;\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform-origin: 100% 50%;\n    transform-origin: 100% 50%;\n    -webkit-transform: scale(0, 0);\n    transform: scale(0, 0);\n  }\n}\n@-webkit-keyframes zoomDownIn {\n  0% {\n    opacity: 0;\n    -webkit-transform-origin: 50% 100%;\n    transform-origin: 50% 100%;\n    -webkit-transform: scale(0, 0);\n    transform: scale(0, 0);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform-origin: 50% 100%;\n    transform-origin: 50% 100%;\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1);\n  }\n}\n@keyframes zoomDownIn {\n  0% {\n    opacity: 0;\n    -webkit-transform-origin: 50% 100%;\n    transform-origin: 50% 100%;\n    -webkit-transform: scale(0, 0);\n    transform: scale(0, 0);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform-origin: 50% 100%;\n    transform-origin: 50% 100%;\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1);\n  }\n}\n@-webkit-keyframes zoomDownOut {\n  0% {\n    opacity: 1;\n    -webkit-transform-origin: 50% 100%;\n    transform-origin: 50% 100%;\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform-origin: 50% 100%;\n    transform-origin: 50% 100%;\n    -webkit-transform: scale(0, 0);\n    transform: scale(0, 0);\n  }\n}\n@keyframes zoomDownOut {\n  0% {\n    opacity: 1;\n    -webkit-transform-origin: 50% 100%;\n    transform-origin: 50% 100%;\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform-origin: 50% 100%;\n    transform-origin: 50% 100%;\n    -webkit-transform: scale(0, 0);\n    transform: scale(0, 0);\n  }\n}\n", ""]);

/***/ }

});
//# sourceMappingURL=simple.js.map