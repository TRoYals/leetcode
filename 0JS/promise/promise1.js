// obsidian://open?vault=TRoYals&file=JavaScript%2FJavaScript%E9%9D%A2%E8%AF%95%E5%88%B7%E9%A2%98

const p = new Promise((resolve, reject) => {
  console.log("a");
  resolve();
  console.log("b");
});
setTimeout(() => console.log("c"), 0);
p.then(console.log("d"));
p.then(() => console.log("e"));
console.log("f");
