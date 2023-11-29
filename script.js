let player;
let ball;
let block = [];
let score = 0;

function angleReflect(incidenceAngle, surfaceAngle){
    var a = surfaceAngle * 2 - incidenceAngle;
    return a >= 360 ? a - 360 : a < 0 ? a + 360 : a;
}

function setup() {
	createCanvas(900, 600);
    player = new Player(width/2 - PLAYERWIDTH/2, height - 50, PLAYERWIDTH, 10);
    ball = new Ball(450, 400, 20, 5, 100);
    for (let i = 0; i < 8; i++) {
        block.push(new Block(15 + 110 * i , 200, 100, 20));
        block.push(new Block(15 + 110 * i , 170, 100, 20));
        block.push(new Block(15 + 110 * i , 140, 100, 20));
        block.push(new Block(15 + 110 * i , 110, 100, 20));
      
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
        ball.angle = angleReflect(ball.angle, 0);
    };

    for(let i = 0; i < block.length; i++){
        block[i].draw();
        if(ball.checkCollisions(block[i])){
            ball.angle = angleReflect(ball.angle, 0);
    
            block.splice(i,1);
            ball.magnitude += 0.1;
            score ++;
        };
    }
    document.getElementById("score").innerHTML = "SCORE:" + score;

}




