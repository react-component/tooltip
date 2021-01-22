import React, { Component } from 'react';
import Tooltip from 'rc-tooltip';
import '../../assets/bootstrap.less';

function preventDefault(e) {
  e.preventDefault();
}

class Test extends Component {
  state = {
    visible: false,
  };

  onVisibleChange = visible => {
    this.setState({
      visible,
    });
  };

  onDestroy = () => {
    this.setState({
      destroy: true,
    });
  };

  render() {
    if (this.state.destroy) {
      return null;
    }
    return (
      <div>
        <div style={{ marginTop: 300, marginLeft: 100, marginBottom: 100 }}>
          <Tooltip
            visible={this.state.visible}
            animation="zoom"
            onVisibleChange={this.onVisibleChange}
            trigger="click"
            overlay={<span>I am a tooltip</span>}
          >
            <a href="#" onClick={preventDefault}>
              trigger
            </a>
          </Tooltip>
        </div>
        <button type="button" onClick={this.onDestroy}>
          destroy
        </button>
      </div>
    );
  }
}

export default Test;
