let a = 1;
const c = a + 5; // Should result in "'c' is assigned a value but never used"

if (a = 1) { // Should result in 'Expected a conditional expression and instead saw an assignment.'
  console.log('This is an if block having an assignment condition');
} else if (a == 1) {
  console.log('Some condition');
} else if (a == 1) { // Should result 'This branch can never execute. Its condition is a duplicate or covered by previous conditions in the if-else-if chain.'
  console.log('The same condition again');
} else {
  function doSomethingElse () { // Should result in 'Move function declaration to program root.'
    console.log('I am a nested declared function');
  }
  console.log(doSomethingElse());
}

const temp: any = 4; // Should result in 'Unexpected any. Specify a different type.'

console.log(a, temp);
