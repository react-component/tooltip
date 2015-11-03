'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.less';
const text = <span>提示文字</span>;

var A = (props)=> {
  return <a {...props} style={{
  display: 'inline-block',
  lineHeight: '40px',
  height: '40px',
  width: '80px',
  textAlign: 'center',
  background: '#f6f6f6',
  marginRight: '1em',
  marginBottom: '1em',
  borderRadius: '6px',
  }}/>
};

var Test = React.createClass({
  render() {
    return <div>
      <Tooltip placement="left" overlay={text}>
        <A href="#">左边</A>
      </Tooltip>
      <Tooltip placement="top" overlay={text}>
        <A href="#">上边</A>
      </Tooltip>
      <Tooltip placement="bottom" overlay={text}>
        <A href="#">下边</A>
      </Tooltip>
      <Tooltip placement="right" overlay={text}>
        <A href="#">右边</A>
      </Tooltip>
      <br />
      <Tooltip placement="leftTop" overlay={text}>
        <A href="#">左上</A>
      </Tooltip>
      <Tooltip placement="leftBottom" overlay={text}>
        <A href="#">左下</A>
      </Tooltip>
      <Tooltip placement="rightTop" overlay={text}>
        <A href="#">右上</A>
      </Tooltip>
      <Tooltip placement="rightBottom" overlay={text}>
        <A href="#">右下</A>
      </Tooltip>
      <br />
      <Tooltip placement="topLeft" overlay={text}>
        <A href="#">上左</A>
      </Tooltip>
      <Tooltip placement="topRight" overlay={text}>
        <A href="#">上右</A>
      </Tooltip>
      <Tooltip placement="bottomLeft" overlay={text}>
        <A href="#">下左</A>
      </Tooltip>
      <Tooltip placement="bottomRight" overlay={text}>
        <A href="#">下右</A>
      </Tooltip>
    </div>;
  }
});

function preventDefault(e) {
  e.preventDefault();
}

ReactDOM.render(<Test/>, document.getElementById("__react-content"));
