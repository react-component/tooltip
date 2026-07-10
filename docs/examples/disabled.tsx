import React, { useState } from 'react';
import '../../assets/bootstrap.less';
import Tooltip from '../../src';

const DisabledDemo = () => {
  const [disabled, setDisabled] = useState(false);

  return (
    <div style={{ margin: 100 }}>
      <Tooltip disabled={disabled} overlay="Tooltip content" placement="top">
        <button type="button" onClick={() => setDisabled((value) => !value)}>
          {disabled ? 'Enable Tooltip' : 'Disable Tooltip'}
        </button>
      </Tooltip>
    </div>
  );
};

export default DisabledDemo;
