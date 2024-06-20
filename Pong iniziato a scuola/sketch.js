let posizioneX, posizioneY



function setup() {
	createCanvas(windowWidth, windowHeight)

	posizioneX = width/2
	posizioneY = height/2

	velX = 10
	velY = 3


}
function windowResized(){
	resizeCanvas(windowWidth, windowHeight)


}


function draw() {
	//background(200);
	
	posizioneX += velX;
	posizioneY += velY;

	if (posizioneX > width || posizioneX < 0) {
		velX *= -1; // Reverse direction horizontally
	}

	if (posizioneY > height || posizioneY < 0) {
		velY *= -1; // Reverse direction vertically
	}

	circle(posizioneX, posizioneY, 30);
}