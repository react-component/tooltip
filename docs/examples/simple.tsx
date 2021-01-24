import React, { Component } from 'react';
import Tooltip from 'rc-tooltip';
import '../../assets/bootstrap.less';
import { placements } from '../../src/placements';

class Test extends Component {
  state = {
    destroyTooltipOnHide: false,
    destroyTooltipOptions: [
      {
        name: "don't destroy",
        value: 0,
      },
      {
        name: 'destroy parent',
        value: 1,
      },
      {
        name: 'keep parent',
        value: 2,
      },
    ],
    placement: 'right',
    transitionName: 'rc-tooltip-zoom',
    trigger: {
      hover: 1,
    },
    offsetX: placements.right.offset[0],
    offsetY: placements.right.offset[1],
    overlayInnerStyle: undefined,
  };

  onPlacementChange = e => {
    const placement = e.target.value;
    const { offset } = placements[placement];
    this.setState({
      placement: e.target.value,
      offsetX: offset[0],
      offsetY: offset[1],
    });
  };

  onTransitionChange = e => {
    this.setState({
      transitionName: e.target.checked ? e.target.value : '',
    });
  };

  onTriggerChange = e => {
    const { trigger } = this.state;
    if (e.target.checked) {
      trigger[e.target.value] = 1;
    } else {
      delete trigger[e.target.value];
    }
    this.setState({
      trigger,
    });
  };

  onOffsetXChange = e => {
    const targetValue = e.target.value;
    this.setState({
      offsetX: targetValue || undefined,
    });
  };

  onOffsetYChange = e => {
    const targetValue = e.target.value;
    this.setState({
      offsetY: targetValue || undefined,
    });
  };

  onVisibleChange = visible => {
    console.log('tooltip', visible); // eslint-disable-line no-console
  };

  onDestroyChange = e => {
    const { value } = e.target;
    this.setState({
      destroyTooltipOnHide: [false, { keepParent: false }, { keepParent: true }][value],
    });
  };

  onOverlayInnerStyleChange = () => {
    this.setState(prevState => ({
      overlayInnerStyle: prevState.overlayInnerStyle ? undefined : { background: 'red' },
    }));
  };

  preventDefault = e => {
    e.preventDefault();
  };

  render() {
    const { state } = this;
    const { trigger } = state;
    return (
      <div>
        <div style={{ margin: '10px 20px' }}>
          <label>
            placement:
            <select value={this.state.placement} onChange={this.onPlacementChange}>
              {Object.keys(placements).map(p => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </label>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <label>
            <input
              value="rc-tooltip-zoom"
              type="checkbox"
              onChange={this.onTransitionChange}
              checked={this.state.transitionName === 'rc-tooltip-zoom'}
            />
            transitionName
          </label>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <label>
            destroyTooltipOnHide:
            <select onChange={this.onDestroyChange}>
              {this.state.destroyTooltipOptions.map(({ name, value }) => (
                <option key={value} value={value}>
                  {name}
                </option>
              ))}
            </select>
          </label>
          &nbsp;&nbsp;&nbsp;&nbsp; trigger:
          <label>
            <input
              value="hover"
              checked={trigger.hover}
              type="checkbox"
              onChange={this.onTriggerChange}
            />
            hover
          </label>
          <label>
            <input
              value="focus"
              checked={trigger.focus}
              type="checkbox"
              onChange={this.onTriggerChange}
            />
            focus
          </label>
          <label>
            <input
              value="click"
              checked={trigger.click}
              type="checkbox"
              onChange={this.onTriggerChange}
            />
            click
          </label>
          <br />
          <label>
            offsetX:
            <input
              type="text"
              value={state.offsetX}
              onChange={this.onOffsetXChange}
              style={{ width: 50 }}
            />
          </label>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <label>
            offsetY:
            <input
              type="text"
              value={state.offsetY}
              onChange={this.onOffsetYChange}
              style={{ width: 50 }}
            />
          </label>
          <label>
            <input
              value="overlayInnerStyle"
              checked={!!state.overlayInnerStyle}
              type="checkbox"
              onChange={this.onOverlayInnerStyleChange}
            />
            overlayInnerStyle(red background)
          </label>
        </div>
        <div style={{ margin: 100 }}>
          <Tooltip
            placement={this.state.placement}
            mouseEnterDelay={0}
            mouseLeaveDelay={0.1}
            destroyTooltipOnHide={this.state.destroyTooltipOnHide}
            trigger={Object.keys(this.state.trigger)}
            onVisibleChange={this.onVisibleChange}
            overlay={<div style={{ height: 50, width: 50 }}>i am a tooltip</div>}
            align={{
              offset: [this.state.offsetX, this.state.offsetY],
            }}
            transitionName={this.state.transitionName}
            overlayInnerStyle={state.overlayInnerStyle}
          >
            <div style={{ height: 100, width: 100, border: '1px solid red' }}>trigger</div>
          </Tooltip>
        </div>
      </div>
    );
  }
}

export default Test;
