const init = () => {
  let db = [];
  let api = [];

  const create = element => {
    db.push(element);
    return db.length;
  };

  const read = () => {
    let dbCopy = [...db];
    return dbCopy;
  };

  //const update = (index, newElement) => {};

  api.push(create);
  api.push(read);
  //api.push(update);

  return api;
};

const createInDb = init();

console.log(createInDb[0]("dog"));
console.log(createInDb[0]("cat"));
console.log(createInDb[0]("bird"));
console.log(createInDb[0]("fish"));
//console.log(init());
//console.log(createInDb[0]());
console.log(createInDb[1]());
createInDb[0]("lizard");
console.log(createInDb[1]());
createInDb[1]();
