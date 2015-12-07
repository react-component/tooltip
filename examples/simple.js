
import React from 'react';
import ReactDOM from 'react-dom';
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.less';
import assign from 'object-assign';

// do not use rc-tooltip/lib/placements
import placements from 'rc-tooltip/src/placements';

const Test = React.createClass({
  getInitialState() {
    const placement = 'right';
    const offset = placements[placement].offset;
    return {
      destroyTooltipOnHide: false,
      placement: placement,
      trigger: {
        hover: 1,
      },
      offsetX: offset[0],
      offsetY: offset[1],
    };
  },
  onPlacementChange(e) {
    const placement = e.target.value;
    const offset = placements[placement].offset;
    this.setState({
      placement: e.target.value,
      offsetX: offset[0],
      offsetY: offset[1],
    });
  },

  onTransitionChange(e) {
    this.setState({
      transitionName: e.target.checked ? e.target.value : '',
    });
  },

  onTriggerChange(e) {
    const trigger = assign({}, this.state.trigger);
    if (e.target.checked) {
      trigger[e.target.value] = 1;
    } else {
      delete trigger[e.target.value];
    }
    this.setState({
      trigger: trigger,
    });
  },

  onOffsetXChange(e) {
    const targetValue = e.target.value;
    this.setState({
      offsetX: targetValue ? targetValue : undefined,
    });
  },

  onOffsetYChange(e) {
    const targetValue = e.target.value;
    this.setState({
      offsetY: targetValue ? targetValue : undefined,
    });
  },

  onVisibleChange(visible) {
    console.log('tooltip', visible);
  },

  onDestroyCheck() {
    this.setState({
      destroyTooltipOnHide: !this.state.destroyTooltipOnHide,
    });
  },

  preventDefault(e) {
    e.preventDefault();
  },

  render() {
    const state = this.state;
    const trigger = state.trigger;
    return (<div>
      <div style={{margin: '10px 20px'}}>
        <label>
          placement:
          <select value={this.state.placement} onChange={this.onPlacementChange}>
            {Object.keys(placements).map(function(p) {
              return <option key={p} value={p}>{p}</option>;
            })}
          </select>
        </label>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <label>
          <input value="rc-tooltip-zoom" type="checkbox" onChange={this.onTransitionChange}
                 checked={this.state.transitionName === 'rc-tooltip-zoom'}/>
          transitionName
        </label>

        &nbsp;&nbsp;&nbsp;&nbsp;

        <label>
          <input type="checkbox" onChange={this.onDestroyCheck}
                 checked={this.state.destroyTooltipOnHide}/>
          destroyTooltipOnHide
        </label>

        &nbsp;&nbsp;&nbsp;&nbsp;

        trigger:

        <label>
          <input value="hover" checked={trigger.hover} type="checkbox" onChange={this.onTriggerChange}/>
          hover
        </label>
        <label>
          <input value="focus" checked={trigger.focus} type="checkbox" onChange={this.onTriggerChange}/>
          focus
        </label>
        <label>
          <input value="click" checked={trigger.click} type="checkbox" onChange={this.onTriggerChange}/>
          click
        </label>
        <br/>
        <label>
          offsetX:
          <input type="text" value={state.offsetX} onChange={this.onOffsetXChange} style={{width: 50}}/>
        </label>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <label>
          offsetY:
          <input type="text" value={state.offsetY} onChange={this.onOffsetYChange} style={{width: 50}}/>
        </label>
      </div>
      <div style={{margin: 100}}>
        <Tooltip placement={this.state.placement}
                 mouseEnterDelay={0}
                 mouseLeaveDelay={0.1}
                 destroyTooltipOnHide={this.state.destroyTooltipOnHide}
                 trigger={Object.keys(this.state.trigger)}
                 onVisibleChange={this.onVisibleChange}
                 overlay={<div style={{height: 50, width: 50}}>i am a tooltip</div>}
                 align={{
                   offset: [this.state.offsetX, this.state.offsetY],
                 }}
                 transitionName={this.state.transitionName}>
          <div style={{height: 100, width: 100, border: '1px solid red'}}>trigger</div>
        </Tooltip>
      </div>
    </div>);
  },
});

ReactDOM.render(<div>
  <Test />
</div>, document.getElementById('__react-content'));
