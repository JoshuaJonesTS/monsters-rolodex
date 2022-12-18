import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  // constructor instantiates the class, like in Java
  constructor() {
    super();

    // 'this' refers to an instance of the class, like in Java
    this.state = {
      name: 'Joshua'
    }
  }

  // tell React the code to be rendered
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {/* curly braces tell React to access a JavaScript variable */}
            Hello {this.state.name}
          </p>
          <button onClick={() => {
            // setState changes the object
            // ...therefore, setState in React is similar to setters in Java
            this.setState({name: 'Leonardo'})
          }}>
            Change Name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
