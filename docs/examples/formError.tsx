import React, { Component } from 'react';
import Tooltip from 'rc-tooltip';

import '../../assets/bootstrap.less';

class Test extends Component {
  state = {
    visible: false,
  };

  handleDestroy = () => {
    this.setState({
      destroy: true,
    });
  };

  handleChange = e => {
    this.setState({
      visible: !e.target.value,
    });
  };

  render() {
    if (this.state.destroy) {
      return null;
    }
    return (
      <div>
        <div style={{ marginTop: 100, marginLeft: 100, marginBottom: 100 }}>
          <Tooltip
            visible={this.state.visible}
            animation="zoom"
            trigger={[]}
            overlayStyle={{ zIndex: 1000 }}
            overlay={<span>required!</span>}
          >
            <input onChange={this.handleChange} />
          </Tooltip>
        </div>
        <button type="button" onClick={this.handleDestroy}>
          destroy
        </button>
      </div>
    );
  }
}

export default Test;
