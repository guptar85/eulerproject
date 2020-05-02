const r = n => Array
  .from(
    new Array(n - 1)
      .keys()
      ).map(x => x+=1)
       .filter(
          x => !(x % 3) || !(x % 5) 
        ).reduce((a, c) => a += c, 0)

console.log(r(1000));