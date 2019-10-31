function rectangleTool(){
	//set an icon and a name for the object
	this.icon = "assets/rectangle.jpg";
	this.name = "rectangle";

	//to smoothly draw we'll draw a rect from the previous mouse location
	//to the current mouse location. The following values store
	//the locations from the last frame. They are -1 to start with because
	//we haven't started drawing yet.
	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;
    
    // if the mouse is pressed the x and Y coordinate of the top left point of a rect is set.
    // when mouse is pressed and  moved the rect begins to draw from the top left point
    // if the mouse is realeased the x and y coordinates of the bottom right of a rectangle is set. 
    
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
				rect(startMouseX, startMouseY, mouseX-startMouseX, mouseY - startMouseY);
			}

		}

		else if(drawing){
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	};


}
