'use strict';

var React = require('react');
var Tooltip = require('rc-tooltip');
require('rc-tooltip/assets/bootstrap.css');
var assign = require('object-assign');
var packageJson = require('../package.json');
require('./anim.css');

var Test = React.createClass({
  getInitialState() {
    return {
      placement: 'right',
      trigger: {
        hover: 1
      }
    };
  },
  onPlacementChange(e) {
    this.setState({
      placement: e.target.value
    });
  },

  onTransitionChange(e) {
    this.setState({
      transitionName: e.target.checked ? e.target.value : ''
    });
  },

  onTriggerChange(e) {
    var trigger = assign({}, this.state.trigger);
    if (e.target.checked) {
      trigger[e.target.value] = 1;
    } else {
      delete trigger[e.target.value];
    }
    this.setState({
      trigger: trigger
    });
  },

  preventDefault(e) {
    e.preventDefault();
  },

  onVisibleChange(visible) {
    console.log('tooltip', visible);
  },

  render() {
    console.log(this.state);
    var trigger = this.state.trigger;
    return <div >
      <div style={{margin: '10px 20px'}}>
        <label>
          placement:
          <select value={this.state.placement} onChange={this.onPlacementChange}>
            <option>left</option>
            <option>right</option>
            <option>top</option>
            <option>bottom</option>
          </select>
        </label>
      &nbsp;&nbsp;&nbsp;&nbsp;
        <label>
          <input value='zoom-down' type='checkbox' onChange={this.onTransitionChange}  checked={this.state.transitionName ==='zoom-down'}/>
          transitionName
        </label>

      &nbsp;&nbsp;&nbsp;&nbsp;
        <label>
          trigger:
          <input value='hover' checked={trigger.hover} type='checkbox' onChange={this.onTriggerChange}/>
          hover
          <input value='focus' checked={trigger.focus} type='checkbox' onChange={this.onTriggerChange}/>
          focus
          <input value='click' checked={trigger.click} type='checkbox' onChange={this.onTriggerChange}/>
          click
        </label>
      </div>
      <div style={{margin: 100}}>
        <Tooltip placement={this.state.placement}
          renderPopupToBody={this.props.renderPopupToBody}
          trigger={Object.keys(this.state.trigger)}
          onVisibleChange={this.onVisibleChange}
          overlay={<span>i am a tooltip</span>}
          transitionName={this.state.transitionName}>
          <a href='#' onClick={this.preventDefault}>trigger</a>
        </Tooltip>
      </div>
    </div>;
  }
});

React.render(<div>
  <h1>{packageJson.name}@{packageJson.version}</h1>
  <h2>renderPopupToBody=true</h2>
  <Test/>
  <h2>renderPopupToBody=false</h2>
  <Test renderPopupToBody={false}/>
</div>, document.getElementById("__react-content"));
