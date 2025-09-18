import Tooltip from 'rc-tooltip';
import React, { Component } from 'react';

import '../../assets/bootstrap.less';

interface TestState {
  visible: boolean;
  destroy?: boolean;
}

class Test extends Component {
  state = {
    visible: false,
  } as TestState;

  handleDestroy = () => {
    this.setState({
      destroy: true,
    });
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ visible: !e.target.value });
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
            motion={{ motionName: 'rc-tooltip-zoom' }}
            trigger={[]}
            styles={{ root: { zIndex: 1000 } }}
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
