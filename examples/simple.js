var React = require('react');
var Tooltip = require('rc-tooltip');
require('rc-tooltip/assets/bootstrap.css');
var assign = require('object-assign');
var packageJson = require('../package.json');

var style = `
.example-enter {
opacity: 0.01;
transition: opacity 0.4s ease-in;
}

.example-enter.example-enter-active {
  opacity: 1;
}

.example-leave {
  opacity: 1;
  transition: opacity 0.4s ease-in;
}

.example-leave.example-leave-active {
  opacity: 0.01;
}
`;

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

  render() {
    console.log(this.state);
    var trigger = this.state.trigger;
    return <div >
      <h1>{packageJson.name}@{packageJson.version}</h1>
      <style dangerouslySetInnerHTML={{__html: style}}></style>
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
          <input value='example' type='checkbox' onChange={this.onTransitionChange}/>
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
          trigger={Object.keys(this.state.trigger)}
          overlay={<span>i am a tooltip</span>} transitionName={this.state.transitionName}>
          <a href='#'>trigger</a>
        </Tooltip>
      </div>
    </div>;
  }
});

React.render(<Test/>, document.getElementById("__react-content"));
