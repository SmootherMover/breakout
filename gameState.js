let button;

class GameState extends Block{
    constructor(x, y, width, height, ){
        super(x, y, width, height);
       
	}

    draw() {
        fill("white");
		rect(this.x, this.y, this.width, this.height);
    
	}

  
    // Use the button to change the background color.
    button.mousePressed(() => {
      let g = random(255);
      background(g);
    });
}