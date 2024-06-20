function setup() {
	createCanvas(windowWidth, windowHeight);
	angleMode(DEGREES); // Set angle mode to degrees
  }
  
  function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
  }
  
  function draw() {
	background(50);
  
	// Draw a gradient background
	for (let y = 0; y < height; y++) {
	  let inter = map(y, 0, height, 0, 1);
	  let c = lerpColor(color(0, 102, 153), color(255, 204, 0), inter);
	  stroke(c);
	  line(0, y, width, y);
	}
  
	translate(width / 2, height / 2);
  
	// Draw the clock face
	noStroke();
	fill(255, 100);
	ellipse(0, 0, 400, 400);
  
	stroke(0, 50);
	line(-200, 0, 200, 0);
	line(0, -200, 0, 200);
  
	noStroke();
	fill(0);
  
	// Draw hour hand
	push();
	let hr = hour() % 12;
	let hrAngle = map(hr, 0, 12, 0, 360);
	rotate(hrAngle);
	fill(0, 102, 153);
	rect(-8, -140, 16, 140);
	pop();
  
	// Draw minute hand
	push();
	let mn = minute();
	let mnAngle = map(mn, 0, 60, 0, 360);
	rotate(mnAngle);
	fill(0, 204, 255);
	rect(-5, -170, 10, 170);
	pop();
  
	// Draw second hand
	push();
	let sc = second();
	let scAngle = map(sc, 0, 60, 0, 360);
	let m = (new Date()).getMilliseconds() / 1000 * 6;
	rotate(scAngle + m);
	fill(255, 0, 0);
	rect(-2, -180, 4, 180);
	ellipse(0, -155, 24, 24);
	pop();
  
	// Draw the center
	fill(255);
	ellipse(0, 0, 12, 12);
  
	// Add shadows for hands
	push();
	translate(5, 5);
	fill(0, 50);
	// Hour hand shadow
	rotate(hrAngle);
	rect(-8, -140, 16, 140);
	pop();
  
	push();
	translate(5, 5);
	fill(0, 50);
	// Minute hand shadow
	rotate(mnAngle);
	rect(-5, -170, 10, 170);
	pop();
  
	push();
	translate(5, 5);
	fill(0, 50);
	// Second hand shadow
	rotate(scAngle + m);
	rect(-2, -180, 4, 180);
	ellipse(0, -155, 24, 24);
	pop();
  }
  