const canvasEvent = function () {
    const canvas = document.getElementById("canvasOne");
    const context = canvas.getContext("2d");
    context.strokeSTyle = "black";

    context.beginPath();
    context.strokeStyle = "black";
    context.lineWidth = 5;
    context.arc(100, 100, 20, (Math.PI / 180) * 0, (Math.PI / 180) * 90, true);
    context.stroke();
    context.closePath();
};
window.addEventListener("load", canvasEvent, false);
