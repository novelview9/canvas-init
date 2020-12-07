const canvasEvent = function () {
    const canvas = document.getElementById("canvasOne");
    const context = canvas.getContext("2d");
    context.fillStyle = "black";
    context.fillRect(10, 10, 200, 200);
    context.save();
    context.rect(0, 0, 50, 50);
    context.clip();

    context.beginPath();
    context.strokeStyle = "red";
    context.lineWidth = 5;
    context.arc(100, 100, 100, (Math.PI / 180) * 0, (Math.PI / 180) * 360, false);

    context.stroke();
    context.closePath();
    context.restore();

    context.beginPath();
    context.rect(0, 0, 500, 500);
    context.clip();

    context.beginPath();
    context.strokeStyle = "blue";
    context.lineWidth = 5;
    context.arc(100, 100, 50, (Math.PI / 180) * 0, (Math.PI / 180) * 360, false);

    context.stroke();
    context.closePath();
};
window.addEventListener("load", canvasEvent, false);
