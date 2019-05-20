"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _lib = require("../../lib");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * A list item can contain an icon.
 */
function ListIcon(props) {
  var className = props.className,
      verticalAlign = props.verticalAlign;
  var classes = (0, _classnames.default)((0, _lib.useVerticalAlignProp)(verticalAlign), className);
  var rest = (0, _lib.getUnhandledProps)(ListIcon, props);
  return _react.default.createElement(_Icon.default, _extends({}, rest, {
    className: classes
  }));
}

ListIcon.handledProps = ["className", "verticalAlign"];
ListIcon.propTypes = {
  /** Additional classes. */
  className: _propTypes.default.string,

  /** An element inside a list can be vertically aligned. */
  verticalAlign: _propTypes.default.oneOf(_lib.SUI.VERTICAL_ALIGNMENTS)
};
ListIcon.create = (0, _lib.createShorthandFactory)(ListIcon, function (name) {
  return {
    name: name
  };
});
var _default = ListIcon;
exports.default = _default;

//# sourceMappingURL=ListIcon.js.map