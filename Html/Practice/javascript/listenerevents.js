
document.addEventListener("DOMContentLoaded",onPageload);

function onPageLoad(){
    let theButton = document.getElementById("myButton");
    theButton.addEventListener("click", handleButtonClick);
}
function  handleButtonclick(){
    console.log("button clicked");
    let theButton = document.getElementById("myButton");
    theButton.removeEventListener("click", handleButtonclick)
}

