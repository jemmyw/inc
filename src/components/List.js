import React, { useState } from "react";

export default function List({ label, children }) {
  console.log(children);

  const [clicked, setClicked] = useState(false);

  const handleClick = (e) => {
    console.log("click");
    setClicked(true);
  };

  return (
    <div>
      <div>{label}</div>
      <div>
        <button onClick={handleClick}>click me</button>
      </div>
      <ul>
        {clicked ? <li>was clicked</li> : null}
        {children}
      </ul>
    </div>
  );
}
