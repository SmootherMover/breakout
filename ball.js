class Ball{
    constructor(x, y, size, magnitude, angle){
        this.x = x;
        this.y = y;
        this.size = size;
        this.angle = angle;
        this.magnitude = magnitude;
        this.xVelocity;
        this.yVelocity;

    
    }
    draw(){
		fill("white");
		circle(this.x, this.y, this.size);
    }
    update(){
        this.xVelocity = this.magnitude * Math.cos(this.angle * (Math.PI/180));
        this.yVelocity = this.magnitude * Math.sin(this.angle * (Math.PI/180));
        this.x += this.xVelocity;
		this.y += this.yVelocity;
		if (this.x - this.size/2 > 0) {
			this.angle = angleReflect(this.angle, 90);
		}
		if (this.x + this.size/2 < width) {
			this.angle = angleReflect(this.angle, 90);
		}
		if (this.y - this.size/2 < 0) {
            this.angle = angleReflect(this.angle, 0);
		}
		// if (this.y + this.size/2 > height) {
		// 	this.angle = angleReflect(this.angle, 0);
		// }
        if (this.y > height){
            gameover = true;
        }
    }
    checkCollisions(other){
            if(this.y > other.y && this.y  < other.y + other.height && this.x > other.x  && this.x  < other.x + other.width){
                return true;
            }else{
                return false;
            }
        }

};
