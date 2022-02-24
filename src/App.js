import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchItems, itemAdded } from "./list/itemsSlice";
import List from "./list/List";

function App() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.entities);

  React.useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const handleClick = React.useCallback(
    (e) => {
      const newItemId =
        items.reduce(
          (previousValue, currentValue) =>
            Math.max(previousValue, currentValue.id),
          0
        ) + 1;
      const newItem = {
        id: newItemId,
        name: `name_${newItemId}`,
      };
      dispatch(itemAdded(newItem));
      e.stopPropagation();
    },
    [dispatch, items]
  );

  return (
    <div>
      <button onClick={handleClick}>Add Item</button>
      <List items={items}></List>
    </div>
  );
}

export default App;
