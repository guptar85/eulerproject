const r = (n) =>
  fibSeries().reduce((a, c) => a+= c, 0);

function fibSeries() {
  var a = 1;
  var b = 2;
  var next = a + b;
  var fibonacciArray = [2];
  console.log(fibonacciArray)
  while (next < 4000000) {
    if (next % 2 === 0) {
      fibonacciArray.push(next);
    }
    a = b;
    b = next;
    next = a + b;
  }
  return fibonacciArray;
}

const x = [2].reduce((a, _, c) => {
    if (!(c % 2)) 
    console.log(a, c)
},[])

console.log(x)