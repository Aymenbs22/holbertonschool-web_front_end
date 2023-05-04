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

const t0 = performance.now();
const Prime = countPrimeNumbers();
const t1 = performance.now();
const time = t1 - t0;

console.log(`Execution time of printing countPrimeNumbers was ${time} milliseconds.`);
