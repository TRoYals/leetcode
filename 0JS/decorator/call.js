Function.prototype.myCall = function (context, ...args) {
  // 设置第一个参数的默认值为window
  const ctx = context || window;
  // 设置一个唯一变量，防止覆盖原属性
  const func = Symbol("func");
  ctx[func] = this;
  const result = ctx[func](...args);
  // 执行后得到返回值之前先删除本次声明的属性
  delete ctx[func];
  return result;
};

function sayHi() {
  console.log(this.name);
}

let user = { name: "John" };
let admin = { name: "Admin" };

// use call to pass different objects as "this"
sayHi.myCall(user); // John
sayHi.call(admin); // Admin
