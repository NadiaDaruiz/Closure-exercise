const init = () => {
  let db = [];
  let api = [];

  const create = newElement => {
    db.push(newElement);
    return db.length;
  };

  const read = () => {
    let dbCopy = [...db];
    return dbCopy;
  };

  api.push(create, read);
  return api;
};

const createInDb = init();

console.log(createInDb[0]("dog"));
console.log(createInDb[0]("cat"));
console.log(createInDb[0]("bird"));
console.log(createInDb[0]("fish"));
//console.log(init());
