class Block{
    constructor(x, y, width, height){
		this.x = x;
		this.y = y;
		this.width = width;
        this.height = height;
	
	}
	draw() {
        fill("white");
		rect(this.x, this.y, this.width, this.height);
	}
    checkCollisions(other){
        if(this.y > other.y && this.x > other.x  && this.x < other.x + other.width){
            return true;
        }else{
            return false;
        }
        
    }
};