console.time("Time taken");

const longestChainNum = (MAX_NUMBER) => {
    const cache = {};                                         // Cache object to stored the calculated values
    const getCount = n =>                                     // Recursive Function to fill cache and get length
        cache[n] === undefined                                // No value stored in cache
        ? n === 1                                             // Last call in recurrsive function
            ? (cache[n] = 1)                                  // Set cache as 1
            : n % 2 === 0                                     // Check for Even or Odd
                ? (cache[n] = getCount(n / 2) + 1)            // Store the value
                : (cache[n] = getCount((3 * n + 1) / 2) + 2)  // Add 2 values since odd number will always result in even
        : cache[n];

    return ((i = 1) => {                                      //IIFE for loop and get the largest number
        let largest     = 0,
            number      = 0;
        while (i++ < MAX_NUMBER) 
            number = getCount(i) > largest 
                     ? (largest = getCount(i)) && i 
                     : number;
        return number;
    })();
};

console.log(longestChainNum(1e6));

console.timeEnd("Time taken");
