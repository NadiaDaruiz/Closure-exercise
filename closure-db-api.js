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
    const oldElement = db[index];

    if (index >= 0 && index <= db.length - 1) {
      db.splice(index, 1, newElement);
    } else {
      return create(newElement);
    }
    return `You have changed one item:${oldElement} for ${newElement}.`;
  };

  const remove = removeFromIndex => {
    if (removeFromIndex >= 0 && removeFromIndex <= db.length - 1) {
      db.splice(removeFromIndex, 1);
    } else {
      return "Error. The element doesn't exists.";
    }
    return `You have deleted one item: ${db[removeFromIndex]}.`;
  };

  let api = [create, read, update, remove];

  //   //api.push(create);
  //   api.push(read);
  //   api.push(update);
  //   api.push(remove);
  //   console.log(api);

  return api;
};
const createInDb = init();

const accessCreate = createInDb[0];
const accessRead = createInDb[1];
const accessUpdate = createInDb[2];
const accessRemove = createInDb[3];

console.log(accessCreate("rat"));
console.log(accessRead());
console.log(accessCreate("dog"));
console.log(accessRead());
console.log(accessCreate("fish"));
console.log(accessRead());
console.log(accessCreate("cat"));
console.log(accessRead());
console.log(accessRemove(0));

console.log(accessUpdate(0, "bird"));

// console.log(createInDb[0]("dog"));
// console.log(createInDb[0]("cat"));
// console.log(createInDb[0]("bird"));
// console.log(createInDb[0]("fish"));
// //console.log(init());
// //console.log(createInDb[0]());
// console.log(createInDb[1]());
// createInDb[0]("lizard");
// console.log(createInDb[1]());
// createInDb[1]();
// console.log(createInDb[0]("chair"));
// //console.log(createInDb[1]());
// console.log(createInDb[2]([5], "turtle"));
// console.log(createInDb[1]());
// console.log(createInDb[2](6, "hamster"));
// console.log(createInDb[1]());
