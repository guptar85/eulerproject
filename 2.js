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
