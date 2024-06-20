let prevH, prevM, prevS;
let targetH, targetM, targetS;
let easing = 0.05;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  prevH = hour() % 12;
  prevM = minute();
  prevS = second();
  targetH = prevH;
  targetM = prevM;
  targetS = prevS;
}

function draw() {
  background(20);

  let h = hour() % 12, m = minute(), s = second();

  if (s !== prevS) { targetS = s; prevS = s; }
  if (m !== prevM) { targetM = m; prevM = m; }
  if (h !== prevH) { targetH = h; prevH = h; }

  let currentH = lerp(prevH, targetH, easing);
  let currentM = lerp(prevM, targetM, easing);
  let currentS = lerp(prevS, targetS, easing);

  let maxRadius = min(width, height) / 2.5;

  drawArc(width / 2, height / 2, maxRadius * 0.6, map(currentH, 0, 12, 0, TWO_PI));
  drawArc(width / 2, height / 2, maxRadius * 0.8, map(currentM, 0, 60, 0, TWO_PI));
  drawArc(width / 2, height / 2, maxRadius, map(currentS, 0, 60, 0, TWO_PI));

  drawOverlay(currentS);
}

function drawArc(x, y, radius, endAngle) {
  fill(150, 100, 255, 150);
  arc(x, y, radius * 2, radius * 2, -HALF_PI, -HALF_PI + endAngle, PIE);
}

function drawOverlay(s) {
  stroke(255, 127);
  strokeWeight(1);
  for (let i = 0; i < 12; i++) {
    let angle = map(i, 0, 12, 0, TWO_PI);
    let maxLength = min(width, height) / 2.5;
    let x1 = width / 2 + cos(angle) * maxLength;
    let y1 = height / 2 + sin(angle) * maxLength;
    line(width / 2, height / 2, x1, y1);

    if (s % 15 === 0) {
      let lineAngle = map(s, 0, 60, 0, TWO_PI) - HALF_PI;
      let x2 = width / 2 + cos(lineAngle) * maxLength;
      let y2 = height / 2 + sin(lineAngle) * maxLength;
      line(width / 2, height / 2, x2, y2);
    }
  }
}
