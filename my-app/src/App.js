import logo from './logo.svg';
import './App.css';
import Heading from './Heading';
import Card from './Card';

function App() {
  function handleClick() { 
    let randomNum = Math.floor(Math.random() * 3) + 1;
    console.log(randomNum);
    let userInput = prompt('type a number'); 
    alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
  }

  return ( 
    <div className="App"> 
      This is the starting code for "Your first component" ungraded lab 
      <Heading firstName="Zu Shen"/>
      <Heading firstName="Jason" /> 
      <Card h2="First card's h2" h3="First card's h3"/>
      <Card h2="s card's h2" h3="s card's h3"/>
      <Card h2="t card's h2" h3="t card's h3"/>
      <div>
        <h1>Task: Add a button and handle a click event</h1>
        <button onClick={handleClick}>Guess the number between 1 and 3</button>
      </div>
    </div> 
  ); 
} 

export default App;
