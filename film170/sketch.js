var star = ["Twinkle,", "twinkle,", "little star", "How I wonder", "what you are!", "Up above", "the world", "so high,", "Like a diamond", "in the sky."];
var alphas = [250, 200, 150, 100, 50, 50, 100, 150, 200, 250];
var reverse = [0, 0, 0, 0, 0, 1, 1, 1, 1, 1];
var clicks = 0;
var xpos = [];
var ypos = [];
var maxWidth;
var maxHeight;
var wdisplace;
var hdisplace;

function setup() {
	createCanvas(windowWidth, windowHeight);
	maxWidth = 0.8*windowWidth;
	maxHeight = 0.8*windowHeight;
	wdisplace = 0.05*windowWidth;
	hdisplace = 0.05*windowHeight
	textSize(32);
	// initialize positions of all "stars"
	for(var i=0; i<star.length; i++) {
		xpos.push(Math.random()*maxWidth + wdisplace);
		ypos.push(Math.random()*maxHeight + hdisplace);
	}
}

function draw() {
	background('#000000');
	for(var i=0; i<star.length; i++) {
		if(reverse[i] == 0) {
			// fade in
			alphas[i]+=5;
			// if max visibility, reverse to 0
			if(alphas[i] == 250) {
				reverse[i] = 1;
			}
		} else {
			// fade out
			alphas[i]-=5;
			if(alphas[i] == 0) {
				reverse[i] = 0;
				// new positions
				xpos[i] = Math.random()*maxWidth + wdisplace;
				ypos[i] = Math.random()*maxHeight + hdisplace;
			}
		}
		if(i == clicks) {
			fill(255, 255, 0, alphas[i]);
		} else {
			fill(255, 255, 255, alphas[i]);
		}
		text(star[i], xpos[i], ypos[i]);
	}
}

function mouseClicked() {
	clicks++;
	if(clicks == 10) {
		clicks = 0;
	}
}