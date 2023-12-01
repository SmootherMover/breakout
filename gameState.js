let button;
let text;

class GameState extends Block{
    constructor(x, y, width, height, ){
        super(x, y, width, height);
       
	}

    draw() {
        fill("white");
		rect(this.x, this.y, this.width, this.height);  
        // text = text("WELCOME", 500, 500);
        button = createButton("click me", "red");
        button.mousePressed(() => {
           start = true;
        });
	}

  
    // Use the button to change the background color.

}