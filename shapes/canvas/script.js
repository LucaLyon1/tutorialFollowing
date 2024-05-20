let balls = [{
    rad: 10,
    color: "#7F1734",
    x: 50,
    y: 50,
    dx: 4,
    dy: 4
},
{
    rad: 20,
    color: "#7FFF34",
    x: 100,
    y: 100,
    dx: 8,
    dy: 4
},
{
    rad: 40,
    color: "#2FFF55",
    x: 400,
    y: 500,
    dx: 2,
    dy: 6
},
{
    rad: 5,
    color: "#FF55FF",
    x: 100,
    y: 100,
    dx: 5,
    dy: 8
},
]

let canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext('2d');
let gravity = 1 / 3;

function drawBall(x, y, ballRad, color) {
    ctx.beginPath();
    ctx.arc(x, y, ballRad, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (b of balls) {
        drawBall(b.x, b.y, b.rad, b.color);
        if (b.x + b.dx > canvas.width - b.rad || b.x + b.dx < b.rad) {
            b.dx = -b.dx;
        }
        if (b.y + b.dy > canvas.height - b.rad || b.y + b.dy < b.rad) {
            b.dy = -b.dy;
        }
        b.dy += gravity;
        b.x += b.dx;
        b.y += b.dy;
    }
}

function start() {
    const interval = setInterval(animate, 16);
}
start();