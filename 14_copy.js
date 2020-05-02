const fibs = (until = 0, a = 0, b = 1) =>
  a > until
    ? []
    : [ a, ...fibs(until, b, a + b) ]

const sumEvens = (num) => 
  fibs(num)
    .filter(n => !(n & 1))
    .reduce((r, n) => r + n, 0)

console.log(sumEvens(4000000))
// 4

//console.log('Hello World!')

/*const a = () => {
  let l = 1,
      m = {};      
  return b = n => n == 1 ? l : ++l && (n % 2 == 0 ? b(n / 2) : b(3 * n + 1));
}


console.log(a()(11));

//for(i=13; ;) console.log(i, a()(i))

/*

const mem = (callback) => {
  let cache = {};
  console.log(cache);
  return n => cache[n] != undefined ? cache[n] : cache[n] = callback(n)
}

//const fibonacci = n => n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2)

const f = n => {  

  n % 2 == 0 ? 

  //return n == 1 ? len : ++len && (n % 2 == 0 ? f(n / 2) : f(3 * n + 1));
  //return f(n) == 1 ? n : ++len && (n % 2 == 0 ? f(n / 2) : f(3 * n + 1));
}
  

const memF = mem(f);
console.log(memF(13));


//const x = y => 
*/
