
import React from 'react';
import ReactDOM from 'react-dom';
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.less';
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

const Test = React.createClass({
  render() {
    return (<div>
      <Tooltip placement="left" overlay={text}>
        <a href="#" style={styles}>左边</a>
      </Tooltip>
      <Tooltip placement="top" overlay={text}>
        <a href="#" style={styles}>上边</a>
      </Tooltip>
      <Tooltip placement="bottom" overlay={text}>
        <a href="#" style={styles}>下边</a>
      </Tooltip>
      <Tooltip placement="right" overlay={text}>
        <a href="#" style={styles}>右边</a>
      </Tooltip>
      <br />
      <Tooltip placement="leftTop" overlay={text}>
        <a href="#" style={styles}>左上</a>
      </Tooltip>
      <Tooltip placement="leftBottom" overlay={text}>
        <a href="#" style={styles}>左下</a>
      </Tooltip>
      <Tooltip placement="rightTop" overlay={text}>
        <a href="#" style={styles}>右上</a>
      </Tooltip>
      <Tooltip placement="rightBottom" overlay={text}>
        <a href="#" style={styles}>右下</a>
      </Tooltip>
      <br />
      <Tooltip placement="topLeft" overlay={text}>
        <a href="#" style={styles}>上左</a>
      </Tooltip>
      <Tooltip placement="topRight" overlay={text}>
        <a href="#" style={styles}>上右</a>
      </Tooltip>
      <Tooltip placement="bottomLeft" overlay={text}>
        <a href="#" style={styles}>下左</a>
      </Tooltip>
      <Tooltip placement="bottomRight" overlay={text}>
        <a href="#" style={styles}>下右</a>
      </Tooltip>
    </div>);
  },
});

ReactDOM.render(<Test/>, document.getElementById('__react-content'));
