import danceImage from "./dance.gif";

const canvasEvent = function () {
    const canvas = document.getElementById("canvasOne");
    const context = canvas.getContext("2d");
    context.strokeSTyle = "black";
    context.lineWidth = 10;
    context.lineJoin = "bevel";
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(25, 0);
    context.lineTo(25, 25);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.moveTo(10, 50);
    context.lineTo(30, 50);
    context.lineTo(30, 75);
    context.stroke();
    context.closePath();

    context.lineJoin = "round";
    context.lineCap = "butt";
    context.beginPath();
    context.moveTo(10, 100);
    context.lineTo(35, 100);
    context.lineTo(35, 125);
    context.stroke();
    context.closePath();
};
window.addEventListener("load", canvasEvent, false);
