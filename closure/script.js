function parent() {
  let y = 2;

  return () => {
    console.log(y);
  };
}

const testVar = parent();

//Notice how we have access to y even though the parent function returned
testVar(); // logs out 2
