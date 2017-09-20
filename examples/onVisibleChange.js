webpackJsonp([2],{

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dom__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_index__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rmc_tooltip_assets_bootstrap_less__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rmc_tooltip_assets_bootstrap_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rmc_tooltip_assets_bootstrap_less__);








function preventDefault(e) {
    e.preventDefault();
}

var Test = function (_Component) {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(Test, _Component);

    function Test() {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Test);

        var _this = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Test.__proto__ || Object.getPrototypeOf(Test)).apply(this, arguments));

        _this.state = {
            visible: false,
            destroy: false
        };
        _this.onVisibleChange = function (visible) {
            _this.setState({
                visible: visible
            });
        };
        _this.onDestroy = function () {
            _this.setState({
                destroy: true
            });
        };
        return _this;
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Test, [{
        key: 'render',
        value: function render() {
            if (this.state.destroy) {
                return null;
            }
            return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                    'div',
                    { style: { marginTop: 300, marginLeft: 100, marginBottom: 100 } },
                    __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_6__src_index__["a" /* default */],
                        { visible: this.state.visible, animation: 'zoom', onVisibleChange: this.onVisibleChange, trigger: 'click', overlay: __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                                'span',
                                null,
                                'i am a tooltip'
                            ) },
                        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                            'a',
                            { href: '#', onClick: preventDefault },
                            'trigger'
                        )
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
                    'button',
                    { onClick: this.onDestroy },
                    'destroy'
                )
            );
        }
    }]);

    return Test;
}(__WEBPACK_IMPORTED_MODULE_4_react__["Component"]);

__WEBPACK_IMPORTED_MODULE_5_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(Test, null), document.getElementById('__react-content'));

/***/ }),

/***/ 25:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 319:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(145);


/***/ })

},[319]);
//# sourceMappingURL=onVisibleChange.js.map