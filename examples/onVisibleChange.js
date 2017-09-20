webpackJsonp([2],{

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rc_tooltip__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rc_tooltip_assets_bootstrap_less__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rc_tooltip_assets_bootstrap_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rc_tooltip_assets_bootstrap_less__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






function preventDefault(e) {
  e.preventDefault();
}

var Test = function (_Component) {
  _inherits(Test, _Component);

  function Test() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Test);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Test.__proto__ || Object.getPrototypeOf(Test)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      visible: false
    }, _this.onVisibleChange = function (visible) {
      _this.setState({
        visible: visible
      });
    }, _this.onDestroy = function () {
      _this.setState({
        destroy: true
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Test, [{
    key: 'render',
    value: function render() {
      if (this.state.destroy) {
        return null;
      }
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { style: { marginTop: 300, marginLeft: 100, marginBottom: 100 } },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_rc_tooltip__["a" /* default */],
            {
              visible: this.state.visible,
              animation: 'zoom',
              onVisibleChange: this.onVisibleChange,
              trigger: 'click',
              overlay: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                null,
                'i am a tooltip'
              )
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { href: '#', onClick: preventDefault },
              'trigger'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'button',
          { onClick: this.onDestroy },
          'destroy'
        )
      );
    }
  }]);

  return Test;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Test, null), document.getElementById('__react-content'));

/***/ }),

/***/ 22:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 322:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(146);


/***/ })

},[322]);
//# sourceMappingURL=onVisibleChange.js.map