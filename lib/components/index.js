'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Button 组件参数说明：
 * - hasLabel(boolean): 选填，是否包含label项，默认false，
 * - labelFontSize(number): 选填，lable字体大小，默认14，
 * - items(array)：必填，对象数组，coverflow项，对象包含以下key：
 *   - id(number): 必填，用来标志item，以便click操作，
 *   - src(string): 必填，img url，
 *   - className(string): 选填，设置item calssname，
 *   - label(string): 选填，item label项，
 * - style(object): 可选，组件style，
 * - onClick(fuc): 可选，点击item回调,
 * - BoxWidth(number): 可选，container宽度，
 * - BoxHeight(number): 可选，container高度，
 * - ItemWidth(number): 可选，图片宽度，
 * - ItemHeight(number): 可选，图片高度，
 * - differWidth(number): 可选，item之间相隔width距离，默认40px
 * - differFromActive(number): 可选，activeitem左右相距离，默认40px
 */

var Coverflow = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(Coverflow, _Component);

  function Coverflow(props) {
    (0, _classCallCheck3.default)(this, Coverflow);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Coverflow.__proto__ || (0, _getPrototypeOf2.default)(Coverflow)).call(this, props));

    _this.state = {
      activeIndex: 0,
      activeId: props.items.length ? props.items[0].id : null
    };
    return _this;
  }

  (0, _createClass3.default)(Coverflow, [{
    key: 'handleClick',
    value: function handleClick(id, index) {
      var _state = this.state,
          activeId = _state.activeId,
          activeIndex = _state.activeIndex;
      // 点击active item无效

      if (activeId === id && activeIndex === index) return;
      this.setState({ activeId: id, activeIndex: index });
      // 回调 onClick事件
      if (this.props.onClick) this.props.onClick(index);
    }

    // sortByZindex(items, activeIndex) {
    //   if (!items.length) return items;
    //
    //   // 保留原有index
    //   const itemIndexs = items.map((item, index) => {
    //     item.index = index;
    //     return item;
    //   });
    //   let leftItems = itemIndexs.slice(0, activeIndex).map;
    //   let rightItems = itemIndexs.slice(activeIndex).reverse();
    //   return [].concat(leftItems, rightItems);
    // }

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          style = _props.style,
          items = _props.items,
          hasLabel = _props.hasLabel,
          boxWidth = _props.boxWidth,
          boxHeight = _props.boxHeight,
          itemWidth = _props.itemWidth,
          itemHeight = _props.itemHeight,
          differWidth = _props.differWidth,
          labelFontSize = _props.labelFontSize,
          differFromActive = _props.differFromActive;
      var _state2 = this.state,
          activeId = _state2.activeId,
          activeIndex = _state2.activeIndex;


      return _react2.default.createElement(
        'div',
        { className: 'cover-flow-container',
          style: (0, _extends3.default)({ width: boxWidth, height: boxHeight }, style) },
        items.map(function (item, index) {
          var maxZIndex = items.length;
          var differ = index - activeIndex;
          var differFromAct = !differ ? 0 : differ / Math.abs(differ) * differFromActive;
          var left = (boxWidth - itemWidth) / 2 + differ * differWidth + differFromAct;
          var top = (boxHeight - itemHeight) / 2;
          var zIndex = maxZIndex - Math.abs(differ);
          var transformText = item.id === activeId ? 'translate(' + left + 'px, ' + top + 'px) scale(1, 1)' : 'translate(' + left + 'px, ' + top + 'px) scale(0.7, 0.7)';
          var boxShadow = differ > 0 ? '15px 10px 20px rgba(0,0,0,0.7)' : '-15px 10px 20px rgba(0,0,0,0.7)';

          return _react2.default.createElement(
            'div',
            { key: item.id,
              onClick: function onClick() {
                return _this2.handleClick(item.id, index);
              },
              style: {
                width: itemWidth,
                height: itemHeight,
                zIndex: zIndex,
                transform: transformText,
                WebkitTransform: transformText,
                boxShadow: boxShadow
              },
              className: 'cover-flow-item ' + (item.className || '') + '\n            ' + (item.id === activeId ? 'cover-flow-item-active' : '') },
            _react2.default.createElement('img', { className: 'cover-flow-item-img', src: item.src }),
            hasLabel && _react2.default.createElement(
              'p',
              { className: 'cover-flow-item-label', style: { fontSize: labelFontSize + 'px' } },
              item.label
            )
          );
        })
      );
    }
  }]);
  return Coverflow;
}(_react.Component), _class.defaultProps = {
  hasLabel: false,
  labelFontSize: 14,
  items: [],
  style: {},
  onClick: null,
  boxWidth: 100,
  boxHeight: 100,
  itemWidth: 100,
  itemHeight: 100,
  differWidth: 40,
  differFromActive: 40
}, _class.propTypes = {
  hasLabel: _propTypes2.default.boolean,
  labelFontSize: _propTypes2.default.number,
  items: _propTypes2.default.array,
  style: _propTypes2.default.object,
  onClick: _propTypes2.default.func,
  boxWidth: _propTypes2.default.number,
  boxHeight: _propTypes2.default.number,
  itemWidth: _propTypes2.default.number,
  itemHeight: _propTypes2.default.number,
  differWidth: _propTypes2.default.number,
  differFromActive: _propTypes2.default.number
}, _temp);
exports.default = Coverflow;