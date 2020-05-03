const add = (a, b) => a + b,      
      f = (n, a = [1, 2]) =>
        a[a.length - 1] + a[a.length - 2] < n
          ? f(n, [...a, a[a.length - 1] + a[a.length - 2]])
          : a,
      r = (n) =>
        f(n)
          .filter((v) => !(v % 2))
          .reduce(add, 0);

console.log(r(4000000));

//Neater way to write the above code - Thanks to stackoverflow 
//https://stackoverflow.com/questions/61519451/strange-behaviour-of-reduce-method-in-javascript/61528095?noredirect=1#comment108866189_61528095

const fibs = (until = 0, a = 0, b = 1) =>
  a > until
    ? []
    : [ a, ...fibs(until, b, a + b) ]

const sumEvens = (num) => 
  fibs(num)
    .filter(n => !(n & 1))
    .reduce((r, n) => r + n, 0)

console.log(sumEvens(4000000))