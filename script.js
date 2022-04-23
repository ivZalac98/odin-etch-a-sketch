const ROW = 20;
const COLUMN = 20;

const container = document.createElement("div");
container.setAttribute(
  "style",
  "display: flex; flex-direction: column; width: 800px; height: auto" //width: 90vw; height: 90vh
);
container.id = "container";
document.body.appendChild(container);

document.body.setAttribute(
  "style",
  "display: flex; justify-content: center; align-items: center"
);

for (let i = 0; i < ROW; i++) {
  const row = document.createElement("div");
  row.setAttribute("style", "display: flex; flex: 1");
  row.setAttribute("id", `row${i}`);
  for (let j = 0; j < COLUMN; j++) {
    const column = document.createElement("div");
    column.setAttribute("style", "flex: 1; aspect-ratio: 1/1");
    column.setAttribute("id", `pix${i}x${j}`);
    column.style.border = "1px dotted gray";
    row.appendChild(column);
  }
  container.appendChild(row);
}

for (let i = 0; i < ROW; i++) {
  for (let j = 0; j < COLUMN; j++) {
    const column = document.querySelector(`#pix${i}x${j}`);
    column.addEventListener("mouseover", () => {
      column.style.backgroundColor = "gray";
    });
  }
}
