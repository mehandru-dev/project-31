
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;

var plinkos = [];
var particles = [];
var divisions = [];

function preload(){
   bg = loadImage("bg2.png");
}
function setup() {

createCanvas(1190,600);
engine = Engine.create();
world = engine.world;

ground = new division(400,600,1700,10);

for(var d =0;d<=width;d = d+80){
  divisions.push(new division(d,500,10,200));
  
}  

for(var p = 0;p<=width;p=p+60){
 
  plinkos.push(new plinko(p,100));
}
for(var p = 0;p<=width;p=p+80){
  plinkos.push(new plinko(p,200));
}
for(var p = 0;p<=width;p=p+60){
  plinkos.push(new plinko(p,300));
}

console.log(frameCount);


Engine.run(engine);
}

function draw() {
  background(bg);
  ground.display();
  if(frameCount%60 === 0){
    particles.push(new Particle(random(30,780),5,10));
  }
  for(var j=0;j<plinkos.length;j++){
    plinkos[j].display();

  }
  for(var j=0;j<divisions.length;j++){
    divisions[j].display();

  }
  for(var j=0;j<particles.length;j++){
    particles[j].display();

  }
  
  drawSprites();
                                                                        
}