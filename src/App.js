import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchItems, itemAdded } from "./list/itemsSlice";
import List from "./list/List";

function App() {
  const dispatch = useDispatch();
  const { status, entities } = useSelector((state) => state.items);

  React.useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const handleClick = React.useCallback(
    (e) => {
      const newItemId =
        Object.keys(entities).reduce(
          (previousValue, currentValue) =>
            Math.max(previousValue, currentValue),
          0
        ) + 1;
      const newItem = {
        id: newItemId,
        name: `name_${newItemId}`,
      };
      dispatch(itemAdded(newItem));
      e.stopPropagation();
    },
    [dispatch, entities]
  );

  if (status !== "loaded") {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <button onClick={handleClick}>Add Item</button>
      <List itemIds={Object.keys(entities)}></List>
    </div>
  );
}

export default App;
