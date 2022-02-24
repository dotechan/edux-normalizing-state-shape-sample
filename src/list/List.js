import React from "react";

import "./List.css";

function List({ items }) {
  return (
    <ul className="ul">
      {items.map((item) => (
        <li key={item.id} className="li">
          {item.name}
        </li>
      ))}
    </ul>
  );
}

export default List;
