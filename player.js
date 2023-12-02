const PLAYERWIDTH = 150;
const SPEED = PLAYERWIDTH/6;

class Player{
    constructor(x, y, PLAYERWIDTH, height){
       this.x = x;
       this.y = y;
       this.width = PLAYERWIDTH;
       this.height = height;
    }
    control(){
        if(mouseIsPressed){
            if(this.x > -5 && this.x < width - PLAYERWIDTH + 5){
                this.x = mouseX - PLAYERWIDTH/2;
            }
            
            if(this.x < 0){
                this.x = 2;
            }
            if(this.x > width - PLAYERWIDTH){
                this.x = width - PLAYERWIDTH - 2;
            
            };
        }; 

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


