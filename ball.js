class Ball{
    constructor(x, y, size, magnitude, angle){
        this.x = x;
        this.y = y;
        this.size = size;
        this.angle = angle;
        this.magnitude = magnitude;
        this.xVelocity = this.magnitude * Math.cos(this.angle);
        this.yVelocity = this.magnitude * Math.sin(this.angle);

    
    }
    draw(){
		fill("white");
		circle(this.x, this.y, this.size);
    }
    update(){
        this.x += this.xVelocity;
		this.y += this.yVelocity;
		if (this.x - this.size/2 > 0) {
			this.xVelocity *= -1;
		}
		if (this.x + this.size/2 < width) {
			this.xVelocity *= -1;
		}
		if (this.y - this.size/2 < 0) {
			this.yVelocity *= -1;
		}
		if (this.y + this.size/2 > height) {
			this.yVelocity *= -1;
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
