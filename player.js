const PLAYERWIDTH = 150;
const SPEED = PLAYERWIDTH/4;

class Player{
    constructor(x, y, PLAYERWIDTH, height){
       this.x = x;
       this.y = y;
       this.width = PLAYERWIDTH;
       this.height = height;
    }
    control(){
        if (keyIsDown(LEFT_ARROW) && this.x > 0) {
			this.x -= SPEED;
		}
		if (keyIsDown(RIGHT_ARROW) && this.x < width - PLAYERWIDTH) {
			this.x += SPEED;
		}
    }
    draw() {
        fill("red");
		rect(this.x, this.y, this.width, this.height);

	}
}


