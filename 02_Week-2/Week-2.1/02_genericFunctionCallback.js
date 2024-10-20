function square(n) {
  return n * n;
}

function cube(n) {
  return n * n * n;
}

function sumOfSomething(a, b, fn) {
  let square1 = fn(a);
  let square2 = fn(b);
  return square1 + square2;
}

let ans = sumOfSomething(1, 2, square);
console.log(ans);

let ans2 = sumOfSomething(1, 2, cube);
console.log(ans2);
