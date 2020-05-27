"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var BrewManager = /*#__PURE__*/function () {
  function BrewManager() {
    (0, _classCallCheck2["default"])(this, BrewManager);
  }

  (0, _createClass2["default"])(BrewManager, [{
    key: "getBreweries",
    value: function () {
      var _getBreweries = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var breweries;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch('https://api.openbrewerydb.org/breweries').then(function (breweries) {
                  return breweries.json();
                }).then(function (breweries) {
                  return breweries;
                });

              case 2:
                breweries = _context.sent;
                return _context.abrupt("return", breweries);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getBreweries() {
        return _getBreweries.apply(this, arguments);
      }

      return getBreweries;
    }()
  }]);
  return BrewManager;
}();

var _default = BrewManager;
exports["default"] = _default;