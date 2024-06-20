let drops = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 500; i++) {
    drops.push(new Drop());
  }
}

function draw() {
  background(0);

  for (let drop of drops) {
    drop.fall();
    drop.display();
  }
}

class Drop {
  constructor() {
    this.x = random(width);
    this.y = random(-500, -50);
    this.z = random(0, 20);
    this.len = map(this.z, 0, 20, 10, 20);
    this.yspeed = map(this.z, 0, 20, 4, 10);
    this.xspeed = map(this.z, 0, 20, 1, 3);
  }

  fall() {
    this.y += this.yspeed;
    this.x += this.xspeed;
    let grav = map(this.z, 0, 20, 0, 0.2);
    this.yspeed += grav;

    if (this.y > height) {
      this.y = random(-200, -100);
      this.yspeed = map(this.z, 0, 20, 4, 10);
      this.x = random(width);
    }
    if (this.x > width || this.x < 0) {
      this.x = random(width);
    }
  }

  display() {
    let thickness = map(this.z, 0, 20, 1, 3);
    stroke(173, 216, 230); // Colore azzurro per la pioggia
    strokeWeight(thickness);
    line(this.x, this.y, this.x, this.y + this.len);
  }
}
