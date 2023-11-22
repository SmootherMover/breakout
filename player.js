const PLAYERWIDTH = 150;
const SPEED = PLAYERWIDTH/4;

class Player extends Entity{
    constructor(x, y, height){
        super(x, y, PLAYERWIDTH, height)
        this.x = x;
    }
    control(){
        if (keyIsDown(LEFT_ARROW) && this.x  > 0) {
			this.x -= SPEED;
		}
		if (keyIsDown(RIGHT_ARROW) && this.x < width) {
			this.x += SPEED;
		}
    }
    draw() {
        fill("white");
		rect(this.x, this.y, this.width, this.height);

	}
}