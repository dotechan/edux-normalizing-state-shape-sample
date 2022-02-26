import React from "react";

import "./List.css";

function ListItem({ item }) {
  return (
    <li key={item.id} className="li">
      {item.name}
    </li>
  );
}

function List({ items }) {
  return (
    <ul className="ul">
      {items.map((item) => (
        <ListItem item={item} />
      ))}
    </ul>
  );
}

export default List;
