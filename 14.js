/*const range = (start, stop, step) => 
    Array.from(
        { length: (stop - start) / step + 1}, (_, i) => start + (i * step)
    );

console.log(range(0, 4, 2))
*/
/*
const f = (n, a = [n]) =>       // Initialize array with the input number
  a[a.length - 1] !== 1         // Recurssive call ends when last element is 1
    ? n % 2 == 0
      ? f(n / 2, [...a, n / 2])
      : f(3 * n + 1, [...a, 3 * n + 1])
    : a;

console.log(f());
*/

let len = 1;
const f = n =>
  n == 1 ? len : ++len && (n % 2 == 0 ? f(n / 2) : f(3 * n + 1));
  let i=0
  while(i<2)  { console.log(f(i)); i++}
/*
let arr = [];
for(let i=0; i<=10;i++) {
    console.log(f(i))
}*/