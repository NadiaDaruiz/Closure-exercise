const init = () => {
  let db = [];

  const create = element => {
    db.push(element);
    return db.length;
  };

  const read = () => {
    let dbCopy = [...db];
    return dbCopy;
  };

  const update = (index, newElement) => {
    if (db[index]) return db.splice(index, 1, newElement);
    else {
      return "Error. That element doesn't exists";
    }
  };

  let api = [];
  console.log(api);
  api.push(create);
  api.push(read);
  api.push(update);
  console.log(api);
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
console.log(createInDb[0]("chair"));
//console.log(createInDb[1]());
console.log(createInDb[2]([5], "turtle"));
console.log(createInDb[1]());
console.log(createInDb[2]([8], "turtle"));
