function createContainer(containerId, width = "800px") {
  const container = document.createElement("div");
  container.setAttribute(
    "style",
    "display: flex; flex-direction: column; width: " + width + "; height: auto;"
  );
  container.id = containerId;
  return container;
}

function createSketchpad(widthOfPad, containerId) {
  for (let i = 0; i < widthOfPad; i++) {
    const row = document.createElement("div");
    row.setAttribute("style", "display: flex; flex: 1");
    // row.setAttribute("id", `row${i}`);
    for (let j = 0; j < widthOfPad; j++) {
      const column = document.createElement("div");
      column.setAttribute("style", "flex: 1; aspect-ratio: 1/1");
      // column.setAttribute("id", `pix${i}x${j}`);
      column.addEventListener("mouseover", () => {
        column.style.backgroundColor = "gray";
      });
      column.style.border = "1px dotted gray";
      row.appendChild(column);
    }
    const container = document.querySelector(`#${containerId}`);
    container.appendChild(row);
  }

  // for (let i = 0; i < ROW; i++) {
  //   for (let j = 0; j < COLUMN; j++) {
  //     const column = document.querySelector(`#pix${i}x${j}`);
  //     column.addEventListener("mouseover", () => {
  //       column.style.backgroundColor = "gray";
  //     });
  //   }
  // }
}

//adds event to reset button
function resetAndReinitialize(containerId = "container") {
  const resetButton = document.querySelector("#reset");
  resetButton.addEventListener("click", () => {
    let widthOfPad = window.prompt(
      "How wide do you want sketchpad to be? number between 1 and 100."
    );
    while (widthOfPad < 1 || widthOfPad > 100) {
      widthOfPad = window.prompt("Bad bad user :) try again. 1 - 100");
    }
    const container = document.querySelector(`#${containerId}`);
    container.remove();
    initialize(widthOfPad);
  });
}

function initialize(
  widthOfPad = 20,
  containerId = "container",
  width = "800px"
) {
  document.body.appendChild(createContainer(containerId, width));
  createSketchpad(widthOfPad, containerId);
  resetAndReinitialize(containerId);
}
