import React from 'react';
import AXAInputText from './AXAInputText';

const DemoInputTextonKeyUp = () => {
  return (
    <div>
      <p>
        <span>Last key pressed: </span>
        <span id="inputtext-react-testoutput" />
      </p>
      <AXAInputText
        id="inputtext-react-inputfield-on-key-pressed"
        onKeyUp={e => {
          document.querySelector('#inputtext-react-testoutput').innerHTML =
            e.key;
        }}
      />
    </div>
  );
};

export default DemoInputTextonKeyUp;
