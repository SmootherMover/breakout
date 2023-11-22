class Entity{
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
    
}