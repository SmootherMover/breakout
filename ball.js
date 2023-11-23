class Ball{
    constructor(x, y, size, xSpeed, ySpeed){
        this.x = x;
        this.y = y;
        this.size = size;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
    }
    draw(){
		fill("white");
		circle(this.x, this.y, this.size);
    }
    update(){
        this.x += this.xSpeed;
		this.y += this.ySpeed;
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
        if(this.y > other.y && this.x > other.x  && this.x < other.x + other.width){
            return true;
        }else{
            return false;
        }
        
    }
};