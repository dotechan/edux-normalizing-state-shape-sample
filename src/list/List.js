import React from "react";
import { useSelector } from "react-redux";

import "./List.css";

function ListItem({ itemId }) {
  const items = useSelector((state) => state.items.entities);
  const item = items[itemId];

  return (
    <li key={itemId} className="li">
      {item.name}
    </li>
  );
}

const MemoizedListItem = React.memo(ListItem);

function List({ itemIds }) {
  return (
    <ul className="ul">
      {itemIds.map((itemId) => (
        <MemoizedListItem itemId={itemId} />
      ))}
    </ul>
  );
}

export default React.memo(List);
