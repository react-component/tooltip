import Tooltip from 'rc-tooltip';
import React from 'react';
import '../../assets/bootstrap_white.less';

const text = <span>Tooltip Text</span>;

const Test = () => {
  const scrollRef = React.useRef<HTMLDivElement>();

  return (
    <div style={{ padding: 10 }}>
      <div
        ref={scrollRef}
        style={{
          border: '1px solid black',
          width: '100%',
          height: 'calc(100vh - 40px)',
          boxSizing: 'border-box',
          overflow: 'auto',
        }}
      >
        <div
          style={{
            background: 'rgba(255,0,0,0.05)',
            width: '300%',
            height: '200%',
            position: 'relative',
          }}
        >
          <Tooltip
            placement="top"
            overlay={text}
            overlayInnerStyle={{ width: 300, height: 50 }}
            popupVisible
            arrowContent={<div className="rc-tooltip-arrow-inner" />}
          >
            <div
              style={{
                background: 'rgba(0,255,0,0.3)',
                width: 100,
                height: 50,
                position: 'absolute',
                left: '30%',
                top: '30%',
              }}
            >
              Hover Me
            </div>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default Test;
