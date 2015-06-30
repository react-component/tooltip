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
  handleVisibleChange(visible) {
    this.setState({
      visible: visible
    });
  },
  render() {
    return <div >
      <div style={{marginTop: 300, marginLeft: 100, marginBottom: 100}}>
        <Tooltip
          visible={this.state.visible}
          animation="zoom"
          onVisibleChange={this.handleVisibleChange}
          trigger="click"
          overlay={<span>i am a tooltip</span>}>
          <a href='#' onClick={preventDefault}>trigger</a>
        </Tooltip>
      </div>
    </div>;
  }
});

function preventDefault(e) {
  e.preventDefault();
}

React.render(<Test/>, document.getElementById("__react-content"));
