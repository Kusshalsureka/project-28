
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
const Body = Matter.Body;
var boy;
var tree;
var mango;
var stone;
var ground;
var chain;


function preload()
{
	boy=loadImage("Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(1350,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
tree=new Tree(1050,250);
ground=new Ground(width/2,670,width,20);

stone=new Stone(235,420,30);



mango=new Mango(1050,150,30);
mango1=new Mango(1050,50,30);
mango2=new Mango(1150,150,30);
mango3=new Mango(1150,50,30);
mango4=new Mango(999,100,30);
chain=new Chain(stone.body,{x:235,y:420})

	Engine.run(engine);
  
}


function draw() {

  background(255);
  image(boy ,200,340,200,300);
  


  

  
  tree.display();
  stone.display();
  ground.display();
  chain.display();
  
 
 
  
  mango.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();





  detectollision(stone,mango);
  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);


  drawSprites();
 
}

function mouseDragged()
{
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
chain.fly();
    
}










function keyPressed(){
if(keyCode===32){
Matter.Body.setPosition(stone.body,{x:235,y:420})
chain.attach(stone.body);


}


}


function detectollision(lstone,lmango){

  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)

  	if(distance<=lmango.r+lstone.r)
    {
      
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }







