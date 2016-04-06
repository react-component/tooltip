import React from 'react';
import ReactDOM from 'react-dom';
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.less';

function preventDefault(e) {
  e.preventDefault();
}

const Test = React.createClass({
  getInitialState() {
    return {
      visible: false,
    };
  },
  onVisibleChange(visible) {
    this.setState({
      visible,
    });
  },
  onDestroy() {
    this.setState({
      destroy: true,
    });
  },
  render() {
    if (this.state.destroy) {
      return null;
    }
    return (<div>
      <div style={{ marginTop: 300, marginLeft: 100, marginBottom: 100 }}>
        <Tooltip
          visible={this.state.visible}
          animation="zoom"
          onVisibleChange={this.onVisibleChange}
          trigger="click"
          overlay={<span>i am a tooltip</span>}
        >
          <a href="#" onClick={preventDefault}>trigger</a>
        </Tooltip>
      </div>
      <button onClick={this.onDestroy}>destroy</button>
    </div>);
  },
});

ReactDOM.render(<Test/>, document.getElementById('__react-content'));
