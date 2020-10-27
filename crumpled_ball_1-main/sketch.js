const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000,600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

ground=new Ground(width/2,550,width,20);
dustbin1=new Dustbin(859,510,10,60);
dustbin2=new Dustbin(740,510,10,60);
dustbin3=new Dustbin(800,535,130,10);
paper=new Paper(200,450,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
 ground.display();
 dustbin1.display();
 dustbin2.display();
 dustbin3.display();
 paper.display();
}
function keyPressed(){
	if (keyCode===UP_ARROW)
	Matter.Body.applyForce(paper.body,paper.body.position,{x:55	,y:-75});

}


	


