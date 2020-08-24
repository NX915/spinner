const SPIN_CHAR = ['|', '/', '-', '\\'];
let runTime = 3000;
let spinSpeed = 100;
let i = spinSpeed;
let j = 0;
do {
  setTimeout(() => {
    process.stdout.write(`\r${SPIN_CHAR[j]}   `);
    j++;
    if (j > SPIN_CHAR.length - 1) {
      j = 0;
    }
  }, i += spinSpeed);
} while (i <= runTime - spinSpeed);
setTimeout(() => {
  process.stdout.write('\n');
}, runTime);