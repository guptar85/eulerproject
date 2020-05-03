const result = (n, l=0) => n === 1 ? ++l : 
      n %2 == 0 ? (l+=1) && result( (n / 2 ), l) : (l+=2) && result( ( (3* n + 1) / 2 ), l ) ;

let largest = 0, number = 0, r = 0;

for(let i=1; i<1000000;i++) {
  r = result(i);
  if (r > largest) { 
    largest = r ;
    number = i;
  }
}

console.log(number, largest);
