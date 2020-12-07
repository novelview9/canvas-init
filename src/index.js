const canvasEvent = function () {
    const canvas = document.getElementById("canvasOne");
    const context = canvas.getContext("2d");
    context.fillStyle = "black";
    context.fillRect(10, 10, 200, 200);
    context.fillStyle = "red";
    context.fillRect(1, 1, 50, 50);
    context.globalCompositeOperation = "source-over";
    context.fillRect(60, 1, 50, 50);
    context.globalCompositeOperation = "destination-over";
    context.fillRect(1, 60, 50, 50);
    context.globalAlpha = 0.5;
    context.globalCompositeOperation = "source-atop";
    context.fillRect(60, 60, 50, 50);
};
window.addEventListener("load", canvasEvent, false);
