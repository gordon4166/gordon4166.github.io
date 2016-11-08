//declaring variables
var song;
var button;
var loading = true;
var img;

//Setup function
function setup() {
  // Create the canvas
  var canvas = createCanvas(200, 200); //creates 200x200 canvas
  rectMode(CENTER);
  canvas.parent('sketch-holder'); //declares wrapper of canvas

  song = loadSound('music/legion.mp3', loaded); //import song
  button = createButton('Play'); //create play button
  button.parent('sketch-holder'); //position button inside of wrapper
  button.mousePressed(togglePlaying); //action to be performed on mouse click
  img = loadImage('img/ili.png'); //loads image

}


function loaded(){
  console.log('loaded'); //logs "loaded" into console, once the song has been loaded
  loading = false; // sets loading variable to false
}

function togglePlaying() {
  if (!song.isPlaying()) { //checks if the song is playing
    song.play(); // plays song
    song.setVolume(0.3); //player volume
    button.html('Pause'); //text on the button
  } else {
    song.pause(); //what the button does on click if the song IS playing
    button.html('Play');
  }
}

function draw() { //p5.js code
  background('#eee'); //background of canvas
  if(loading){
      text("Loading", 50, 180); //add "loading" text if the song is loading
    	// move the origin to the pivot point
    	translate(100, 100);

    	// then rotate the grid around the pivot point by a
    	// number of degrees equal to the frame count of the sketch
    	rotate(radians(frameCount));

    	// and draw the square at the origin
    	fill('#000');
    	rect(0, 0, 50, 50);

  }else {
    image(img, 0, height/4, img.width/4, img.height/4);
  }
}
