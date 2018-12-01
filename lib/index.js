import { Component, createElement } from 'react';

var babelHelpers = {};




var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();





var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
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
};

var _extends = Object.assign || function (target) {
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



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};





















babelHelpers;

var styles = {
  base: {
    position: 'absolute'
  },
  top: {
    width: '100%',
    height: '10px',
    top: '-5px',
    left: '0px',
    cursor: 'row-resize'
  },
  right: {
    width: '10px',
    height: '100%',
    top: '0px',
    right: '-5px',
    cursor: 'col-resize'
  },
  bottom: {
    width: '100%',
    height: '10px',
    bottom: '-5px',
    left: '0px',
    cursor: 'row-resize'
  },
  left: {
    width: '10px',
    height: '100%',
    top: '0px',
    left: '-5px',
    cursor: 'col-resize'
  },

  topRight: {
    width: '20px',
    height: '20px',
    position: 'absolute',
    right: '-10px',
    top: '-10px',
    cursor: 'ne-resize'
  },
  bottomRight: {
    width: '20px',
    height: '20px',
    position: 'absolute',
    right: '-10px',
    bottom: '-10px',
    cursor: 'se-resize'
  },
  bottomLeft: {
    width: '20px',
    height: '20px',
    position: 'absolute',
    left: '-10px',
    bottom: '-10px',
    cursor: 'sw-resize'
  },
  topLeft: {
    width: '20px',
    height: '20px',
    position: 'absolute',
    left: '-10px',
    top: '-10px',
    cursor: 'nw-resize'
  },
  topCenter: {
    width: '20px',
    height: '20px',
    position: 'absolute',
    left: '50%',
    top: '-10px',
    marginLeft: '-10px',
    cursor: 'row-resize'
  },
  rightCenter: {
    width: '20px',
    height: '20px',
    position: 'absolute',
    top: '50%',
    right: '-10px',
    marginTop: '-10px',
    cursor: 'col-resize'
  },
  bottomCenter: {
    width: '20px',
    height: '20px',
    position: 'absolute',
    left: '50%',
    bottom: '-10px',
    marginLeft: '-10px',
    cursor: 'row-resize'
  },
  leftCenter: {
    width: '20px',
    height: '20px',
    position: 'absolute',
    top: '50%',
    left: '-10px',
    marginTop: '-10px',
    cursor: 'col-resize'
  },
  rotate: {
    width: '20px',
    height: '20px',
    position: 'absolute',
    left: '50%',
    top: '-30px',
    marginLeft: '-10px',
    cursor: 'url(data:image/png;base64,AAABAAEAFBQAAAEAIAC4BgAAFgAAACgAAAAUAAAAKAAAAAEAIAAAAAAAQAYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGZmZgRmZmYmZmZmdGZmZqlmZmbJZmZmzWZmZrFmZmZ+ZmZmLGZmZgYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABmZmYcaWlp/319ff+srKz/y8vL/97e3v/h4eH/0NDQ/7Kysv+BgYH/ampq/2ZmZioAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZmZmWHd3d/+1tbX/9vb2//////////////////////////////////r6+v++vr7/fHx8/2ZmZmwAAAAAAAAAAAAAAAAAAAAAAAAAAGZmZmKBgYH/2tra////////////7Ozs/9PT0/++vr7/u7u7/8fHx//i4uL////////////m5ub/jY2N/2ZmZnwAAAAAAAAAAAAAAABmZmY6eXl5/+Dg4P///////////8rKyv+IiIj/ZmZmtWZmZpNmZmaNZmZmo3V1df+vr6//8fHx///////v7+//iIiI/2ZmZmgAAAAAZmZmBGlpaf/IyMj///////39/f+2trb/a2tr/2ZmZjwAAAAAAAAAAAAAAAAAAAAAZmZmGGZmZn6Ojo7/7u7u///////k5OT/cnJy/wAAAABmZmY8i4uL///////9/f3/zMzM/2lpaf9mZmYcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGZmZnqgoKD/+fn5/9ra2v9tbW3/AAAAAGZmZpnCwsL///////Hx8f+CgoL/ZmZmQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZmZmBGhoaP/BwcH/dHR0/7Kysp8AAAAAZmZm1ebm5v//////1tbW/2ZmZrsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG1tbf+/v7+dAAAAAAAAAABmZmbl7+/v//39/f++vr7/ZmZmkwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZmZmCGZmZuPu7u7//f39/7u7u/9mZmaPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZmZm0+Xl5f//////0NDQ/2ZmZrEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABmZmabwsLC///////r6+v/dXV1/2ZmZiYAAAAAAAAAAAAAAAAAAAAAAAAAAGZmZiJ7e3v/aGho/2hoaP9oaGj/aGho/2hoaP9oaGj/AAAAAGZmZjyKior//v7+//v7+/+8vLz/ZmZmkQAAAAAAAAAAAAAAAAAAAAAAAAAAZmZmJHx8fP///////////////////////////2ZmZv8AAAAAZmZmBGhoaP/Jycn///////j4+P+jo6P/ZmZmi2ZmZh4AAAAAAAAAAAAAAAAAAAAAAAAAAHR0dP/j4+P/////////////////ZmZm/wAAAAAAAAAAZmZmPHp6ev/i4uL///////j4+P+4uLj/dXV1/2ZmZptmZmZ6ZmZmeGZmZpdxcXH/qamp//z8/P////////////////9mZmb/AAAAAAAAAAAAAAAAZmZmZoKCgv/e3t7////////////h4eH/w8PD/7CwsP+vr6//wMDA/97e3v/+/v7///////7+/v///////////2ZmZv8AAAAAAAAAAAAAAAAAAAAAZmZmXnl5ef+2trb/9fX1/////////////v7+//39/f/////////////////a2tr/k5OT/3V1df/T09P/ZmZmtwAAAAAAAAAAAAAAAAAAAAAAAAAAZmZmHmlpaf98fHz/r6+v/9TU1P/k5OT/5ubm/9zc3P/BwcH/jo6O/25ubv8AAAAAAAAAAG1tbf9mZmZMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZmZmBGZmZiRmZmZ6ZmZmuWZmZtNmZmbVZmZmxWZmZpdmZmZCZmZmDAAAAAAAAAAAZmZmDAAAAAAAAAAA/w/wAPgB8ADwAPAA4ABwAMAAMACB/BAAg/4QAAf+EAAH/zAAB//wAAf/8AAH//AAB/AQAIPwEACB+BAAwGAQAOAAEADwABAA+AGwAP8H8AA=) 10 10,default'
  },
  rotateLine: {
    position: 'absolute',
    width: '2px',
    height: '23px',
    top: '7px',
    left: '50%',
    marginLeft: '-1px',
    backgroundColor: '#4cae4c',
    zIndex: -1
  }
};

var Resizer = (function (props) {
  var direction = props.direction;
  var children = null;
  if (direction === 'rotate') {
    children = createElement('i', { style: _extends({}, styles.rotateLine, props.replaceRotateLineStyles || {}) });
  }
  return createElement(
    'div',
    {
      className: props.className,
      style: _extends({}, styles.base, styles[props.direction], props.replaceStyles || {}),
      onMouseDown: function onMouseDown(e) {
        props.onResizeStart(e, props.direction);
      },
      onTouchStart: function onTouchStart(e) {
        props.onResizeStart(e, props.direction);
      } },
    children
  );
});

var prefixes = ['Moz', 'Webkit', 'O', 'ms'];
function getPrefix() {
  var prop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'transform';

  // Checking specifically for 'window.document' is for pseudo-browser server-side
  // environments that define 'window' as the global context.
  // E.g. React-rails (see https://github.com/reactjs/react-rails/pull/84)
  if (typeof window === 'undefined' || typeof window.document === 'undefined') return '';

  var style = window.document.documentElement.style;

  if (prop in style) return '';

  for (var i = 0; i < prefixes.length; i++) {
    if (browserPrefixToKey(prop, prefixes[i]) in style) return prefixes[i];
  }

  return '';
}

function browserPrefixToKey(prop, prefix) {
  return prefix ? '' + prefix + kebabToTitleCase(prop) : prop;
}



function kebabToTitleCase(str) {
  var out = '';
  var shouldCapitalize = true;
  for (var i = 0; i < str.length; i++) {
    if (shouldCapitalize) {
      out += str[i].toUpperCase();
      shouldCapitalize = false;
    } else if (str[i] === '-') {
      shouldCapitalize = true;
    } else {
      out += str[i];
    }
  }
  return out;
}

// Default export is the prefix itself, like 'Moz', 'Webkit', etc
// Note that you may have to re-test for certain things; for instance, Chrome 50
// can handle unprefixed `transform`, but not unprefixed `user-select`
var browserPrefix = getPrefix();

function createCSSTransform(_ref) {
  var x = _ref.x,
      y = _ref.y,
      degree = _ref.degree;

  // Replace unitless items with px
  var cssStyle = '';
  if (degree) {
    cssStyle = 'translate(' + x + 'px,' + y + 'px) rotate(' + degree + 'deg)';
  } else if (x || y) {
    cssStyle = 'translate(' + x + 'px,' + y + 'px)';
  }
  return defineProperty({}, browserPrefixToKey('transform', browserPrefix), cssStyle);
}

var userSelectNone = {
  userSelect: 'none',
  MozUserSelect: 'none',
  WebkitUserSelect: 'none',
  MsUserSelect: 'none'
};

var userSelectAuto = {
  userSelect: 'auto',
  MozUserSelect: 'auto',
  WebkitUserSelect: 'auto',
  MsUserSelect: 'auto'
};

var clamp = function clamp(n, min, max) {
  return Math.max(Math.min(n, max), min);
};
var snap = function snap(n, size) {
  return Math.round(n / size) * size;
};

var getStringSize = function getStringSize(n) {
  if (n.toString().endsWith('px')) return n.toString();
  if (n.toString().endsWith('%')) return n.toString();
  return n + 'px';
};

var baseSizeId = 0;

var definedProps = ['style', 'className', 'grid', 'bounds', 'size', 'defaultSize', 'minWidth', 'minHeight', 'maxWidth', 'maxHeight', 'lockAspectRatio', 'enable', 'handleStyles', 'handleClasses', 'handleWrapperStyle', 'handleWrapperClass', 'children', 'onResizeStart', 'onResize', 'onResizeStop', 'position'];

var Resizable = function (_React$Component) {
  inherits(Resizable, _React$Component);

  function Resizable(props) {
    classCallCheck(this, Resizable);

    var _this = possibleConstructorReturn(this, (Resizable.__proto__ || Object.getPrototypeOf(Resizable)).call(this, props));

    _this.state = {
      isResizing: false,
      width: typeof (_this.propsSize && _this.propsSize.width) === 'undefined' ? 'auto' : _this.propsSize && _this.propsSize.width,
      height: typeof (_this.propsSize && _this.propsSize.height) === 'undefined' ? 'auto' : _this.propsSize && _this.propsSize.height,
      direction: 'right',
      original: {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      },
      degree: 0
    };

    _this.updateExtendsProps(props);
    _this.onResizeStart = _this.onResizeStart.bind(_this);
    _this.onMouseMove = _this.onMouseMove.bind(_this);
    _this.onMouseUp = _this.onMouseUp.bind(_this);
    _this.baseSizeId = '__resizable' + baseSizeId;
    baseSizeId += 1;

    if (typeof window !== 'undefined') {
      window.addEventListener('mouseup', _this.onMouseUp);
      window.addEventListener('mousemove', _this.onMouseMove);
      window.addEventListener('touchmove', _this.onMouseMove);
      window.addEventListener('touchend', _this.onMouseUp);
    }
    return _this;
  }

  createClass(Resizable, [{
    key: 'updateExtendsProps',
    value: function updateExtendsProps(props) {
      this.extendsProps = Object.keys(props).reduce(function (acc, key) {
        if (definedProps.includes(key)) return acc;
        acc[key] = props[key];
        return acc;
      }, {});
    }
  }, {
    key: 'getParentSize',
    value: function getParentSize() {
      var base = document.getElementById(this.baseSizeId);
      if (!base) return { width: window.innerWidth, height: window.innerHeight };
      return {
        width: base.offsetWidth,
        height: base.offsetHeight
      };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var size = this.size;
      this.setState({
        width: this.state.width || size.width,
        height: this.state.height || size.height
      });
      var element = document.createElement('div');
      element.id = this.baseSizeId;
      element.style.width = '100%';
      element.style.height = '100%';
      element.style.position = 'relative';
      element.style.transform = 'scale(0, 0)';
      element.style.left = '-2147483647px';
      var parent = this.parentNode;
      if (!(parent instanceof HTMLElement)) return;
      parent.appendChild(element);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(next) {
      this.updateExtendsProps(next);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (typeof window !== 'undefined') {
        window.removeEventListener('mouseup', this.onMouseUp);
        window.removeEventListener('mousemove', this.onMouseMove);
        window.removeEventListener('touchmove', this.onMouseMove);
        window.removeEventListener('touchend', this.onMouseUp);

        var parent = this.parentNode;
        var base = document.getElementById(this.baseSizeId);
        if (!base) return;
        if (!(parent instanceof HTMLElement) || !(base instanceof Node)) return;
        parent.removeChild(base);
      }
    }
  }, {
    key: 'onResizeStart',
    value: function onResizeStart(event, direction) {
      var clientX = 0;
      var clientY = 0;
      if (event.nativeEvent instanceof MouseEvent) {
        clientX = event.nativeEvent.clientX;
        clientY = event.nativeEvent.clientY;

        // When user click with right button the resize is stuck in resizing mode
        // until users clicks again, dont continue if right click is used.
        if (event.nativeEvent.which === 3) {
          return;
        }
      } else if (event.nativeEvent instanceof TouchEvent) {
        clientX = event.nativeEvent.touches[0].clientX;
        clientY = event.nativeEvent.touches[0].clientY;
      }
      if (this.props.onResizeStart) {
        this.props.onResizeStart(event, direction, this.resizable);
      }
      this.setState({
        original: {
          x: clientX,
          y: clientY,
          width: this.size.width,
          height: this.size.height
        },
        isResizing: true,
        direction: direction
      });
    }
  }, {
    key: 'onMouseMove',
    value: function onMouseMove(event) {
      var _this2 = this;

      if (!this.state.isResizing) return;
      var clientX = event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
      var clientY = event instanceof MouseEvent ? event.clientY : event.touches[0].clientY;
      var _state = this.state,
          direction = _state.direction,
          original = _state.original,
          width = _state.width,
          height = _state.height;
      var lockAspectRatio = this.props.lockAspectRatio;
      var _props = this.props,
          maxWidth = _props.maxWidth,
          maxHeight = _props.maxHeight,
          minWidth = _props.minWidth,
          minHeight = _props.minHeight;

      // TODO: refactor

      var parentSize = this.getParentSize();
      if (maxWidth && typeof maxWidth === 'string' && maxWidth.endsWith('%')) {
        var _ratio = Number(maxWidth.replace('%', '')) / 100;
        maxWidth = parentSize.width * _ratio;
      }
      if (maxHeight && typeof maxHeight === 'string' && maxHeight.endsWith('%')) {
        var _ratio2 = Number(maxHeight.replace('%', '')) / 100;
        maxHeight = parentSize.height * _ratio2;
      }
      if (minWidth && typeof minWidth === 'string' && minWidth.endsWith('%')) {
        var _ratio3 = Number(minWidth.replace('%', '')) / 100;
        minWidth = parentSize.width * _ratio3;
      }
      if (minHeight && typeof minHeight === 'string' && minHeight.endsWith('%')) {
        var _ratio4 = Number(minHeight.replace('%', '')) / 100;
        minHeight = parentSize.height * _ratio4;
      }
      maxWidth = typeof maxWidth === 'undefined' ? undefined : Number(maxWidth);
      maxHeight = typeof maxHeight === 'undefined' ? undefined : Number(maxHeight);
      minWidth = typeof minWidth === 'undefined' ? undefined : Number(minWidth);
      minHeight = typeof minHeight === 'undefined' ? undefined : Number(minHeight);

      var ratio = original.height / original.width;
      var newWidth = original.width;
      var newHeight = original.height;
      if (/right/i.test(direction)) {
        newWidth = original.width + (clientX - original.x);
        if (lockAspectRatio) newHeight = newWidth * ratio;
      }
      if (/left/i.test(direction)) {
        newWidth = original.width - (clientX - original.x);
        if (lockAspectRatio) newHeight = newWidth * ratio;
      }
      if (/bottom/i.test(direction)) {
        newHeight = original.height + (clientY - original.y);
        if (lockAspectRatio) newWidth = newHeight / ratio;
      }
      if (/top/i.test(direction)) {
        newHeight = original.height - (clientY - original.y);
        if (lockAspectRatio) newWidth = newHeight / ratio;
      }

      var degree = this.state.degree;
      if (/rotate/i.test(direction)) {

        var rect = this.resizable.getBoundingClientRect(),
            center_x = (rect.left + rect.right) / 2,
            center_y = (rect.top + rect.bottom) / 2,
            radians = Math.atan2(clientX - center_x, clientY - center_y);

        console.log(rect, center_x);

        degree = Math.round(radians * (180 / Math.PI) * -1 + 100) + 80;
        var _position = this.props.position;

        var _style = null;
        if (_position) {
          var _x = _position.x,
              _y = _position.y;

          _style = createCSSTransform({ x: _x, y: _y, degree: this.state.degree });
        }

        if (_style) {
          Object.keys(_style).map(function (key) {
            if (_style && key && _style[key]) {
              _this2.resizable.style[key] = _style[key];
            }
          });
        }
      }

      if (this.props.bounds === 'parent') {
        var parent = this.parentNode;
        if (parent instanceof HTMLElement) {
          var parentRect = parent.getBoundingClientRect();
          var parentLeft = parentRect.left;
          var parentTop = parentRect.top;

          var _resizable$getBoundin = this.resizable.getBoundingClientRect(),
              _left = _resizable$getBoundin.left,
              _top = _resizable$getBoundin.top;

          var boundWidth = parent.offsetWidth + (parentLeft - _left);
          var boundHeight = parent.offsetHeight + (parentTop - _top);
          maxWidth = maxWidth && maxWidth < boundWidth ? maxWidth : boundWidth;
          maxHeight = maxHeight && maxHeight < boundHeight ? maxHeight : boundHeight;
        }
      } else if (this.props.bounds === 'window') {
        if (typeof window !== 'undefined') {
          var _resizable$getBoundin2 = this.resizable.getBoundingClientRect(),
              _left2 = _resizable$getBoundin2.left,
              _top2 = _resizable$getBoundin2.top;

          var _boundWidth = window.innerWidth - _left2;
          var _boundHeight = window.innerHeight - _top2;
          maxWidth = maxWidth && maxWidth < _boundWidth ? maxWidth : _boundWidth;
          maxHeight = maxHeight && maxHeight < _boundHeight ? maxHeight : _boundHeight;
        }
      } else if (this.props.bounds instanceof HTMLElement) {
        var targetRect = this.props.bounds.getBoundingClientRect();
        var targetLeft = targetRect.left;
        var targetTop = targetRect.top;

        var _resizable$getBoundin3 = this.resizable.getBoundingClientRect(),
            _left3 = _resizable$getBoundin3.left,
            _top3 = _resizable$getBoundin3.top;

        if (!(this.props.bounds instanceof HTMLElement)) return;
        var _boundWidth2 = this.props.bounds.offsetWidth + (targetLeft - _left3);
        var _boundHeight2 = this.props.bounds.offsetHeight + (targetTop - _top3);
        maxWidth = maxWidth && maxWidth < _boundWidth2 ? maxWidth : _boundWidth2;
        maxHeight = maxHeight && maxHeight < _boundHeight2 ? maxHeight : _boundHeight2;
      }

      var computedMinWidth = typeof minWidth === 'undefined' || minWidth < 10 ? 10 : minWidth;
      var computedMaxWidth = typeof maxWidth === 'undefined' || maxWidth < 0 ? newWidth : maxWidth;
      var computedMinHeight = typeof minHeight === 'undefined' || minHeight < 10 ? 10 : minHeight;
      var computedMaxHeight = typeof maxHeight === 'undefined' || maxHeight < 0 ? newHeight : maxHeight;

      if (lockAspectRatio) {
        var lockedMinWidth = computedMinWidth > computedMinHeight / ratio ? computedMinWidth : computedMinHeight / ratio;
        var lockedMaxWidth = computedMaxWidth < computedMaxHeight / ratio ? computedMaxWidth : computedMaxHeight / ratio;
        var lockedMinHeight = computedMinHeight > computedMinWidth * ratio ? computedMinHeight : computedMinWidth * ratio;
        var lockedMaxHeight = computedMaxHeight < computedMaxWidth * ratio ? computedMaxHeight : computedMaxWidth * ratio;
        newWidth = clamp(newWidth, lockedMinWidth, lockedMaxWidth);
        newHeight = clamp(newHeight, lockedMinHeight, lockedMaxHeight);
      } else {
        newWidth = clamp(newWidth, computedMinWidth, computedMaxWidth);
        newHeight = clamp(newHeight, computedMinHeight, computedMaxHeight);
      }
      if (this.props.grid) {
        newWidth = snap(newWidth, this.props.grid[0]);
      }
      if (this.props.grid) {
        newHeight = snap(newHeight, this.props.grid[1]);
      }

      var delta = {
        width: newWidth - original.width,
        height: newHeight - original.height,
        newWidth: newWidth,
        newHeight: newHeight,
        degree: degree
      };

      if (width && typeof width === 'string' && width.endsWith('%')) {
        var percent = newWidth / parentSize.width * 100;
        newWidth = percent + '%';
      }

      if (height && typeof height === 'string' && height.endsWith('%')) {
        var _percent = newHeight / parentSize.height * 100;
        newHeight = _percent + '%';
      }

      this.setState({
        width: width !== 'auto' || typeof this.props.width === 'undefined' ? newWidth : 'auto',
        height: height !== 'auto' || typeof this.props.height === 'undefined' ? newHeight : 'auto',
        degree: degree
      });

      if (this.props.onResize) {
        this.props.onResize(event, direction, this.resizable, delta);
      }
    }
  }, {
    key: 'onMouseUp',
    value: function onMouseUp(event) {
      var _state2 = this.state,
          isResizing = _state2.isResizing,
          direction = _state2.direction,
          original = _state2.original,
          degree = _state2.degree;

      if (!isResizing) return;
      var delta = {
        width: this.size.width - original.width,
        height: this.size.height - original.height,
        newWidth: this.size.width,
        newHeight: this.size.height,
        degree: degree
      };
      if (this.props.onResizeStop) {
        this.props.onResizeStop(event, direction, this.resizable, delta);
      }
      if (this.props.size) {
        this.setState(this.props.size);
      }
      this.setState({ isResizing: false });
    }
  }, {
    key: 'updateSize',
    value: function updateSize(size) {
      this.setState({ width: size.width, height: size.height });
    }
  }, {
    key: 'renderResizer',
    value: function renderResizer() {
      var _this3 = this;

      var _props2 = this.props,
          enable = _props2.enable,
          handleStyles = _props2.handleStyles,
          handleClasses = _props2.handleClasses,
          handleWrapperStyle = _props2.handleWrapperStyle,
          handleWrapperClass = _props2.handleWrapperClass;

      if (!enable) return null;
      var resizers = Object.keys(enable).map(function (dir) {
        if (enable[dir] !== false) {
          return createElement(Resizer, {
            key: dir,
            direction: dir,
            onResizeStart: _this3.onResizeStart,
            replaceStyles: handleStyles && handleStyles[dir],
            className: handleClasses && handleClasses[dir]
          });
        }
        return null;
      });

      // #93 Wrap the resize box in span (will not break 100% width/height)
      return createElement(
        'span',
        {
          className: handleWrapperClass,
          style: handleWrapperStyle
        },
        resizers
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var userSelect = this.state.isResizing ? userSelectNone : userSelectAuto;

      return createElement(
        'div',
        _extends({
          ref: function ref(c) {
            _this4.resizable = c;
          },
          style: _extends({
            position: 'relative'
          }, userSelect, this.props.style, this.sizeStyle, {
            maxWidth: this.props.maxWidth,
            maxHeight: this.props.maxHeight,
            minWidth: this.props.minWidth,
            minHeight: this.props.minHeight,
            boxSizing: 'border-box'
          }),
          className: this.props.className
        }, this.extendsProps),
        this.props.children,
        this.renderResizer()
      );
    }
  }, {
    key: 'parentNode',
    get: function get$$1() {
      return this.resizable.parentNode;
    }
  }, {
    key: 'propsSize',
    get: function get$$1() {
      return this.props.size || this.props.defaultSize;
    }
  }, {
    key: 'degree',
    get: function get$$1() {
      return this.state.degree;
    }
  }, {
    key: 'size',
    get: function get$$1() {
      var width = 0;
      var height = 0;
      if (typeof window !== 'undefined') {
        width = this.resizable.offsetWidth;
        height = this.resizable.offsetHeight;
      }
      return { width: width, height: height };
    }
  }, {
    key: 'sizeStyle',
    get: function get$$1() {
      var _this5 = this;

      var size = this.props.size;

      var getSize = function getSize(key) {
        if (typeof _this5.state[key] === 'undefined' || _this5.state[key] === 'auto') return 'auto';
        if (_this5.propsSize && _this5.propsSize[key] && _this5.propsSize[key].toString().endsWith('%')) {
          if (_this5.state[key].toString().endsWith('%')) return _this5.state[key].toString();
          var parentSize = _this5.getParentSize();
          var value = Number(_this5.state[key].toString().replace('px', ''));
          var percent = value / parentSize[key] * 100;
          return percent + '%';
        }
        return getStringSize(_this5.state[key]);
      };
      var width = size && size.width && !this.state.isResizing ? getStringSize(size.width) : getSize('width');
      var height = size && size.height && !this.state.isResizing ? getStringSize(size.height) : getSize('height');
      return { width: width, height: height };
    }
  }]);
  return Resizable;
}(Component);

Resizable.defaultProps = {
  onResizeStart: function onResizeStart() {},
  onResize: function onResize() {},
  onResizeStop: function onResizeStop() {},
  enable: {
    top: true,
    right: true,
    bottom: true,
    left: true,
    topRight: true,
    bottomRight: true,
    bottomLeft: true,
    topLeft: true,
    topCenter: true,
    rightCenter: true,
    bottomCenter: true,
    leftCenter: true,
    rotate: true
  },
  style: {},
  grid: [1, 1],
  lockAspectRatio: false,
  position: { x: 0, y: 0 }
};

export default Resizable;
//# sourceMappingURL=index.js.map
