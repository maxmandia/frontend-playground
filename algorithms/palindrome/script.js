// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome while 123 is not.

function isPal(num) {
  if (Math.sign(num) === -1) {
    return false;
  }
  const str = num.toString();
  const arr = str.split("");
  const reverse = str.split("").reverse();
  if (arr.join("") === reverse.join("")) {
    console.log("palindrome");
  } else {
    console.log("not palindrome");
  }
}

isPal(10);
