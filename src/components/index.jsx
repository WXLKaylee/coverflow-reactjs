import React, { Component } from 'react';
import PropTypes from 'prop-types';


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

export default class Coverflow extends Component {
  static defaultProps = {
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
    differFromActive: 40,
  }

  static propTypes = {
    hasLabel: PropTypes.boolean,
    labelFontSize: PropTypes.number,
    items: PropTypes.array,
    style: PropTypes.object,
    onClick: PropTypes.func,
    boxWidth: PropTypes.number,
    boxHeight: PropTypes.number,
    itemWidth: PropTypes.number,
    itemHeight: PropTypes.number,
    differWidth: PropTypes.number,
    differFromActive: PropTypes.number,
  }

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      activeId: props.items.length ? props.items[0].id : null
    }
  }

  handleClick(id, index) {
    const { activeId, activeIndex } = this.state;
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

  render() {
    const { style, items, hasLabel, boxWidth, boxHeight,
    itemWidth, itemHeight, differWidth, labelFontSize, differFromActive } = this.props;
    const { activeId, activeIndex } = this.state;

    return (
      <div className="cover-flow-container"
        style={ { width: boxWidth, height: boxHeight, ...style } }>
        { items.map((item, index) => {
          const maxZIndex = items.length;
          const differ = index - activeIndex;
          const differFromAct = !differ ? 0 : differ / Math.abs(differ) * differFromActive;
          const left = (boxWidth - itemWidth) / 2 + differ * differWidth + differFromAct;
          const top = (boxHeight - itemHeight) / 2;
          const zIndex = maxZIndex - Math.abs(differ);
          const transformText = item.id === activeId
            ? `translate(${left}px, ${top}px) scale(1, 1)`
            : `translate(${left}px, ${top}px) scale(0.7, 0.7)`;
          const boxShadow = differ > 0 ?
            '15px 10px 20px rgba(0,0,0,0.7)' : '-15px 10px 20px rgba(0,0,0,0.7)';


          return (<div key={ item.id }
            onClick={ () => this.handleClick(item.id, index) }
            style={ {
              width: itemWidth,
              height: itemHeight,
              zIndex,
              transform: transformText,
              WebkitTransform: transformText,
              boxShadow,
            } }
            className={ `cover-flow-item ${item.className || ''}
            ${item.id === activeId ? 'cover-flow-item-active' : ''}` }>
            <img className="cover-flow-item-img" src={ item.src } />
            { hasLabel && <p className="cover-flow-item-label" style={ { fontSize: `${labelFontSize}px` } }>{ item.label }</p> }
          </div>);
        }) }
      </div>
    );
  }
}
