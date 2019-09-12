const init = () => {
  let db = [];

  const create = newElement => {
    db.push(newElement);
    let options = [db.length, db];
    return options;
  };

  return create;
};

const createInDb = init();

console.log(createInDb("dog"));
console.log(createInDb("cat"));
console.log(createInDb("bird"));
console.log(createInDb());
