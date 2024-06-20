let flakes = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 300; i++) {
    flakes.push(new Flake());
  }
}

function draw() {
  background(0);

  for (let flake of flakes) {
    flake.update();
    flake.display();
  }
}

class Flake {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(2, 6);
    this.speed = random(1, 3);
  }

  update() {
    this.y += this.speed;
    if (this.y > height) {
      this.y = 0;
    }
  }

  display() {
    noStroke();
    fill(255); // Colore bianco per i fiocchi di neve
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}
