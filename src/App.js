import React from 'react';
import './App.css';
import FuzzyText from './FuzzyText'; // import FuzzyText component

function App() {
  const hoverIntensity = 0.5;
  const enableHover = true;

  return (
    <div className="App">
      <FuzzyText
        baseIntensity={0.2}
        hoverIntensity={hoverIntensity}
        enableHover={enableHover}
      >
        404
      </FuzzyText>
      <FuzzyText
        baseIntensity={0.2}
        hoverIntensity={hoverIntensity}
        enableHover={enableHover}
      >
        not found
      </FuzzyText>
    </div>
  );
}

export default App;
