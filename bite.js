
let capital;
let das;

function preload(){

	das = loadFont("./assets/daskapital.otf")
}



function setup (){

	createCanvas(windowWidth, windowHeight);
	capital = createGraphics(windowWidth, windowHeight);


    capital.textFont(das);
	capital.stroke("#a083b5");
	capital.strokeWeight(3);
	capital.fill("#b0bac6")
	capital.textSize(150);
	capital.textAlign(CENTER, CENTER);

	capital.text("CAPITVL", windowWidth/2, windowHeight/2.5);


}

function draw(){

	background("grey");



	const gridCell = 30;

	for (let x = 0; x < 120; x++){

		for(let y = 0; y < 60; y++){

    const wave = 0.05;
    const positionX = winMouseX / windowWidth;
    const positionY = winMouseY / windowHeight;

	const distortX = sin(frameCount * wave + x + y * 0.3) * 10;
	const distortY = cos(frameCount * wave + x + y * 0.1) * 5;

			const sx = x * gridCell + distortX * positionX;
			const sy = y * gridCell + distortY;
			const sw = gridCell;
			const sh = gridCell * positionY * 1 - positionY;


			const dx = x * gridCell;
			const dy = y * gridCell;
			const dw = gridCell;
			const dh = gridCell;

			image(capital, dx, dy, dw, dh, sx, sy, sw, sh);

		}

	}


}



function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}




