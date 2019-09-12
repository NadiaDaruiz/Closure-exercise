const init = () => {
  let db = [];
  let api = [];

  const create = newElement => {
    db.push(newElement);
    return db.length;
  };

  api.push(create);
  return api;
};

const createInDb = init();

console.log(createInDb[0]("dog"));
console.log(createInDb[0]("cat"));
console.log(createInDb[0]("bird"));
console.log(createInDb[0]("fish"));
//console.log(init());
