function myPromiseAll(iterable) {
  return new Promsise((resolve, reject) => {
    const promises = Array.from(iterable);
    const result = [];
    let count = 0;
    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i])
        .then((res) => {
          result[i] = res;
          count++;
          if (count === promises.length) {
            resolve(result);
          }
        })
        .catch((err) => reject(err));
    }
  });
}
