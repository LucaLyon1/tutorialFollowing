let circle = document.querySelector('.circle');
let speed = 5;
let position = 50;
let gravity = 1;

function animate() {
    const rect = circle.getBoundingClientRect();
    const left = rect.left;
    const top = rect.top;
    if (top >= window.innerHeight - rect.height || top < 0) {
        speed = -speed;
    }
    speed += gravity;
    position += speed;
    circle.style.transform = `translate(${left + 1}px, ${position}px)`
    setTimeout(() => requestAnimationFrame(animate), 5);
}

animate();