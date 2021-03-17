import React, { useState } from "react";
import "./App.css";
import List from "./components/List";

function App() {
  const [appClicked, setAppClicked] = useState(false);

  const handleClick = (event) => {
    console.log("app click");
    setAppClicked(true);
  };

  return (
    <div className="App">
      <div>{appClicked ? "I was clicked" : "not clicked"}</div>

      <List>
        <li>list</li>
        <li>all react</li>
      </List>

      <list-el>
        <li>list</li>
        <li>react in react</li>
        <li>
          <button onClick={handleClick}>App click</button>
        </li>
      </list-el>
    </div>
  );
}

export default App;
