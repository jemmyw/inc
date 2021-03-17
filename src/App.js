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

      <div>
        <h2>React component</h2>
        <List>
          <li>list</li>
          <li>only react</li>
        </List>
      </div>
      <div>
        <h2>React in webcomponent in react</h2>
        <list-el>
          <li>list</li>
          <li>react in web-component in react</li>
          <li>
            <button onClick={handleClick}>App button</button>
          </li>
        </list-el>
      </div>
    </div>
  );
}

export default App;
