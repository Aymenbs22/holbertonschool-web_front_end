function countPrimeNumbers(){
    let count = 0;
    let prime = true;
    for (let i = 2; i <= 100; i++) {
      for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            prime = false;
          break;
        }
      }
      if (prime) {
        count++;
      }
    }
    return count;
  }

const times = 100;
let newtime = 0;
for (let i = 0; i < times; i++) {
    const t0 = performance.now();
    countPrimeNumbers();
    const t1 = performance.now();
    newtime += t1 - t0;
}



console.log(`Execution time of calculating prime numbers ${times} times was ${newtime} milliseconds.`);
