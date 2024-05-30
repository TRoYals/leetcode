function delay(ms) {
  return new Promise((xx, bcbc) => {
    bcbc(() => {
      console.log("error");
      return "123";
    });
    setTimeout(xx, ms);
  });
}

delay(3000)
  .then((res) => console.log(res))
  .catch((err) => {
    err();
    console.log(err);
  });
