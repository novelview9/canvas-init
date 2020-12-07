const canvasEvent = function () {
    const canvas = document.getElementById("canvasOne");
    const context = canvas.getContext("2d");
    context.strokeSTyle = "black";

    context.beginPath();
    context.strokeStyle = "black";
    context.lineWidth = 5;
    context.moveTo(100, 0);
    context.bezierCurveTo(0, 495, 300, 55, 150, 300);
    context.stroke();

    context.closePath();
};
window.addEventListener("load", canvasEvent, false);
