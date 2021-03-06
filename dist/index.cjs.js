'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var styled = _interopDefault(require('styled-components'));
var cx = _interopDefault(require('classnames'));

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var buildStyles = function buildStyles() {
  var properties = [{
    key: 'm',
    name: 'margin'
  }, {
    key: 'p',
    name: 'padding'
  }];
  var sides = [{
    key: 't',
    name: 'top'
  }, {
    key: 'r',
    name: 'right'
  }, {
    key: 'b',
    name: 'bottom'
  }, {
    key: 'l',
    name: 'left'
  }];
  var sizes = [{
    key: '0',
    value: '0'
  }, {
    key: '1',
    value: '0.25rem'
  }, {
    key: '2',
    value: '0.5rem'
  }, {
    key: '3',
    value: '1rem'
  }, {
    key: '4',
    value: '1.5rem'
  }, {
    key: '5',
    value: '3rem'
  }];
  var classes = [];

  for (var a = 0; a < properties.length; a++) {
    var property = properties[a];

    for (var c = 0; c < sizes.length; c++) {
      var size = sizes[c];
      classes.push("\n        &.".concat(property.key, "-").concat(size.key, " {\n            ").concat(property.name, ": ").concat(size.value, " !important;\n        }\n        "));
    }
  }

  for (var _a = 0; _a < properties.length; _a++) {
    var _property = properties[_a];

    for (var b = 0; b < sides.length; b++) {
      var side = sides[b];

      for (var _c = 0; _c < sizes.length; _c++) {
        var _size = sizes[_c];
        classes.push("\n        &.".concat(_property.key).concat(side.key, "-").concat(_size.key, " {\n            ").concat(_property.name, "-").concat(side.name, ": ").concat(_size.value, " !important;\n        }\n        "));
      }
    }
  }

  return classes;
};

var classes = buildStyles();
var Styles = styled.div(_templateObject(), classes.join('\n'));

var Spacing = function Spacing(props) {
  var _cx;

  var classNames = cx((_cx = {}, _defineProperty(_cx, "p-".concat(props.p), !!props.p), _defineProperty(_cx, "m-".concat(props.m), !!props.m), _defineProperty(_cx, "pt-".concat(props.pt), !!props.pt), _defineProperty(_cx, "pr-".concat(props.pr), !!props.pr), _defineProperty(_cx, "pb-".concat(props.pb), !!props.pb), _defineProperty(_cx, "pl-".concat(props.pl), !!props.pl), _defineProperty(_cx, "mt-".concat(props.mt), !!props.mt), _defineProperty(_cx, "mr-".concat(props.mr), !!props.mr), _defineProperty(_cx, "mb-".concat(props.mb), !!props.mb), _defineProperty(_cx, "ml-".concat(props.ml), !!props.ml), _cx));
  return React.createElement(Styles, _extends({}, props, {
    className: classNames
  }));
};

var withSpacing = function withSpacing(Component) {
  return function (props) {
    return React.createElement(Spacing, _extends({
      as: Component
    }, props));
  };
};
Spacing.defaultProps = {
  p: null,
  m: null,
  pt: null,
  pr: null,
  pb: null,
  pl: null,
  mt: null,
  mr: null,
  mb: null,
  ml: null
};

exports.default = Spacing;
exports.withSpacing = withSpacing;
