"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HeaderSmall = (function (_React$Component) {
  _inherits(HeaderSmall, _React$Component);

  function HeaderSmall() {
    _classCallCheck(this, HeaderSmall);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(HeaderSmall).apply(this, arguments));
  }

  _createClass(HeaderSmall, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "micro-header" },
        _react2.default.createElement(
          "a",
          { className: "micro-header__logo", href: "/", id: "ga-inlink-logo-homepage", title: "nib Private Health Insurance" },
          "nib Private Health Insurance"
        )
      );
    }
  }]);

  return HeaderSmall;
})(_react2.default.Component);

exports.default = HeaderSmall;
//# sourceMappingURL=index.js.map