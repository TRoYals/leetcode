function f(x) {
  console.log(x);
}

// create wrappers
let f1000 = delay2(f, 1000);
let f1500 = delay2(f, 1500);

f1000("test"); // 在 1000ms 后显示 "test"
f1500("test"); // 在 1500ms 后显示 "test"

function delay(fn, ms) {
  function wrapper(...text) {
    const fnDelay = () => fn.apply(this, text);
    return setTimeout(fnDelay, ms);
  }
  return wrapper;
}

function delay3(fn, ms) {
  function wrapper() {
    const fnDelay = () => fn.apply(this, [...arguments]);
    return setTimeout(fnDelay, ms);
  }
  return wrapper;
}

function delay2(fn, ms) {
  function wrapper(text) {
    // const fDelay = (text) => {
    //   return fn(text);
    // };
    // return setTimeout(fDelay, ms);这个不行的
    const fDelay = fn.bind(this);

    return setTimeout(() => fDelay(text), ms);
  }
  return wrapper;
}

function delay4(f, ms) {
  return function (...args) {
    let savedThis = this; // 将 this 存储到中间变量
    setTimeout(function () {
      f.apply(savedThis, args); // 在这儿使用它
    }, ms);
  };
}
