import "./App.css";
import React, { useState } from "react";
import Input from "./to-do/Input";
import List from "./to-do/List";

function App() {
  const [items, setItems] = useState([]);

  return (
    <div className="App">
      <Input setItems={setItems} items={items} />
      <List items={items} setItems={setItems} />
    </div>
  );
}

export default App;
