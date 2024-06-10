const canvas = document.getElementById("drawingCanvas");
const context = canvas.getContext("2d");
let drawing = false;

canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mousemove", draw);

function startDrawing(event) {
  drawing = true;
  draw(event); // Dibuja un punto donde se hizo clic
}

function stopDrawing() {
  drawing = false;
  context.beginPath(); // Comienza un nuevo trazo
}

function draw(event) {
  if (!drawing) return;

  context.lineWidth = 5;
  context.lineCap = "round";
  context.strokeStyle = "black";

  context.lineTo(
    event.clientX - canvas.offsetLeft,
    event.clientY - canvas.offsetTop
  );
  context.stroke();
  context.beginPath();
  context.moveTo(
    event.clientX - canvas.offsetLeft,
    event.clientY - canvas.offsetTop
  );
}
