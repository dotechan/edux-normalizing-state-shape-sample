import React from "react";

import "./List.css";

function ListItem({ item }) {
  return <li className="li">{item.name}</li>;
}

const MemoizedListItem = React.memo(ListItem);

function List({ items }) {
  return (
    <ul className="ul">
      {items.map((item) => (
        <MemoizedListItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default React.memo(List);
