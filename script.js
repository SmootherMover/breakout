let player;
let ball;
let block = [];
let score = 0;
let j = 0;
let k = 0;

function angleReflect(incidenceAngle, surfaceAngle){
    var a = surfaceAngle * 2 - incidenceAngle;
    return a >= 360 ? a - 360 : a < 0 ? a + 360 : a;
}

function setup() {
	createCanvas(900, 600);
    let randX = random(width);
    let randY = random(height);
    player = new Player(width/2 - PLAYERWIDTH/2, height - 50, PLAYERWIDTH, 10);
    ball = new Ball(randX, randY, 20, 5, Math.PI/4);
    for (let i = 0; i < 8; i++) {
        block.push(new Block(15 + 110 * i , 200, 100, 20));
        block.push(new Block(15 + 110 * j , 170, 100, 20));
        block.push(new Block(15 + 110 * k , 140, 100, 20));
        j++; k++;
    }
    // for (let j = 0; j < 8; j++) {
    //     block.push(new Block(15 + 110 * j , 170, 100, 20));
    // }

console.log(block.length);
}

function draw() {
    background(0)
    player.draw();
    player.control();
    ball.draw();
    ball.update();
    if(ball.checkCollisions(player)){
        ball.xVelocity *= -1;
        ball.yVelocity *= -1;
    };

    for(let i = 0; i < block.length; i++){
        block[i].draw();
        if(ball.checkCollisions(block[i])){
            ball.xVelocity *= -1;
            ball.yVelocity *= -1;
            block.splice(i,1);
        };
       
    }
    
}




