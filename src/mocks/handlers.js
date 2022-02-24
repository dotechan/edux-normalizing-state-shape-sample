import { rest } from "msw";

function getItems() {
  const items = [];
  for (let i = 0; i < 100; i++) {
    items.push({
      id: i,
      name: `name_${i}`,
    });
  }

  return items;
}

export const handlers = [
  rest.get("/items", (req, res, ctx) => {
    const items = getItems();
    return res(ctx.status(200), ctx.json({ items: items }));
  }),
];
