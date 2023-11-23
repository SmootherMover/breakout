let angle = 0;

class Ball{
    constructor(x, y, size, xSpeed, ySpeed, angle){
        this.x = x;
        this.y = y;
        this.size = size;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
        this.angle = angle;
    }
    draw(){
		fill("white");
		circle(this.x, this.y, this.size);
    }
    update(){
        this.x += this.xSpeed * cos(this.angle);
		this.y += this.ySpeed * sin(this.angle);
		if (this.x > 0) {
			this.xSpeed *= -1;
		}
		if (this.x < width) {
			this.xSpeed *= -1;
		}
		if (this.y < 0) {
			this.ySpeed *= -1;
		}
		if (this.y > height) {
			this.ySpeed *= -1;
		}
    }
    checkCollisions(other){
        if(this.y > other.y && this.y < other.y + other.height && this.x > other.x  && this.x < other.x + other.width){
            return true;
        }else{
            return false;
        }
        
    }
};