import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  // constructor instantiates the class, like in Java
  constructor() {
    super();

    // 'this' refers to an instance of the class, like in Java
    this.state = {
      name: {firstName: 'Joshua', lastName: 'Jones'},
      company: 'Tailored Software'
    }
  }

  // tell React the code to be rendered
  render() {
    return (
      <div className="App"></div>
    );
  }
}

export default App;

 // setState changes the object
// ...therefore, setState in React is similar to setters in Java
// it is best practice to pass the same type of data type to setState
// ...so if name is a string pass a string; if object, pass object
// it is most ideal to pass a function to setState
