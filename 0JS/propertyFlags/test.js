let user = {
  name: "John",
};
console.log(Object.getOwnPropertyDescriptor(user, "name"));

Object.defineProperty(user, "name", {
  writable: false,
  configurable: false,
});

// won't be able to change user.name or its flags
// all this won't work:
user.name = "Pete";
console.log(user.name);
delete user.name;
Object.defineProperty(user, "name", { writable: true });
console.log(Object.getOwnPropertyDescriptor(user, "name"));
