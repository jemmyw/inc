import React, { useState } from "react";
import Button from "./Button";

export default function List({ label, children }) {
  console.log(children);

  const [clicked, setClicked] = useState(false);

  const handleClick = (e) => {
    console.log("click");
    setClicked(true);
  };

  return (
    <div style={{ border: "1px solid red", margin: "5px", padding: "5px" }}>
      <div>{label}</div>
      <div>
        <Button onClick={handleClick} label="List button" />
      </div>
      <ul>
        {clicked ? <li>list was clicked</li> : null}
        {children}
      </ul>
    </div>
  );
}
