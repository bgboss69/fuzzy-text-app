import logo from './logo.svg';
import './App.css';
import FuzzyText from './FuzzyText'; 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
  
      <FuzzyText 
        baseIntensity={0.2} 
        hoverIntensity={0.2} 
        enableHover={0.5}
      >
        404
      </FuzzyText>
    </div>
  );
}

export default App;
