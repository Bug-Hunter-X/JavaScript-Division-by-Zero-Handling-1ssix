# JavaScript Division by Zero Handling

This repository demonstrates a common error in JavaScript related to division by zero. The `foo` function attempts to divide two numbers, but if either `a` or `b` is zero, it results in `Infinity` or `NaN`. This can lead to unexpected behavior in applications, especially when not properly handled.

The `bug.js` file contains the buggy code, while `bugSolution.js` provides a corrected version that handles zero inputs gracefully.

## Bug

The main issue is the lack of error handling when either `a` or `b` is zero. The division results in `Infinity` or `NaN`, which can cause further problems downstream.

## Solution

The solution incorporates explicit checks for zero inputs and handles those cases appropriately, returning a defined value or throwing an error for better control.