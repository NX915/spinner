// process.stdout.write('hello from spinner1.js... \rheyyy\n');
let runTime = 1600;
let spinSpeed = 100;
let i = spinSpeed;
do {
  setTimeout(() => {
    process.stdout.write('\r|   ');
  }, i += spinSpeed);
  
  setTimeout(() => {
    process.stdout.write('\r/   ');
  }, i += spinSpeed);
  
  setTimeout(() => {
    process.stdout.write('\r-   ');
  }, i += spinSpeed);
  
  setTimeout(() => {
    // Need to escape the backslash since it's a special character.
    process.stdout.write('\r\\   ');
  }, i += spinSpeed);
} while (i <= runTime - 400);
setTimeout(() => {
  process.stdout.write('\n');
}, runTime - 400 + (((runTime - 400) % 400 + 1) * spinSpeed));