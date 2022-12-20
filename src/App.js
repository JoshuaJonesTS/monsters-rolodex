import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  // constructor instantiates the class, like in Java
  constructor() {
    super();

    // 'this' refers to an instance of the class, like in Java
    this.state = {
      monsters: [
        {
          name: 'Linda',
          id: '12e1231e'
        },
        {
          name: 'Frank',
          id: '12ed2dacas'
        },
        {
          name: 'Jacky',
          id: '1231e'
        },
        {
          name: 'Andrei',
          id: '12e1e213'
        }
      ]
    }
  }

  // tell React the code to be rendered
  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map((monster) => {
            return <h1 key={monster.id}>{monster.name}</h1>
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
