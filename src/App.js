import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  // tell React the code to be rendered
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello Joshua
          </p>
          <button>
            Change Name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
