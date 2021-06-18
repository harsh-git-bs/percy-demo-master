function sum(a, b) {
  return a + b;
}
console.log(Date.now());
console.log(sum(5, 10));

function prod(a, b) {
  return a * b;
}

console.log(prod(5, 10));

setTimeout(function () {
  console.log("Did I wait too much?"), 100000;
});

setTimeout(() => console.log("Late loader"), 1000);
