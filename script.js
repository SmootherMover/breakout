let player;
let ball;
let block = [];

function setup() {
	createCanvas(800, 600);
    let randX = random(width);
    let randY = random(height);
    player = new Player(width/2 - PLAYERWIDTH/2, height - 200, PLAYERWIDTH, 50);
    ball = new Ball(randX, randY, 20, 5, 5, 5 );
    block.push(new Block(400, 200, 300, 10));

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
    };

    
    for(let i = 0; i < block.length; i++){
        block[i].draw();
        if(ball.checkCollisions(block[i])){
            ball.xSpeed *= -1;
            ball.ySpeed *= -1;
        };
        if(block[i].checkCollisions(ball)){
            
        };
    }
    
}


