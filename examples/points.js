'use strict';

var React = require('react');
var Tooltip = require('rc-tooltip');
require('rc-tooltip/assets/bootstrap.css');
var assign = require('object-assign');
var packageJson = require('../package.json');
var placement = {
  points: ['tc', 'bc'],
  offset:[11,3],
  overflow: {
    adjustX: 1,
    adjustY: 1
  }
};

var style=`
.rc-tooltip-placement-points-tc-bc, .rc-tooltip-placement-points-bc-tc {
  padding: 5px 0;
}

.rc-tooltip-placement-points-tc-bc > .rc-tooltip-arrow{
  top: 0;
  margin-left: -5px;
  border-width: 0 5px 5px;
  border-bottom-color: #000000;
}

.rc-tooltip-placement-offset-x-11 > .rc-tooltip-arrow {
  left: 11px;
}

.rc-tooltip-placement-points-bc-tc > .rc-tooltip-arrow{
  bottom: 0;
  margin-left: -5px;
  border-width: 5px 5px 0;
  border-top-color: #000000;
}
`;


var Test = React.createClass({
  render() {
    return <div >
      <style dangerouslySetInnerHTML={{__html:style}}/>
      <h1>{packageJson.name}@{packageJson.version}</h1>
      <div style={{marginTop: 300,marginLeft:100,marginBottom:100}}>
        <Tooltip placement={placement}
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
