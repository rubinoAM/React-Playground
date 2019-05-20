"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _lodash = _interopRequireDefault(require("lodash"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _lib = require("../../lib");

var _Button = _interopRequireDefault(require("../../elements/Button"));

var _Icon = _interopRequireDefault(require("../../elements/Icon"));

var _Label = _interopRequireDefault(require("../../elements/Label"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * An Input is a field used to elicit a response from a user.
 * @see Button
 * @see Form
 * @see Icon
 * @see Label
 */
var Input =
/*#__PURE__*/
function (_Component) {
  _inherits(Input, _Component);

  function Input() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Input);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Input)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "inputRef", (0, _react.createRef)());

    _defineProperty(_assertThisInitialized(_this), "computeIcon", function () {
      var _this$props = _this.props,
          loading = _this$props.loading,
          icon = _this$props.icon;
      if (!_lodash.default.isNil(icon)) return icon;
      if (loading) return 'spinner';
    });

    _defineProperty(_assertThisInitialized(_this), "computeTabIndex", function () {
      var _this$props2 = _this.props,
          disabled = _this$props2.disabled,
          tabIndex = _this$props2.tabIndex;
      if (!_lodash.default.isNil(tabIndex)) return tabIndex;
      if (disabled) return -1;
    });

    _defineProperty(_assertThisInitialized(_this), "focus", function () {
      return _this.inputRef.current.focus();
    });

    _defineProperty(_assertThisInitialized(_this), "select", function () {
      return _this.inputRef.current.select();
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (e) {
      var value = _lodash.default.get(e, 'target.value');

      _lodash.default.invoke(_this.props, 'onChange', e, _objectSpread({}, _this.props, {
        value: value
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "handleChildOverrides", function (child, defaultProps) {
      return _objectSpread({}, defaultProps, child.props, {
        ref: function ref(c) {
          (0, _lib.handleRef)(child.ref, c);
          _this.inputRef.current = c;
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "partitionProps", function () {
      var _this$props3 = _this.props,
          disabled = _this$props3.disabled,
          type = _this$props3.type;

      var tabIndex = _this.computeTabIndex();

      var unhandled = (0, _lib.getUnhandledProps)(Input, _this.props);

      var _partitionHTMLProps = (0, _lib.partitionHTMLProps)(unhandled),
          _partitionHTMLProps2 = _slicedToArray(_partitionHTMLProps, 2),
          htmlInputProps = _partitionHTMLProps2[0],
          rest = _partitionHTMLProps2[1];

      return [_objectSpread({}, htmlInputProps, {
        disabled: disabled,
        type: type,
        tabIndex: tabIndex,
        onChange: _this.handleChange,
        ref: _this.inputRef
      }), rest];
    });

    return _this;
  }

  _createClass(Input, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props4 = this.props,
          action = _this$props4.action,
          actionPosition = _this$props4.actionPosition,
          children = _this$props4.children,
          className = _this$props4.className,
          disabled = _this$props4.disabled,
          error = _this$props4.error,
          fluid = _this$props4.fluid,
          focus = _this$props4.focus,
          icon = _this$props4.icon,
          iconPosition = _this$props4.iconPosition,
          input = _this$props4.input,
          inverted = _this$props4.inverted,
          label = _this$props4.label,
          labelPosition = _this$props4.labelPosition,
          loading = _this$props4.loading,
          size = _this$props4.size,
          transparent = _this$props4.transparent,
          type = _this$props4.type;
      var classes = (0, _classnames.default)('ui', size, (0, _lib.useKeyOnly)(disabled, 'disabled'), (0, _lib.useKeyOnly)(error, 'error'), (0, _lib.useKeyOnly)(fluid, 'fluid'), (0, _lib.useKeyOnly)(focus, 'focus'), (0, _lib.useKeyOnly)(inverted, 'inverted'), (0, _lib.useKeyOnly)(loading, 'loading'), (0, _lib.useKeyOnly)(transparent, 'transparent'), (0, _lib.useValueAndKey)(actionPosition, 'action') || (0, _lib.useKeyOnly)(action, 'action'), (0, _lib.useValueAndKey)(iconPosition, 'icon') || (0, _lib.useKeyOnly)(icon || loading, 'icon'), (0, _lib.useValueAndKey)(labelPosition, 'labeled') || (0, _lib.useKeyOnly)(label, 'labeled'), 'input', className);
      var ElementType = (0, _lib.getElementType)(Input, this.props);

      var _this$partitionProps = this.partitionProps(),
          _this$partitionProps2 = _slicedToArray(_this$partitionProps, 2),
          htmlInputProps = _this$partitionProps2[0],
          rest = _this$partitionProps2[1]; // Render with children
      // ----------------------------------------


      if (!_lib.childrenUtils.isNil(children)) {
        // add htmlInputProps to the `<input />` child
        var childElements = _lodash.default.map(_react.Children.toArray(children), function (child) {
          if (child.type !== 'input') return child;
          return (0, _react.cloneElement)(child, _this2.handleChildOverrides(child, htmlInputProps));
        });

        return _react.default.createElement(ElementType, _extends({}, rest, {
          className: classes
        }), childElements);
      } // Render Shorthand
      // ----------------------------------------


      var actionElement = _Button.default.create(action, {
        autoGenerateKey: false
      });

      var labelElement = _Label.default.create(label, {
        defaultProps: {
          className: (0, _classnames.default)('label', // add 'left|right corner'
          _lodash.default.includes(labelPosition, 'corner') && labelPosition)
        },
        autoGenerateKey: false
      });

      return _react.default.createElement(ElementType, _extends({}, rest, {
        className: classes
      }), actionPosition === 'left' && actionElement, labelPosition !== 'right' && labelElement, (0, _lib.createHTMLInput)(input || type, {
        defaultProps: htmlInputProps,
        autoGenerateKey: false
      }), _Icon.default.create(this.computeIcon(), {
        autoGenerateKey: false
      }), actionPosition !== 'left' && actionElement, labelPosition === 'right' && labelElement);
    }
  }]);

  return Input;
}(_react.Component);

_defineProperty(Input, "propTypes", {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** An Input can be formatted to alert the user to an action they may perform. */
  action: _propTypes.default.oneOfType([_propTypes.default.bool, _lib.customPropTypes.itemShorthand]),

  /** An action can appear along side an Input on the left or right. */
  actionPosition: _propTypes.default.oneOf(['left']),

  /** Primary content. */
  children: _propTypes.default.node,

  /** Additional classes. */
  className: _propTypes.default.string,

  /** An Input field can show that it is disabled. */
  disabled: _propTypes.default.bool,

  /** An Input field can show the data contains errors. */
  error: _propTypes.default.bool,

  /** Take on the size of its container. */
  fluid: _propTypes.default.bool,

  /** An Input field can show a user is currently interacting with it. */
  focus: _propTypes.default.bool,

  /** Optional Icon to display inside the Input. */
  icon: _propTypes.default.oneOfType([_propTypes.default.bool, _lib.customPropTypes.itemShorthand]),

  /** An Icon can appear inside an Input on the left or right. */
  iconPosition: _propTypes.default.oneOf(['left']),

  /** Shorthand for creating the HTML Input. */
  input: _lib.customPropTypes.itemShorthand,

  /** Format to appear on dark backgrounds. */
  inverted: _propTypes.default.bool,

  /** Optional Label to display along side the Input. */
  label: _lib.customPropTypes.itemShorthand,

  /** A Label can appear outside an Input on the left or right. */
  labelPosition: _propTypes.default.oneOf(['left', 'right', 'left corner', 'right corner']),

  /** An Icon Input field can show that it is currently loading data. */
  loading: _propTypes.default.bool,

  /**
   * Called on change.
   *
   * @param {ChangeEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and a proposed value.
   */
  onChange: _propTypes.default.func,

  /** An Input can vary in size. */
  size: _propTypes.default.oneOf(['mini', 'small', 'large', 'big', 'huge', 'massive']),

  /** An Input can receive focus. */
  tabIndex: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),

  /** Transparent Input has no background. */
  transparent: _propTypes.default.bool,

  /** The HTML input type. */
  type: _propTypes.default.string
});

_defineProperty(Input, "defaultProps", {
  type: 'text'
});

_defineProperty(Input, "handledProps", ["action", "actionPosition", "as", "children", "className", "disabled", "error", "fluid", "focus", "icon", "iconPosition", "input", "inverted", "label", "labelPosition", "loading", "onChange", "size", "tabIndex", "transparent", "type"]);

Input.create = (0, _lib.createShorthandFactory)(Input, function (type) {
  return {
    type: type
  };
});
var _default = Input;
exports.default = _default;

//# sourceMappingURL=Input.js.map