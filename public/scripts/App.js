"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _Header = _interopRequireDefault(require("./components/Header"));

var _Reservation = _interopRequireDefault(require("./components/Reservation"));

require("./style/main.scss");

var _reportWebVitals = _interopRequireDefault(require("./reportWebVitals"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom.default.render( /*#__PURE__*/_react.default.createElement(_react.default.StrictMode, null, /*#__PURE__*/_react.default.createElement(_Header.default, null), /*#__PURE__*/_react.default.createElement(_Reservation.default, null)), document.getElementById("root"));

(0, _reportWebVitals.default)();
