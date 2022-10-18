const cells = document.querySelectorAll(".cell");
const main = document.querySelector("main");

main.addEventListener("mousedown", (e) => {
  main.addEventListener("mousemove", doSomething(e));

  main.addEventListener("mouseup", (e) => {
    console.log("done");
    main.removeEventListener("mousemove", doSomething(e));
  });
});

function doSomething(e) {
  e.path[0].classList.add("target");
}
