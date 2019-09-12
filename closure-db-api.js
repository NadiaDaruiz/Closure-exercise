let init = () => {
  let db = [];

  let create = newElement => {
    db.push(newElement);
    return db.length;
  };

  return create();
};

let createInDb = init();

console.log(createInDb[1]());
console.log(createInDb(2));
console.log(createInDb(3));
