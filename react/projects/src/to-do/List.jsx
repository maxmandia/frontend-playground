import React from "react";
import "./List.css";

function List(props) {
  const { items, setItems } = props;

  function removeItem(itemToRemove) {
    setItems(items.filter((item) => item !== itemToRemove));
  }

  return (
    <div>
      {items.map((item, index) => {
        return (
          <div className="item-container" key={index}>
            <p>{item}</p>
            <button onClick={() => removeItem(item)}>X</button>
          </div>
        );
      })}
    </div>
  );
}

export default List;
