import React from 'react';

export default function Button({ label, onClick }) {
  const handleClick = (event) => onClick(event);

  return (
    <button
      onClick={handleClick}
      style={{
        border: "1px solid black",
        padding: "5px",
      }}
    >
      {label}
    </button>
  );
}
