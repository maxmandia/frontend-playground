const blackFolder = document.querySelector("#black-folder");
const greyFolder = document.querySelector("#grey-folder");
const yellowFolder = document.querySelector("#yellow-folder");
const album = document.querySelector("#album-img");

const dragContainer = document.querySelector(".drag-container");
let dragElement;

function handleDrag(e) {
  if (e.screenX === 0) {
    return;
  }
  dragElement.style.left = `${e.pageX}px`;
  dragElement.style.top = `${e.pageY}px`;
}

blackFolder.addEventListener("dragstart", (e) => {
  dragElement = blackFolder;
  const blankCanvas = document.createElement("canvas");

  e.dataTransfer.setDragImage(blankCanvas, 0, 0);
  document.body.appendChild(blankCanvas);

  blackFolder.addEventListener("drag", handleDrag);
  blackFolder.addEventListener("dragend", () => {
    document.body.removeChild(blankCanvas);
  });
});

greyFolder.addEventListener("dragstart", (e) => {
  dragElement = greyFolder;
  const blankCanvas = document.createElement("canvas");

  document.body.appendChild(blankCanvas);
  e.dataTransfer.setDragImage(blankCanvas, 0, 0);

  greyFolder.addEventListener("drag", handleDrag);
  greyFolder.addEventListener("dragend", () => {
    document.body.removeChild(blankCanvas);
  });
});

yellowFolder.addEventListener("dragstart", (e) => {
  dragElement = yellowFolder;
  const blankCanvas = document.createElement("canvas");

  document.body.appendChild(blankCanvas);
  e.dataTransfer.setDragImage(blankCanvas, 0, 0);

  yellowFolder.addEventListener("drag", handleDrag);
  yellowFolder.addEventListener("dragend", () => {
    document.body.removeChild(blankCanvas);
  });
});

album.addEventListener("dragstart", (e) => {
  dragElement = album;
  const blankCanvas = document.createElement("canvas");

  document.body.appendChild(blankCanvas);
  e.dataTransfer.setDragImage(blankCanvas, 0, 0);

  album.addEventListener("drag", handleDrag);
  album.addEventListener("dragend", () => {
    document.body.removeChild(blankCanvas);
  });
});
