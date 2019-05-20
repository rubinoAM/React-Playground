"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _lib = require("../../lib");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * A list item can contain a description.
 */
function ListDescription(props) {
  var children = props.children,
      className = props.className,
      content = props.content;
  var classes = (0, _classnames.default)(className, 'description');
  var rest = (0, _lib.getUnhandledProps)(ListDescription, props);
  var ElementType = (0, _lib.getElementType)(ListDescription, props);
  return _react.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), _lib.childrenUtils.isNil(children) ? content : children);
}

ListDescription.handledProps = ["as", "children", "className", "content"];
ListDescription.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Primary content. */
  children: _propTypes.default.node,

  /** Additional classes. */
  className: _propTypes.default.string,

  /** Shorthand for primary content. */
  content: _lib.customPropTypes.contentShorthand
};
ListDescription.create = (0, _lib.createShorthandFactory)(ListDescription, function (content) {
  return {
    content: content
  };
});
var _default = ListDescription;
exports.default = _default;

//# sourceMappingURL=ListDescription.js.map