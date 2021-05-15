const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var launchForce = 100;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var stoneObj,launcherobject,treeobject;
var ground,boy;


function preload()
{
	boy = loadImage("boy.png");
}

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
    ground = new Ground(13,600,13000,50);
	stoneObj = new Stone(235,420,30);
	mango1 = new Mango(1100,100,30);
	mango2 = new Mango(1170,130,30);
	mango3 = new Mango(1010,140,30);
	mango4 = new Mango(1100,130,30);
	mango5 = new Mango(900,230,40);
	mango6 = new Mango(1140,150,40);
	mango7 = new Mango(1100,230,40);
	mango8 = new Mango(1200,200,40);
	mango9 = new Mango(1120,50,40);
	mango10 = new Mango(900,160,40);
	treeobject = new tree(1050,580);
	launcherobject = new launcher(stoneObj.body,{x:235,y:360});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");
  image(boy ,200,340,200,300);
  stoneObj.display();


  ground.display();
   treeobject.display();
   mango1.display();
   mango2.display();
   mango3.display();
   mango4.display();
   mango5.display();
   mango6.display();
   mango7.display();
   mango8.display();
   mango9.display();
   mango10.display();

   detechCollision(stoneObj,mango1);
   detechCollision(stoneObj,mango2);
   detechCollision(stoneObj,mango3);
   detechCollision(stoneObj,mango4);
   detechCollision(stoneObj,mango5);
   detechCollision(stoneObj,mango6);
   detechCollision(stoneObj,mango7);
   detechCollision(stoneObj,mango8);
   detechCollision(stoneObj,mango9);
   detechCollision(stoneObj,mango10);
   
}

function keyPressed(){
	if (keyCode === 32){
	  Matter.Body.setPosition(stoneobj.body, {x:235,y:420})
	  launcherobject.attach(stoneObj.body);
	}
}
function mouseDragged(){
	Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
	launcherobject.fly();
}

function detechCollision(s,m){
   mangoPos = m.body.position;
   stonePos = s.body.position;
   var distance = dist(stonePos.x,stonePos.y,mangoPos.x,mangoPos.y);

   if (distance<=s.r+m.r){
     Matter.Body.setStatic(m.body,false);
   }
}




