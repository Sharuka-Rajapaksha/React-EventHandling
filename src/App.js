import logo from './logo.svg';
import './App.css';


function buttonClick(){
  console.log("Button is Clicked!")
  alert("Button is Clicked!")
}



function App() {
  return (
    <div className="App">
      
      <div>
        <h1> Welcome to React Event Handling </h1>
        <br></br>
        <button onClick={buttonClick}>Click me!</button>
      </div>

    </div>
  );
}

export default App;
