import React, { useContext } from 'react';
import { StoreContext } from '../store';

export default function Button({ label, onClick }) {
  const handleClick = (event) => onClick(event);
  const store = useContext(StoreContext)

  return (
    <button
      onClick={handleClick}
      style={{
        border: "1px solid black",
        padding: "5px",
      }}
    >
      {label}
      {store.hello}
    </button>
  );
}
