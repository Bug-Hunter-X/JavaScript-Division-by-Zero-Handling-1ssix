function foo(a, b) {
  if (a === 0 || b === 0) {
    return 0; // Or throw new Error('Division by zero');
  }
  return a / b;
}

console.log(foo(1, 0)); // Returns 0
console.log(foo(0, 1)); // Returns 0
console.log(foo(0, 0)); // Returns 0