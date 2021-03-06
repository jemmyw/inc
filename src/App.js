import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";
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
            <Button
              onClick={handleClick}
              label={appClicked ? "Clicked app button" : "App button"}
            />
          </li>
          <li>
            <List>
              <li>react list in react list webcomponent in react</li>
            </List>
          </li>
          <li>
            <list-el>
              <li>react in webcomponent in react webcomponent in react</li>
              <li>
                <Button onClick={handleClick} label="deep app button" />
              </li>
            </list-el>
          </li>
        </list-el>
      </div>
    </div>
  );
}

export default App;
