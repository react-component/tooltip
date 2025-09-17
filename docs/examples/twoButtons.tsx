import { UniqueProvider } from '@rc-component/trigger';
import React from 'react';
import '../../assets/bootstrap.less';
import Tooltip from '../../src';

const TwoButtonsDemo = () => (
  <UniqueProvider>
    <div style={{ margin: 100 }}>
      <Tooltip
        placement="top"
        trigger={['hover']}
        overlay="This is the first tooltip"
        motion={{ motionName: 'rc-tooltip-zoom' }}
      >
        <button type="button">Button 1</button>
      </Tooltip>
      <Tooltip
        placement="top"
        trigger={['hover']}
        overlay="This is the second tooltip"
        motion={{ motionName: 'rc-tooltip-zoom' }}
      >
        <button type="button">Button 2</button>
      </Tooltip>
    </div>
  </UniqueProvider>
);

export default TwoButtonsDemo;
