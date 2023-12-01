let player;
let ball;
let block = [];
let menu;
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
        block.push(new Block(15 + 110 * i , 200, 100, 20, "blue"));
        block.push(new Block(15 + 110 * i , 170, 100, 20, "red"));
        block.push(new Block(15 + 110 * i , 140, 100, 20, "green"));
        block.push(new Block(15 + 110 * i , 110, 100, 20, "yellow"));
        block.push(new Block(15 + 110 * i , 80 , 100, 20, "orange"));
      
    }
  

console.log(block.length);
}

function draw() {
    background(0);
    // player.draw();
    // player.control();
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
    document.getElementById("titlebar").innerHTML = `<p>BREAKOUT</p><p id="score">SCORE: ${score}</p>`;
    }





