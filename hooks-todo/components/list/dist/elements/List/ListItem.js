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

var _Image = _interopRequireDefault(require("../../elements/Image"));

var _ListContent = _interopRequireDefault(require("./ListContent"));

var _ListDescription = _interopRequireDefault(require("./ListDescription"));

var _ListHeader = _interopRequireDefault(require("./ListHeader"));

var _ListIcon = _interopRequireDefault(require("./ListIcon"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
 * A list item can contain a set of items.
 */
var ListItem =
/*#__PURE__*/
function (_Component) {
  _inherits(ListItem, _Component);

  function ListItem() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ListItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ListItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (e) {
      var disabled = _this.props.disabled;
      if (!disabled) _lodash.default.invoke(_this.props, 'onClick', e, _this.props);
    });

    return _this;
  }

  _createClass(ListItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          active = _this$props.active,
          children = _this$props.children,
          className = _this$props.className,
          content = _this$props.content,
          description = _this$props.description,
          disabled = _this$props.disabled,
          header = _this$props.header,
          icon = _this$props.icon,
          image = _this$props.image,
          value = _this$props.value;
      var ElementType = (0, _lib.getElementType)(ListItem, this.props);
      var classes = (0, _classnames.default)((0, _lib.useKeyOnly)(active, 'active'), (0, _lib.useKeyOnly)(disabled, 'disabled'), (0, _lib.useKeyOnly)(ElementType !== 'li', 'item'), className);
      var rest = (0, _lib.getUnhandledProps)(ListItem, this.props);
      var valueProp = ElementType === 'li' ? {
        value: value
      } : {
        'data-value': value
      };

      if (!_lib.childrenUtils.isNil(children)) {
        return _react.default.createElement(ElementType, _extends({}, valueProp, {
          role: "listitem",
          className: classes,
          onClick: this.handleClick
        }, rest), children);
      }

      var iconElement = _ListIcon.default.create(icon, {
        autoGenerateKey: false
      });

      var imageElement = _Image.default.create(image, {
        autoGenerateKey: false
      }); // See description of `content` prop for explanation about why this is necessary.


      if (!(0, _react.isValidElement)(content) && _lodash.default.isPlainObject(content)) {
        return _react.default.createElement(ElementType, _extends({}, valueProp, {
          role: "listitem",
          className: classes,
          onClick: this.handleClick
        }, rest), iconElement || imageElement, _ListContent.default.create(content, {
          autoGenerateKey: false,
          defaultProps: {
            header: header,
            description: description
          }
        }));
      }

      var headerElement = _ListHeader.default.create(header, {
        autoGenerateKey: false
      });

      var descriptionElement = _ListDescription.default.create(description, {
        autoGenerateKey: false
      });

      if (iconElement || imageElement) {
        return _react.default.createElement(ElementType, _extends({}, valueProp, {
          role: "listitem",
          className: classes,
          onClick: this.handleClick
        }, rest), iconElement || imageElement, (content || headerElement || descriptionElement) && _react.default.createElement(_ListContent.default, null, headerElement, descriptionElement, content));
      }

      return _react.default.createElement(ElementType, _extends({}, valueProp, {
        role: "listitem",
        className: classes,
        onClick: this.handleClick
      }, rest), headerElement, descriptionElement, content);
    }
  }]);

  return ListItem;
}(_react.Component);

_defineProperty(ListItem, "propTypes", {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** A list item can active. */
  active: _propTypes.default.bool,

  /** Primary content. */
  children: _propTypes.default.node,

  /** Additional classes. */
  className: _propTypes.default.string,

  /**
   * Shorthand for primary content.
   *
   * Heads up!
   *
   * This is handled slightly differently than the typical `content` prop since
   * the wrapping ListContent is not used when there's no icon or image.
   *
   * If you pass content as:
   * - an element/literal, it's treated as the sibling node to
   * header/description (whether wrapped in Item.Content or not).
   * - a props object, it forces the presence of Item.Content and passes those
   * props to it. If you pass a content prop within that props object, it
   * will be treated as the sibling node to header/description.
   */
  content: _lib.customPropTypes.itemShorthand,

  /** Shorthand for ListDescription. */
  description: _lib.customPropTypes.itemShorthand,

  /** A list item can disabled. */
  disabled: _propTypes.default.bool,

  /** Shorthand for ListHeader. */
  header: _lib.customPropTypes.itemShorthand,

  /** Shorthand for ListIcon. */
  icon: _lib.customPropTypes.every([_lib.customPropTypes.disallow(['image']), _lib.customPropTypes.itemShorthand]),

  /** Shorthand for Image. */
  image: _lib.customPropTypes.every([_lib.customPropTypes.disallow(['icon']), _lib.customPropTypes.itemShorthand]),

  /** A ListItem can be clicked */
  onClick: _propTypes.default.func,

  /** A value for an ordered list. */
  value: _propTypes.default.string
});

_defineProperty(ListItem, "handledProps", ["active", "as", "children", "className", "content", "description", "disabled", "header", "icon", "image", "onClick", "value"]);

ListItem.create = (0, _lib.createShorthandFactory)(ListItem, function (content) {
  return {
    content: content
  };
});
var _default = ListItem;
exports.default = _default;

//# sourceMappingURL=ListItem.js.map