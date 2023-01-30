var angle = 0;
var rectHeight=1000000;
var diff=10;

function setup() {
createCanvas(windowWidth, windowHeight);
	noStroke();
	rectMode(CENTER);
}

function draw() {
	background(230,230,250);
	blendMode(MULTIPLY);

	push();
	
	translate(width/2, height/2);

	firstrect();
	secondrect();
	thirdrect();
	fourthrect();
	fifthrect();
	sixthrect();
	seventhrect();
	eightrect();
	ninethrect();
	thenthrect();

	pop();

	blendMode(NORMAL);

	angle = angle + 0.0001;

	if(rectHeight > 1000 || rectHeight < 180){
		diff*=-1;
	}

	rectHeight = rectHeight+diff;
}

function firstrect() {
  	rotate(degrees(angle));
	rect(150, 0, 180, rectHeight);
}

function secondrect() {
  //translate(width/8, height/8);
  //VERMELHO
  rotate(degrees(angle));
  fill(255,0,0);
  rect(150, 0, 180, rectHeight);
}
function thirdrect() {
  //translate(width/16, height/16);
    //VERDE
  rotate(degrees(angle));
  fill(0,255,0,);
  rect(150, 0, 180, rectHeight);
}

function fourthrect() {
  //translate(width/32, height/32);
  //AZUL
  rotate(degrees(angle));
  fill(0,0,255);
  rect(150, 0, 180, rectHeight);
}

function fifthrect() {
  //translate(width/64, height/64);
  //AMARELO
  rotate(degrees(angle));
  fill(255,255,0);
  rect(150, 0, 180, rectHeight);
}

function sixthrect() {
  //translate(width/6, height/6);
  //MAGENTA
  rotate(degrees(angle));
  fill(255,0,255,);
  rect(150, 0, 180, rectHeight);
}

function seventhrect() {
  //translate(width/8, height/8);
  //LARANJA
  rotate(degrees(angle));
  fill(255,140,0,);
  rect(150, 0, 180, rectHeight);
}
function eightrect() {
  //translate(width/16, height/16);
  //CYAN
  rotate(degrees(angle));
  fill(0,255,255);
  rect(150, 0, 180, rectHeight);
}

function ninethrect() {
  //VERDE
  //translate(width/32, height/32);
  rotate(degrees(angle));
  fill(0,128,128);
  rect(150, 0, 180, rectHeight);
}

function thenthrect() {
  //translate(width/64, height/64);
  //VIOLETA
  rotate(degrees(angle));
  fill(138,43,226);
  rect(150, 0, 180, rectHeight);
}