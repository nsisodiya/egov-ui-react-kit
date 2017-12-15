(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("prop-types"), require("styled-components"), require("material-ui"), require("react-json-viewer"));
	else if(typeof define === 'function' && define.amd)
		define(["React", "PropTypes", "StyledComponents", "MaterialUi", "ReactJsonViewer"], factory);
	else if(typeof exports === 'object')
		exports["EGovReactKit"] = factory(require("react"), require("prop-types"), require("styled-components"), require("material-ui"), require("react-json-viewer"));
	else
		root["EGovReactKit"] = factory(root["React"], root["PropTypes"], root["StyledComponents"], root["MaterialUi"], root["ReactJsonViewer"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  color: red;\n'], ['\n  color: red;\n']);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /**
                                                                                                                                                   * Created by narendrasisodiya on 14/12/17.
                                                                                                                                                   */

var Red = _styledComponents2.default.span(_templateObject);
exports.default = Red;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MultiCheckbox = undefined;

var _MultiCheckbox = __webpack_require__(5);

var _MultiCheckbox2 = _interopRequireDefault(_MultiCheckbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  MultiCheckbox: _MultiCheckbox2.default
}; /**
    * Created by narendrasisodiya on 15/12/17.
    */

exports.MultiCheckbox = _MultiCheckbox2.default;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  border: 1px solid gray;\n  padding: 10px;\n'], ['\n  border: 1px solid gray;\n  padding: 10px;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _materialUi = __webpack_require__(6);

var _Red = __webpack_require__(3);

var _Red2 = _interopRequireDefault(_Red);

var _reactJsonViewer = __webpack_require__(7);

var _reactJsonViewer2 = _interopRequireDefault(_reactJsonViewer);

var _Required = __webpack_require__(8);

var _Required2 = _interopRequireDefault(_Required);

var _iff = __webpack_require__(9);

var _iff2 = _interopRequireDefault(_iff);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /**
                                                                                                                                                   * Created by narendrasisodiya on 14/12/17.
                                                                                                                                                   */

// ES6


var Container = _styledComponents2.default.div(_templateObject);

var MultiCheckbox = function (_Component) {
  _inherits(MultiCheckbox, _Component);

  function MultiCheckbox() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MultiCheckbox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MultiCheckbox.__proto__ || Object.getPrototypeOf(MultiCheckbox)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      allCheckboxsValues: [],
      errorMessage: ''
    }, _this.handleCheckboxClick = function (e, index) {
      //TODO
      console.log('event on', index);
      var allCheckboxsValues = JSON.parse(JSON.stringify(_this.state.allCheckboxsValues));
      allCheckboxsValues[index] = !allCheckboxsValues[index];

      var selected = _this.props.data.filter(function (v, i) {
        return allCheckboxsValues[i];
      }).map(function (v) {
        return v.code;
      });

      var errorMessage = '';
      if (typeof _this.props.validateFunction === 'function') {
        errorMessage = _this.props.validateFunction(selected);
      }

      _this.setState({
        allCheckboxsValues: allCheckboxsValues,
        errorMessage: errorMessage
      }, function () {
        if (typeof _this.props.onChange === 'function') {
          _this.props.onChange(selected);
        }
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MultiCheckbox, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      console.log('LifeCycle: MultiCheckbox: componentWillMount');
      this.calculateStateFromProps();
    }
  }, {
    key: 'calculateStateFromProps',
    value: function calculateStateFromProps() {
      var _this2 = this;

      var allCheckboxsValues = [];
      this.props.data.forEach(function (v, i) {
        allCheckboxsValues[i] = _this2.props.defaultValue.indexOf(v.code) !== -1;
      });
      this.setState({
        allCheckboxsValues: allCheckboxsValues
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps() {
      console.log('LifeCycle: MultiCheckbox: componentWillReceiveProps');
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      console.log('LifeCycle: MultiCheckbox: shouldComponentUpdate');
      return true;
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate() {
      console.log('LifeCycle: MultiCheckbox: componentWillUpdate');
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      console.log('LifeCycle: MultiCheckbox: componentDidUpdate');
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log('LifeCycle: MultiCheckbox: componentDidMount');
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      console.log('LifeCycle: MultiCheckbox: render');
      return _react2.default.createElement(
        Container,
        null,
        (0, _iff2.default)(this.props.debug, function () {
          return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'h3',
              null,
              'State'
            ),
            _react2.default.createElement(_reactJsonViewer2.default, { json: JSON.parse(JSON.stringify(_this3.state)) }),
            _react2.default.createElement(
              'h3',
              null,
              'Props'
            ),
            _react2.default.createElement(_reactJsonViewer2.default, { json: JSON.parse(JSON.stringify(_this3.props)) })
          );
        }, function () {
          return undefined;
        }),
        _react2.default.createElement(
          'div',
          null,
          this.props.displayLabel,
          ' ',
          _react2.default.createElement(_Required2.default, { value: this.props.isRequired })
        ),
        this.props.data.map(function (item, index) {
          return _react2.default.createElement(_materialUi.Checkbox, {
            key: index,
            id: item.code,
            label: item.label,
            checked: _this3.state.allCheckboxsValues[index],
            disabled: _this3.props.isDisabled,
            onCheck: function onCheck(e) {
              _this3.handleCheckboxClick(e, index);
            }
          });
        }),
        (0, _iff2.default)(this.state.errorMessage !== '' && this.state.errorMessage !== undefined, function () {
          return _react2.default.createElement(
            _Red2.default,
            null,
            _this3.state.errorMessage
          );
        }, function () {
          return undefined;
        })
      );
    }
  }]);

  return MultiCheckbox;
}(_react.Component);

MultiCheckbox.propTypes = {
  isDisabled: _propTypes2.default.bool,
  isRequired: _propTypes2.default.bool,
  debug: _propTypes2.default.bool,
  data: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    label: _propTypes2.default.string,
    code: _propTypes2.default.string
  })).isRequired,
  defaultValue: _propTypes2.default.arrayOf(_propTypes2.default.string),
  displayLabel: _propTypes2.default.string,
  validateFunction: _propTypes2.default.func,
  onChange: _propTypes2.default.func
};
MultiCheckbox.defaultProps = {
  debug: false,
  isDisabled: false,
  isRequired: false,
  defaultValue: [],
  displayLabel: ''
};
exports.default = MultiCheckbox;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Required;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Red = __webpack_require__(3);

var _Red2 = _interopRequireDefault(_Red);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ES6

function Required(props) {
  if (props.value === true) {
    return _react2.default.createElement(
      _Red2.default,
      null,
      '*'
    );
  } else {
    return _react2.default.createElement('span', null);
  }
} /**
   * Created by narendrasisodiya on 14/12/17.
   */

Required.propTypes = {
  value: _propTypes2.default.bool.isRequired
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = iff;
/**
 * Created by narendrasisodiya on 15/12/17.
 */

function iff(condition, tValfunc, fValfunc) {
  if (condition === true) {
    return tValfunc();
  } else {
    return fValfunc();
  }
}

/***/ })
/******/ ]);
});
//# sourceMappingURL=EGovReactKit.js.map