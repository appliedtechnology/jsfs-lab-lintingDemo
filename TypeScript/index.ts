const a:number = 1; // Should result in "'a' is assigned a value but never used"

const b:number = 2 // Should result in "Missing semicolon"

const c:string = "salt"; // Should result in "Strings must use singlequote"

console.log(b, c); // Should result in "Unexpected console statement"
