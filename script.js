// JavaScript code to change the background color
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("changeColorButton");
    const colors = ["#ff5733", "#33ff57", "#5733ff", "#ff33e1", "#33e1ff"];
    let colorIndex = 0;

    button.addEventListener("click", function () {
        document.body.style.backgroundColor = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    });
});
