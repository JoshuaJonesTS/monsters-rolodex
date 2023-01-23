import { useState } from 'react'
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState(''); // useState gives an array [value, setValue]
  
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocalLowerCase();
    setSearchField(searchFieldString);
  }
  
  return (
    <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox 
        className='monsters-search-box'
        onChangeHandler={onSearchChange} 
        placeholder='search montsers'/>
      <CardList monsters={filteredMonsters}/>
    </div>
  );
}

// class App extends Component {
//   // constructor instantiates the class, like in Java
//   constructor() {
//     super();

//     // 'this' refers to an instance of the class, like in Java
//     this.state = {
//       monsters: [],
//       searchField: ''
//     }
//   }

//   // life cycle method
//   // make API request the moment component get places onto the DOM
//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) => 
//         this.setState(
//           () => {
//             return { monsters: users }; // monsters points to user
//           },
//           () => {
//             console.log('state:' + this.state)
//           }
//         ));
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
    
//     this.setState(() => {
//       return { searchField };
//     });
//   }

//   // tell React the code to be rendered
//   render() {
//     const { /*monsters,*/ searchField } = this.state;
//     const { onSearchChange } = this;
    
//     const filteredMonsters = this.state.monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         <h1 className='app-title'>Monsters Rolodex</h1>
//         <SearchBox 
//           className='monsters-search-box'
//           onChangeHandler={onSearchChange} 
//           placeholder='search montsers'/>
//         <CardList monsters={filteredMonsters}/>
//       </div>
//     );
//   }
// }

export default App;

 // setState changes the object
// ...therefore, setState in React is similar to setters in Java
// it is best practice to pass the same type of data type to setState
// ...so if name is a string pass a string; if object, pass object
// it is most ideal to pass a function to setState
