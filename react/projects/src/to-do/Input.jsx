import React, { useRef } from "react";
import { useState } from "react";
import "./Input.css";

function Input(props) {
  const { items, setItems } = props;
  const [text, setText] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    setItems([...items, text]);
    setText("");
  }
  return (
    <div className="input-container">
      <input
        onChange={(e) => setText(e.target.value)}
        value={text}
        type="text"
      />
      <button disabled={!text} onClick={handleSubmit}>
        add
      </button>
    </div>
  );
}

export default Input;
