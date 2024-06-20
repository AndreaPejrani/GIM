let drops = [];
let numDrops = 800; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < numDrops; i++) {
    drops.push(new Drop());
  }
}

function draw() {
  background(0);
  drops.forEach(drop => {
    drop.fall();
    drop.display();
  });
}

class Drop {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = random(width);
    this.y = random(-500, -50);
    this.z = random(0, 20);
    this.len = map(this.z, 0, 20, 10, 25);
    this.yspeed = map(this.z, 0, 20, 5, 15);
    this.xspeed = random(-1, 1); 
    this.thickness = map(this.z, 0, 20, 1, 2); 
    this.color = color(173, 216, 230, 150); 
  }

  fall() {
    this.y += this.yspeed;
    this.x += this.xspeed;
    this.yspeed += map(this.z, 0, 20, 0, 0.2); 
    if (this.y > height) {
      this.reset();
    }
    if (this.x > width + 20 || this.x < -20) {
      this.x = random(width);
    }
  }

  display() {
    strokeWeight(this.thickness);
    stroke(this.color);
    line(this.x, this.y, this.x + this.xspeed * 5, this.y + this.len); 
  }
}
