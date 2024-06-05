import "./App.css";
import { useState } from "react";

function App() {
  const [sayHi, setGreeting] = useState("Greeting Message");
  return (
    <div className="App">
      <div className="greeting-container">{sayHi}</div>
      <div className="buttons">
        <button
          onClick={() => {
            setGreeting("สวัสดี");
          }}
        >
          สวัสดี!
        </button>
        <button
          onClick={() => {
            setGreeting("Hi!");
          }}
        >
          Hi!
        </button>
        <button
          onClick={() => {
            setGreeting("你好!");
          }}
        >
          你好!
        </button>
      </div>
    </div>
  );
}

export default App;
