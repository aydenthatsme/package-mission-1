var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var groundSprite;
/*
1) packageSprite: that ugly rectangle thing
2) packageImg: the pretty photo
3) packageBody: the physics engine body for the package which gives  a realistic effect on being dropped down from the helicopter
*/
var packageBody,ground;

var myEngine, myWorld;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	//rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10, 10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor="white";


	myEngine = Engine.create();
	myWorld = myEngine.world;

	//physics engine wali body

	var packageBody_options={
		'restitution':1.0, 
		isStatic: true


//restitution, density, friction all are written within single ' '
//isStatic is the only thing which isn't written between ' '. Why? bcoz isStatic gives 2 values: true and false
//true and false are boolean values inside the computer

};
	packageBody = Bodies.circle(width/2 , 200 , 5 ,packageBody_options);
	World.add(myWorld, packageBody);
	

	//Create a phyhsics engine wala Ground
	var ground_options={
	isStatic:true
	};

	ground = Bodies.rectangle(width/2, 650, width, 10 , ground_options);
	 World.add(myWorld, ground);
	 
	 /*
	 1) physics engien wali body is only presesnt in the computer's memory
	 2) u can't see it
	 3) to see it, u need to put a command in functtion draw ( ) like --> rect () or ellipse ()
	 */

	
  
}


function draw() {
background("black");

  Engine.update(myEngine);
  rectMode(CENTER);
  
  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;

  drawSprites();
 
}

function keyPressed() {
	/*
	1) there are certain pre defined functions liek preload( ) and setup () which we don't call inside function draw ever
	2) Similarly, there are some more predefined functions called as eventlisteners
	3) keyPressed ( ) is an eventlistener
	4) so u dont need to call it inside func draw()

	5) what is keycode?
	6) keycode is the ASCII code given to all the keys on ur keyboard. they are accepted worldwide
	7) like for space bar, ascii code is 32.
	8) A-Z : 65-90
	9) a-z : 97- 122
	10) 0 -9 : 48-57
	*/
 if (keyCode === DOWN_ARROW) {
     
   Matter.Body.setStatic (packageBody, false);
    
  }
}



