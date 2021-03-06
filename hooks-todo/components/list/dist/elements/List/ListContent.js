"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _lib = require("../../lib");

var _ListDescription = _interopRequireDefault(require("./ListDescription"));

var _ListHeader = _interopRequireDefault(require("./ListHeader"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * A list item can contain a content.
 */
function ListContent(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      description = props.description,
      floated = props.floated,
      header = props.header,
      verticalAlign = props.verticalAlign;
  var classes = (0, _classnames.default)((0, _lib.useValueAndKey)(floated, 'floated'), (0, _lib.useVerticalAlignProp)(verticalAlign), 'content', className);
  var rest = (0, _lib.getUnhandledProps)(ListContent, props);
  var ElementType = (0, _lib.getElementType)(ListContent, props);

  if (!_lib.childrenUtils.isNil(children)) {
    return _react.default.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), children);
  }

  return _react.default.createElement(ElementType, _extends({}, rest, {
    className: classes
  }), _ListHeader.default.create(header), _ListDescription.default.create(description), content);
}

ListContent.handledProps = ["as", "children", "className", "content", "description", "floated", "header", "verticalAlign"];
ListContent.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Primary content. */
  children: _propTypes.default.node,

  /** Additional classes. */
  className: _propTypes.default.string,

  /** Shorthand for primary content. */
  content: _lib.customPropTypes.contentShorthand,

  /** Shorthand for ListDescription. */
  description: _lib.customPropTypes.itemShorthand,

  /** An list content can be floated left or right. */
  floated: _propTypes.default.oneOf(_lib.SUI.FLOATS),

  /** Shorthand for ListHeader. */
  header: _lib.customPropTypes.itemShorthand,

  /** An element inside a list can be vertically aligned. */
  verticalAlign: _propTypes.default.oneOf(_lib.SUI.VERTICAL_ALIGNMENTS)
};
ListContent.create = (0, _lib.createShorthandFactory)(ListContent, function (content) {
  return {
    content: content
  };
});
var _default = ListContent;
exports.default = _default;

//# sourceMappingURL=ListContent.js.map