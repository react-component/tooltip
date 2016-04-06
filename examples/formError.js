import React from 'react';
import ReactDOM from 'react-dom';
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.less';

const Test = React.createClass({
  getInitialState() {
    return {
      visible: false,
    };
  },
  handleDestroy() {
    this.setState({
      destroy: true,
    });
  },
  handleChange(e) {
    this.setState({
      visible: !e.target.value,
    });
  },
  render() {
    if (this.state.destroy) {
      return null;
    }
    return (<div>
      <div style={{ marginTop: 100, marginLeft: 100, marginBottom: 100 }}>
        <Tooltip
          visible={this.state.visible}
          animation="zoom"
          trigger={[]}
          overlayStyle={{ zIndex: 1000 }}
          overlay={<span>required!</span>}
        >
          <input onChange={this.handleChange}/>
        </Tooltip>
      </div>
      <button onClick={this.handleDestroy}>destroy</button>
    </div>);
  },
});

ReactDOM.render(<Test/>, document.getElementById('__react-content'));
