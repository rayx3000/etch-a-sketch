const setGridInput = document.getElementById("setGridInput");
const setColor = document.getElementById("setColor");
const setGridButton = document.getElementById("setGridButton");
const container = document.getElementById("container");

setGridButton.addEventListener("click", () => {
    const colorValue = setColor.value;
    const gridInputValue = parseInt(setGridInput.value, 10);

    if (isNaN(gridInputValue) || gridInputValue < 2 || gridInputValue > 200) {
        console.log("Grid size must be a number between 2 and 200.");
        return; 
    }

    if(!colorValue){
        console.log("Please put a Color");
        return;
    }

    const squaredValue = gridInputValue * gridInputValue
    
    for(let x = 0; x < squaredValue; x++){
        console.log(x);
    }

    console.log(colorValue)
});