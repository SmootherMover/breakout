let player;
let ball;

function setup() {
	createCanvas(800, 600);
    let randX = random(width);
    let randY = random(height);
    player = new Player(width/2 - PLAYERWIDTH/2, height - 50, PLAYERWIDTH, 10);
    ball = new Ball(randX, randY, 20, 5, 5);

}

function draw() {
    background(0)
    player.draw();
    player.control();
    ball.draw();
    ball.update();
    if(ball.checkCollisions(player)){
        ball.xSpeed *= -1;
        ball.ySpeed *= -1;
        console.log("COLLISION");
    };
    
}

