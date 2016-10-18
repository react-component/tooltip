import React from 'react';
import ReactDOM from 'react-dom';
import Tooltip from 'rc-tooltip';
const Popover = Tooltip;
import 'rc-tooltip/assets/bootstrap.less';

const panel = (<select>
  <option value="lucy"> lucy </option>
  <option value="eric"> eric </option>
  <option value="yiminghe"> yiminghe </option>
</select>);

const content = (
  <Popover overlay={panel} trigger="click">
    <button type="primary">Hover me</button>
  </Popover>
);

ReactDOM.render(
  <Popover overlay={content} title="Title">
    <button type="primary">Hover me</button>
  </Popover>
, document.getElementById('__react-content'));
