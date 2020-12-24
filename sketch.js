const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var groundObject,paperObject,dustbinObject,dustbinObject1,dustbinObject2;

var world,engine,render,ground1;

function setup() {
	createCanvas(1200, 600);
	engine = Engine.create();
	world = engine.world;
  dustbinObject= new bin(900,590,200,20);
	dustbinObject1= new bin(800,520,20,280);
	dustbinObject2= new bin(1000,520,20,280);
  paperObject=new paper(200,450,40);
  ground1 = new ground(600,590,1200,20)

	//var render = Render.create({
   //  element: document.body,
     // engine: engine,
    //   options: {
         // width: 1200,
       //    height: 700,
           // wireframes: false
           
           
           


	Engine.run(engine);
 // Render.run(render);
}


function draw() {
  rectMode(CENTER);
  background("white");
  paperObject.display();
  dustbinObject.display();
  //dustbinObject1.display();
  //dustbinObject2.display();
 
  ground1.display();

 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:45,y:-45});
  
  }

}
