let player;
let ball;
let block = [];
let gameover = false;
let wincondition;
let win = false;
let score = 0;

function angleReflect(incidenceAngle, surfaceAngle){
    var a = surfaceAngle * 2 - incidenceAngle;
    return a >= 360 ? a - 360 : a < 0 ? a + 360 : a;
};

function restart(){
    gameover = false;
    document.getElementById("defaultCanvas0").style.display = "flex";
    document.getElementById("titlebar").style.display = "flex";
    document.getElementById("gameover").remove();
    player;
    ball;
    block = [];
    gameover = false;
    win = false;
    score = 0;
    setup();
    draw();
    loop();
};

function setup() {
	createCanvas(900, 600);
    player = new Player(width/2 - PLAYERWIDTH/2, height - 50, PLAYERWIDTH, 10);
    ball = new Ball(450, 400, 20, 5, 100);
    for (let i = 0; i < 9; i++) {
        block.push(new Block(100 * i , 200, 100, 20, "blue"));
        block.push(new Block(100 * i , 180, 100, 20, "red"));
        block.push(new Block(100 * i , 160, 100, 20, "green"));
        block.push(new Block(100 * i , 140, 100, 20, "yellow"));
        block.push(new Block(100 * i , 120 , 100, 20, "orange"));
        block.push(new Block(100 * i , 100 , 100, 20, "violet"));
        block.push(new Block(100 * i , 80 , 100, 20, "purple"));

    }
    wincondition = block.length;
    
}

function draw() {
    if(gameover == false && win == false){   
        background(0);
        player.draw();
        player.control();
        ball.draw();
        ball.update();
    
        if(ball.checkCollisions(player)){
            ball.angle = angleReflect(ball.angle, 0) + random (-5,5);
        };
    
        for(let i = 0; i < block.length; i++){
            block[i].draw();
            if(ball.checkCollisions(block[i])){
                ball.angle = angleReflect(ball.angle, 0);
                block.splice(i,1);
                ball.magnitude += 0.2;
                score ++;
                if(score == wincondition){
                    win = true;
                }
            };
        }

    }else if(gameover == true){
        document.getElementById("defaultCanvas0").style.display = "none";
        document.getElementById("titlebar").style.display = "none";
        let gameoverdiv = document.createElement('div');
        gameoverdiv.innerHTML = `<div id = "gameover"><p>GAME OVER! SCORE: ${score}</p><button onclick="restart()"><p>RESTART?</p></button></div>`;
        document.body.appendChild(gameoverdiv);
        noLoop();
        return;
    }else if(win == true){
        document.getElementById("defaultCanvas0").style.display = "none";
        document.getElementById("titlebar").style.display = "none";
        let gameoverdiv = document.createElement('div');
        gameoverdiv.innerHTML = `<div id = "gameover"><p>YOU WIN! SCORE: ${score}</p><button onclick="restart()"><p>RESTART?</p></button></div>`;
        document.body.appendChild(gameoverdiv);
        noLoop();
        return;
    };
    document.getElementById("titlebar").innerHTML = `<p>BREAKOUT</p><p id="score">SCORE: ${score}</p>`;
};





