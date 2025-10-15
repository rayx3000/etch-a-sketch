const setGridInput = document.getElementById("setGridInput");
const setColor = document.getElementById("setColor");
const setGridButton = document.getElementById("setGridButton");

setGridButton.addEventListener("click", ()=> {
    const gridInputValue = setGridInput.value;
    const selectColorValue = setColor.value;
    
    console.log(gridInputValue);
    console.log(selectColorValue);
    console.log("clicked");
});