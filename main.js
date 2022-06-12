var canvas= new fabric.Canvas('myCanvas')
// Create canvas variable

//Set initial positions for ball and hole images.
var ball_x=0;
var ball_y=0;
var hole_y=400;
var hole_x=800;
var ball_obj = ""; 
var hole_obj = "";
//block_image_width = 5;
//block_image_height = 5;

function load_img(){
	console.log("anmol123")
	// write code to Upload golf image on the canvas
	fabric.Image.fromURL("golf-h.png", function(img) {
		
		hole_obj=img
		console.log("img12");
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
			top: hole_y,
			left: hole_x,
		})
		canvas.add(hole_obj);	
	})
	new_image()
	
}

function new_image()
{
	// write code to Upload ball image on canvas
	fabric.Image.fromURL("ball.png", function(img2){
		ball_obj=img2
		ball_obj.scaleToWidth(50)
		ball_obj.scaleToHeight(50)
		ball_obj.set({
			top:ball_y,
			left:ball_x,
		})
		canvas.add(ball_obj);	
	});

	
	
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	if((ball_x==hole_x)&&(ball_y==hole_y)){
		//canvas.remove(hole_obj);
		canvas.remove(ball_obj)
		document.getElementById("hd3").innerHTML="Hurrah!!!! you've hit the goal"
		window.alert("congrats")
		//document.write ("This is a warning message!")
		document.getElementById("myCanvas").style.borderColor="red"
	} 	else { 	
			if(keyPressed == '38')
			{
				up();
				console.log("up");
			}
			if(keyPressed == '40')
			{
				down();
				console.log("down");
			}
			if(keyPressed == '37')
			{
				left();
				console.log("left");
			}
			if(keyPressed == '39')
			{
				right();
				console.log("right");
			}
		}
	}
	
	function up()
	{
		// Write a code to move ball upward.
		if(ball_y>=0){
			ball_y=ball_y-10
			console.log("x"+ball_x+", "+"y"+ball_y)
			//canvas.remove(ball_obj)
			canvas.remove(ball_obj)
			new_image();
			//load_img()
			
		}
	}

	function down()
	{
		 // Write a code to move ball downward.
		 if(ball_y<=450){
			ball_y=ball_y+10
			console.log("x"+ball_x+", "+"y"+ball_y)
			//canvas.remove(ball_obj)
			canvas.remove(ball_obj)
			new_image();
			//load_img()
			
		}
	}

	function left()
	{
		if(ball_x >5)
		{
			// Write a code to move ball left side.
			ball_x=ball_x-10
			console.log("x"+ball_x+", "+"y"+ball_y)
			//canvas.remove(ball_obj)
			canvas.remove(ball_obj)
			new_image();
			//load_img()
			
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			// Write a code to move ball right side.
			canvas.remove(ball_obj)
			ball_x=ball_x+10;
			console.log("x"+ball_x+", "+"y"+ball_y)
			//canvas.remove(ball_obj)
			//canvas.remove(ball_obj)
			console.log("fun")
			new_image();
			//load_img()
			
		}
	}
	


