import React from "react";
import { useSelector } from "react-redux";

import "./List.css";
import { selectItemById } from "./itemsSlice";

function ListItem({ itemId }) {
  const item = useSelector((state) => selectItemById(state, itemId));

  if (!Boolean(item)) {
    return <div>Empty</div>;
  }

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
        <MemoizedListItem key={itemId} itemId={itemId} />
      ))}
    </ul>
  );
}

export default React.memo(List);
