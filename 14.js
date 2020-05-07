var t0 = Date.now();

const cache = {};

const collaz_seq = n =>
  cache[n] === undefined                               // No value stored in cache
    ? n === 1                                          // Last call in recurrsive function
      ? (cache[n] = 1)                                 // Set cache as 1
      : n % 2 === 0                                    // Check for Even or Odd
        ? (cache[n] = collaz_seq(n / 2) + 1)           // Store the value 
        : (cache[n] = collaz_seq((3 * n + 1) / 2) + 2) // 
    : cache[n];

/* 
const memo = {};

if (memo[n] === undefined) {
    if (n === 1) {
      memo[n] = 1;
    } else if (n % 2 === 0) {
      memo[n] = collaz_seq(n / 2) + 1;
    } else {
      memo[n] = collaz_seq((3 * n + 1) / 2 ) + 2;
    }
  }  
  return memo[n];
};
*/

let largest = 0,
  number = 0,
  r = 0;

for (let i = 1; i < 1000000; i++) {
  r = collaz_seq(i);                                        
  if (r > largest) {
    largest = r;
    number = i;
  }
}

var t1 = Date.now();
console.log(
  "Took",
  (t1 - t0).toFixed(4),
  "milliseconds to generate:",
  "Number: " + number,
  "Largest Length: " + largest
);
