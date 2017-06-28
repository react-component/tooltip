import React from 'react';
import ReactDOM from 'react-dom';
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.less';

const styles = {
  display: 'inline-block',
  lineHeight: '40px',
  height: '40px',
  padding: '0 6px',
  textAlign: 'center',
  background: '#f6f6f6',
  marginRight: '1em',
  marginBottom: '1em',
  borderRadius: '6px',
};
const popupStyles = {
  width: '400px',
  height: '400px',
  lineHeight: '400px',
  textAlign: 'center',
};

const text = <div style={popupStyles}>很多提示文字很多提示文字很多提示文字很多提示文字</div>;

const Test = () => (
  <div>
    <Tooltip placement="left" overlay={text}>
      <a href="#" style={styles}>自动调整位置</a>
    </Tooltip>
    <Tooltip placement="left" overlay={text} autoAdjustOverflow={false}>
      <a href="#" style={styles}>不自动调整位置</a>
    </Tooltip>
    <br />
    <Tooltip placement="left" overlay={text} autoAdjustOverflow={{ adjustX: 1 }}>
      <a href="#" style={styles}>自定义需要调整位置方向</a>
    </Tooltip>
  </div>
);

ReactDOM.render(<Test />, document.getElementById('__react-content'));
