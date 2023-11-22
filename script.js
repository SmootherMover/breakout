function setup() {
	createCanvas(800, 600);
    player = new Player(width/2 - PLAYERWIDTH/2 , height - 50, 10);
	
}

function draw() {
    background(0)
    player.draw();
    player.control();
    
    
}