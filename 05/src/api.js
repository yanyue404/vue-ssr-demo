const items = [
  { id: 1, name: "吃饭" },
  { id: 2, name: "睡觉" },
  { id: 3, name: "打豆豆" },
];

export function fetchAll(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(items);
    }, 1500);
  });
}

export function fetchItem(id) {
  const item = items.find((i) => i.id == id);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(item);
    }, 1500);
  });
}
