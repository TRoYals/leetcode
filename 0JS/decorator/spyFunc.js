function work(a, b) {
  console.log(a + b); // work is an arbitrary function or method
}

work = spy2(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
  console.log("call:" + args); // "call:1,2", "call:4,5"
}

function spy(func) {
  function wrapper(...args) {
    wrapper.calls.push(args);
    return func.apply(this, args);
  }
  wrapper.calls = [];
  return wrapper;
}

function spy2(func) {
  function wrapper() {
    wrapper.calls.push(Array(...arguments));
    return func.call(this, ...arguments);
  }
  wrapper.calls = [];
  return wrapper;
}

function spy3(func) {
  function wrapper(...args) {
    wrapper.calls.push(args);
    const callLater = func.bind(this);
    return callLater(...args);
  }
  wrapper.calls = [];
  return wrapper;
}
