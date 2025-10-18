const setGridInput = document.getElementById("setGridInput");
const setColor = document.getElementById("setColor");
const setGridButton = document.getElementById("setGridButton");
const clearButton = document.getElementById("clearButton");
const container = document.querySelector(".container");

function createGrid() {
  const colorValue = setColor.value;
  const gridInputValue = parseInt(setGridInput.value, 10);

  if (isNaN(gridInputValue) || gridInputValue < 2 || gridInputValue > 200) {
    console.error("Grid size must be a number between 2 and 200.");
    alert("Grid size must be a number between 2 and 200.");
    return;
  }

  if (!colorValue) {
    console.error("Please choose a color.");
    alert("Please choose a color.");
    return;
  }

  container.innerHTML = "";

  container.style.gridTemplateColumns = `repeat(${gridInputValue}, 1fr)`;

  const squaredValue = gridInputValue * gridInputValue;
  const frag = document.createDocumentFragment();

  for (let i = 0; i < squaredValue; i++) {
    const square = document.createElement("div"); 
    square.className = "square";
    square.style.background = colorValue;
    square.setAttribute("data-index", i + 1);
    square.setAttribute("role", "img");
    square.setAttribute("aria-label", `Grid cell ${i + 1}`);

    frag.appendChild(square);
  }

  container.appendChild(frag);
  console.log(`Created ${squaredValue} squares with color ${colorValue}`);
}

setGridButton.addEventListener("click", createGrid);

clearButton.addEventListener("click", () => {
  container.innerHTML = "";
  console.log("Grid cleared");
});

setGridInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") createGrid();
});