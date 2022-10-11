// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome while 123 is not.

let example = 123;

function palindrome(value) {
  let stringExample = value.toString().split("");
  let reversed = value.toString().split("").reverse();
  if (reversed === stringExample) {
    console.log(true);
  } else {
    console.log(false);
  }
}

palindrome(example);
