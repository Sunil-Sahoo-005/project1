const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let fireworks = [];

class Firework {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = 2;
        this.life = 100;
        this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
        this.dx = (Math.random() - 0.5) * 6;
        this.dy = (Math.random() - 0.5) * 6;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    update() {
        this.x += this.dx;
        this.y += this.dy;
        this.life--;
    }
}

function startFireworks() {
    for (let i = 0; i < 200; i++) {
        fireworks.push(
            new Firework(
                Math.random() * canvas.width,
                Math.random() * canvas.height
            )
        );
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    fireworks.forEach((f, index) => {
        f.draw();
        f.update();
        if (f.life <= 0) {
            fireworks.splice(index, 1);
        }
    });

    requestAnimationFrame(animate);
}

animate();
