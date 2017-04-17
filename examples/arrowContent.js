import React from 'react';
import ReactDOM from 'react-dom';
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap_white.less';
const text = <span>提示文字</span>;
const styles = {
  display: 'inline-block',
  lineHeight: '40px',
  height: '40px',
  width: '80px',
  textAlign: 'center',
  background: '#f6f6f6',
  marginRight: '1em',
  marginBottom: '1em',
  borderRadius: '6px',
};

const Test = () => (
  <div>
    <Tooltip
      placement="left"
      overlay={text}
      arrowContent={<div className="rc-tooltip-arrow-inner"></div>}
    >
      <a href="#" style={styles}>左边</a>
    </Tooltip>
    <Tooltip
      placement="top"
      overlay={text}
      arrowContent={<div className="rc-tooltip-arrow-inner"></div>}
    >
      <a href="#" style={styles}>上边</a>
    </Tooltip>
    <Tooltip
      placement="bottom"
      overlay={text}
      arrowContent={<div className="rc-tooltip-arrow-inner"></div>}
    >
      <a href="#" style={styles}>下边</a>
    </Tooltip>
    <Tooltip
      placement="right"
      overlay={text}
      arrowContent={<div className="rc-tooltip-arrow-inner"></div>}
    >
      <a href="#" style={styles}>右边</a>
    </Tooltip>
    <br />
    <Tooltip
      placement="leftTop"
      overlay={text}
      arrowContent={<div className="rc-tooltip-arrow-inner"></div>}
    >
      <a href="#" style={styles}>左上</a>
    </Tooltip>
    <Tooltip
      placement="leftBottom"
      overlay={text}
      arrowContent={<div className="rc-tooltip-arrow-inner"></div>}
    >
      <a href="#" style={styles}>左下</a>
    </Tooltip>
    <Tooltip
      placement="rightTop"
      overlay={text}
      arrowContent={<div className="rc-tooltip-arrow-inner"></div>}
    >
      <a href="#" style={styles}>右上</a>
    </Tooltip>
    <Tooltip
      placement="rightBottom"
      overlay={text}
      arrowContent={<div className="rc-tooltip-arrow-inner"></div>}
    >
      <a href="#" style={styles}>右下</a>
    </Tooltip>
    <br />
    <Tooltip
      placement="topLeft"
      overlay={text}
      arrowContent={<div className="rc-tooltip-arrow-inner"></div>}
    >
      <a href="#" style={styles}>上左</a>
    </Tooltip>
    <Tooltip
      placement="topRight"
      overlay={text}
      arrowContent={<div className="rc-tooltip-arrow-inner"></div>}
    >
      <a href="#" style={styles}>上右</a>
    </Tooltip>
    <Tooltip
      placement="bottomLeft"
      overlay={text}
      arrowContent={<div className="rc-tooltip-arrow-inner"></div>}
    >
      <a href="#" style={styles}>下左</a>
    </Tooltip>
    <Tooltip
      placement="bottomRight"
      overlay={text}
      arrowContent={<div className="rc-tooltip-arrow-inner"></div>}
    >
      <a href="#" style={styles}>下右</a>
    </Tooltip>
  </div>
);

ReactDOM.render(<Test />, document.getElementById('__react-content'));
