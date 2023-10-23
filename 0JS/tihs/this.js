function makeUser() {
  return {
    name: "John",
    ref() {
      return this;
    },
  };
}

let user = makeUser().ref.call(makeUser());
console.log(user); //{ name: 'John', ref: [Function: ref] }
console.log(user.name); // John
