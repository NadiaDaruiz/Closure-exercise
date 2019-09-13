const init = () => {
  let db = [];

  const create = element => {
    db.push(element);
    //return db.length;
    return `New element added! The new length of the array is ${db.length}.`;
  };

  const read = () => {
    return [...db];
  };

  const update = (index, newElement) => {
    if (index >= 0 && index <= db.length - 1) {
      return db.splice(index, 1, newElement);
    } else {
      return create(newElement);
    }
  };

  const remove = removeFromIndex => {
    if (removeFromIndex >= 0 && removeFromIndex <= db.length - 1) {
      return db.splice(removeFromIndex, 1);
    } else {
      return "Error. The element doesn't exists.";
    }
  };

  let api = [];
  console.log(api);

  api.push(create);
  api.push(read);
  api.push(update);
  api.push(remove);
  console.log(api);

  //const apiFunctions = [create(), read(), update(), remove()];

  return api;
};

//const apiUpdate = apiFunctions[2];
//const apiRemove = apiFunctions[3];

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
console.log(createInDb[2](6, "hamster"));
console.log(createInDb[1]());
