const a = 1; // Should result in "'a' is assigned a value but never used"

const b = 2 // Should result in "Missing semicolon"

const c = "salt"; // Should result in "Strings must use singlequote"

console.log(b, c); // Should result in "Unexpected console statement"
