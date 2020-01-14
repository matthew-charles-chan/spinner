//process.stdout.write('hello from spinner1.js... \rhey\n');
const spinner = function() {
  const spinnerChars = ['|','/','-','\\','|'];
  for (let i = 0; i < spinnerChars.length; i++) {
    setTimeout(() => {
      process.stdout.write(`\r ${spinnerChars[i]}`);
      if (i === spinnerChars.length - 1) {
        process.stdout.write('\n');
      }
    }, 170 * i);
  }
};
spinner();





// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   ');
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r|   '); //animation end with "|"
// }, 900);