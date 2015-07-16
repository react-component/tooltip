'use strict';

var React = require('react');
var Tooltip = require('rc-tooltip');
require('rc-tooltip/assets/bootstrap.css');

var Test = React.createClass({
  getInitialState() {
    return {
      visible: false
    };
  },
  handleDestroy(){
    this.setState({
      destroy:true
    });
  },
  handleChange(e){
    this.setState({
      visible:!e.target.value
    });
  },
  render() {
    if(this.state.destroy){
      return null;
    }
    return <div >
      <div style={{marginTop: 100, marginLeft: 100, marginBottom: 100}}>
        <Tooltip
          visible={this.state.visible}
          animation="zoom"
          trigger=""
          overlay={<span>必填哦</span>}>
          <input onChange={this.handleChange}/>
        </Tooltip>
      </div>
      <button onClick={this.handleDestroy}>destroy</button>
    </div>;
  }
});

React.render(<Test/>, document.getElementById("__react-content"));
