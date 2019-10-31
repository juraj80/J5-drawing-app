function LineToTool(){
	this.icon = "assets/lineTo.jpg";
	this.name = "LineTo";

	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;
    
    // if the mouse is pressed the x and Y coordinate of the first point of a line is set.
    
    // when mouse is pressed and  moved the line from the first point begins to draw 
    
    // if the mouse is realeased, the x and y coordinates of the second point of a line is set. 
    
    // loadPixels() loads the pixel data for the display window into the array
    
    // updatePixels() updates the display window with the data in the pixels array.
    
	this.draw = function(){
		if(mouseIsPressed){
			if(startMouseX == -1){
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;
				loadPixels();
			}
            else{
				updatePixels();
                fill(255);
                stroke(100);
				line(startMouseX, startMouseY, mouseX, mouseY);
			}
		}
		else if(drawing){
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	};
}
