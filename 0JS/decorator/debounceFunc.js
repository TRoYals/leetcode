function debounce(fn, ms) {
  let timeout;
  function wrapper() {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, arguments));
  }
  return wrapper;
}
