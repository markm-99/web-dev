// import logo from './logo.svg';
// Benefit of JSX - dynamically alter data in the browser with HTML tags but using JS-style syntax
import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
  return (
    <h1>App</h1>
  );
}

export default App;
















// React Practice - JS library for building user interfaces
// import {useState, useEffect} from 'react';
// import './App.css';

// // Components
// // Props: arguments you pass into react components
// // const Person = (props) => {
// //   return (
// //     <>
// //     <h1>Name: {props.name}</h1>
// //     <h2>Last Name: {props.lastName}</h2>
// //     <h2>Age: {props.age}</h2>
// //     </>
// //   )
// // }
// const App = () => {
//   // when you call function use 'use' it is a hook
//   const [counter, setCounter] = useState(0); //initial value of counter is 0

//   // useEffect: allows you to perform side effects in function components
//   // second argument: array of dependencies
//   useEffect(() => {
//     alert('Youve changed the counter to ' + counter)
    
//     // setCounter(100); // will only set at initial load of component --> by itself with [counter] will give infinite loop
//   }, [counter]);

//   return (
//     <div className="App">
//       {/* <button onClick={() => setCounter(-5)}> - </button> */}
//       {/* combine button with onClick and increment/decrement operations */}
//       {/* onClick() ---> event triggered by user mouse click */}

//       {/* onClick has callback function: setCounter() */}
//       <button onClick={() => setCounter((prevCount) => prevCount - 1)}> - </button>
//       <h1>{counter}</h1>
//       <button onClick={() => setCounter((prevCount) => prevCount + 1)}> + </button>
     
//       {/* <Person 
//       name = 'Mark' 
//       lastName = 'Mathew' 
//       age = {25}/>

//       <Person name = 'John' lastName = 'Mathew' age = {30}/>
    
//       <h1>Hello {2+2}!</h1> */}

//         {/* React fragment (<>): allows you to return multiple elements without adding a div */}
//         {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//         {2+2}        
//         </p>
//         <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//         >
//         Learn React
//         </a>
//       </header> */}
//     </div>
//   );
// }

// export default App;