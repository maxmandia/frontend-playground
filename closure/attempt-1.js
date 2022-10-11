function closure() {
  let y = 1;

  return () => {
    console.log(y);
  };
}

let test = closure();

test();
