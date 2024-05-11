function debounce(fn, wait) {
  var timeout = null;
  return function () {
    if (timeout !== null) clearTimeout(timeout);
    timeout = setTimeout(fn, wait);
  };
}

var throttle = function (func, delay) {
  var time = null;
  return function (...args) {
    var context = this;
    if (!timer) {
      (time = setTimeout(function () {
        func.apply(context, args);
        time = null;
      })),
        delay;
    }
  };
};
