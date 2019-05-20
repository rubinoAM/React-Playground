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
 * A list can contain a sub list.
 */
function ListList(props) {
  var children = props.children,
      className = props.className,
      content = props.content;
  var rest = (0, _lib.getUnhandledProps)(ListList, props);
  var ElementType = (0, _lib.getElementType)(ListList, props);
  var classes = (0, _classnames.default)((0, _lib.useKeyOnly)(ElementType !== 'ul' && ElementType !== 'ol', 'list'), className);
  return _react.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), _lib.childrenUtils.isNil(children) ? content : children);
}

ListList.handledProps = ["as", "children", "className", "content"];
ListList.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Primary content. */
  children: _propTypes.default.node,

  /** Additional classes. */
  className: _propTypes.default.string,

  /** Shorthand for primary content. */
  content: _lib.customPropTypes.contentShorthand
};
var _default = ListList;
exports.default = _default;

//# sourceMappingURL=ListList.js.map