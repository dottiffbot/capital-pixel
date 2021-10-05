let james;
let capitalPoints;
let fontSize = 50;

function preload(){

	james = loadFont('./assets/daskapital.ttf');

}

function setup(){
	createCanvas(windowWidth, windowHeight);

	capitalPoints = james.textToPoints("CaPITvL", width/2.75, height/2, fontSize, {
		sampleFactor: 0.1,
		simplifyThreshold: 0.1
	})

}

function draw(){

	const noiseLevel = 0.01;
	background(0);

	noFill();
	stroke(255, 0, 0);
	strokeWeight(2);

	beginShape();
	capitalPoints.forEach(point =>{

		const distance = createVector(point.x - mouseX, point.y - mouseY);
		const distort = distance.mult(60/ distance.mag());

		const noiseX = 20 * noise(noiseLevel * point.x, noiseLevel * point.y, noiseLevel * frameCount) -20;
		const noiseY = 20 * noise(noiseLevel * point.x, noiseLevel * point.y, noiseLevel * frameCount) -20;

		vertex(point.x + distort.x + noiseX, point.y + distort.y + noiseY);
	})


	endShape(CLOSE);

}
