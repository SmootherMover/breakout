class GameState extends Block{
    constructor(x, y, width, height){
        super(x, y, width, height);
	
	}

    draw() {
        fill("white");
		rect(this.x, this.y, this.width, this.height);
	}
}