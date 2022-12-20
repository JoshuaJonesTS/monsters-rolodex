import { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  // constructor instantiates the class, like in Java
  constructor() {
    super();

    // 'this' refers to an instance of the class, like in Java
    this.state = {
      monsters: []
    }
  }

  // life cycle method
  // make API request the moment component get places onto the DOM
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => 
        this.setState(
          () => {
            return { monsters: users }; // monsters points to user
          },
          () => {
            console.log('state:' + this.state)
          }
        ));
  }

  // tell React the code to be rendered
  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map((monster) => {
            return <div key={monster.id}><h1>{monster.name}</h1></div> // the key is a unique identifier
          })
        }
      </div>
    );
  }
}

export default App;

 // setState changes the object
// ...therefore, setState in React is similar to setters in Java
// it is best practice to pass the same type of data type to setState
// ...so if name is a string pass a string; if object, pass object
// it is most ideal to pass a function to setState
