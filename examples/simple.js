webpackJsonp([0],{

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dom__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rc_tooltip__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rc_tooltip_assets_bootstrap_less__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rc_tooltip_assets_bootstrap_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rc_tooltip_assets_bootstrap_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_object_assign__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rc_tooltip_src_placements__ = __webpack_require__(91);










// do not use rc-tooltip/lib/placements


var Test = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(Test, _Component);

  function Test() {
    var _ref;

    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Test);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = Test.__proto__ || Object.getPrototypeOf(Test)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      destroyTooltipOnHide: false,
      placement: 'right',
      trigger: {
        hover: 1
      },
      offsetX: __WEBPACK_IMPORTED_MODULE_9_rc_tooltip_src_placements__["a" /* default */].right.offset[0],
      offsetY: __WEBPACK_IMPORTED_MODULE_9_rc_tooltip_src_placements__["a" /* default */].right.offset[1]
    }, _this.onPlacementChange = function (e) {
      var placement = e.target.value;
      var offset = __WEBPACK_IMPORTED_MODULE_9_rc_tooltip_src_placements__["a" /* default */][placement].offset;
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
      var trigger = __WEBPACK_IMPORTED_MODULE_8_object_assign___default()({}, _this.state.trigger);
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
    }, _temp), __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Test, [{
    key: 'render',
    value: function render() {
      var state = this.state;
      var trigger = state.trigger;
      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          'div',
          { style: { margin: '10px 20px' } },
          __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
            'label',
            null,
            'placement:',
            __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
              'select',
              { value: this.state.placement, onChange: this.onPlacementChange },
              Object.keys(__WEBPACK_IMPORTED_MODULE_9_rc_tooltip_src_placements__["a" /* default */]).map(function (p) {
                return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                  'option',
                  { key: p, value: p },
                  p
                );
              })
            )
          ),
          '\xA0\xA0\xA0\xA0',
          __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
            'label',
            null,
            __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('input', {
              value: 'rc-tooltip-zoom',
              type: 'checkbox',
              onChange: this.onTransitionChange,
              checked: this.state.transitionName === 'rc-tooltip-zoom'
            }),
            'transitionName'
          ),
          '\xA0\xA0\xA0\xA0',
          __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
            'label',
            null,
            __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('input', {
              type: 'checkbox',
              onChange: this.onDestroyCheck,
              checked: this.state.destroyTooltipOnHide
            }),
            'destroyTooltipOnHide'
          ),
          '\xA0\xA0\xA0\xA0 trigger:',
          __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
            'label',
            null,
            __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('input', {
              value: 'hover',
              checked: trigger.hover,
              type: 'checkbox',
              onChange: this.onTriggerChange
            }),
            'hover'
          ),
          __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
            'label',
            null,
            __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('input', {
              value: 'focus',
              checked: trigger.focus,
              type: 'checkbox',
              onChange: this.onTriggerChange
            }),
            'focus'
          ),
          __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
            'label',
            null,
            __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('input', {
              value: 'click',
              checked: trigger.click,
              type: 'checkbox',
              onChange: this.onTriggerChange
            }),
            'click'
          ),
          __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('br', null),
          __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
            'label',
            null,
            'offsetX:',
            __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('input', {
              type: 'text',
              value: state.offsetX,
              onChange: this.onOffsetXChange,
              style: { width: 50 }
            })
          ),
          '\xA0\xA0\xA0\xA0',
          __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
            'label',
            null,
            'offsetY:',
            __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('input', {
              type: 'text',
              value: state.offsetY,
              onChange: this.onOffsetYChange,
              style: { width: 50 }
            })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          'div',
          { style: { margin: 100 } },
          __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_6_rc_tooltip__["a" /* default */],
            {
              placement: this.state.placement,
              mouseEnterDelay: 0,
              mouseLeaveDelay: 0.1,
              destroyTooltipOnHide: this.state.destroyTooltipOnHide,
              trigger: Object.keys(this.state.trigger),
              onVisibleChange: this.onVisibleChange,
              overlay: __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                'div',
                { style: { height: 50, width: 50 } },
                'i am a tooltip'
              ),
              align: {
                offset: [this.state.offsetX, this.state.offsetY]
              },
              transitionName: this.state.transitionName
            },
            __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
              'div',
              { style: { height: 100, width: 100, border: '1px solid red' } },
              'trigger'
            )
          )
        )
      );
    }
  }]);

  return Test;
}(__WEBPACK_IMPORTED_MODULE_4_react__["Component"]);

__WEBPACK_IMPORTED_MODULE_5_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(Test, null), document.getElementById('__react-content'));

/***/ }),

/***/ 27:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 322:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(149);


/***/ })

},[322]);
//# sourceMappingURL=simple.js.map