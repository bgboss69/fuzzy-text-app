import React, { useState } from 'react';
import './App.css';
import FuzzyText from './FuzzyText'; // import FuzzyText component

function App() {
  const [hoverIntensity, setHoverIntensity] = useState(0.5);
  const [enableHover, setEnableHover] = useState(true);

  return (
    <div className="App">
      <FuzzyText
        baseIntensity={0.2}
        hoverIntensity={hoverIntensity}
        enableHover={enableHover}
      >
        404 <br />
        not found
      </FuzzyText>
    </div>
  );
}

export default App;
