const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine,world
var ground;
var plinko=[]
var particle
var division=[]
var PLAY=1
var END=0
var gameState=PLAY
var count=0
var score=0
function setup() {
  createCanvas(500,800);
  engine=Engine.create()
  world=engine.world
  ground=new Ground(width/2,height,width,20)
  for (var i=7;i<=width;i=i+70) {
    division.push(new Division(i,700,10,300)) 
  }
  for (var i=30;i<=width;i=i+70) {
  plinko.push(new Plinko(i,200))
  }
  for (var i=10;i<=width;i=i+70) {
    plinko.push(new Plinko(i,300))
    }
  for (var i=30;i<=width;i=i+70) {
      plinko.push(new Plinko(i,400))
      }
  for (var i=10;i<=width;i=i+70) {
        plinko.push(new Plinko(i,500))
        }
  
}

function draw() {
  background(0);
  Engine.update(engine) 
  for (i=0;i<division.length;i++) {
    division[i].display();
  }
  ground.display();
  for (i=0;i<plinko.length;i++) {
    plinko[i].display();
}
//if(frameCount%10===0) {
  //particle.push(new Particle(random(50,400),10))
//}
//for (i=0;i<particle.length;i++) {
  //particle[i].display();
//}
fill("white")
textSize(20)
text("200",25,600)
text("500",95,600)
text("1000",165,600)
text("5000",235,600)
text("1000",305,600)
text("500",380,600)
text("200",455,600)
text("SCORE"+ score,355,60)
text("count"+ count,355,90)
if(particle!=null) {
  particle.display()
  if(particle.body.position.y>600&&(particle.body.position.x<70||particle.body.position.x>450)) {
    score=score+200
    particle=null

  }
else if(particle.body.position.y>600&&(particle.body.position.x<140||particle.body.position.x>350)) {
    score=score+500
    particle=null
  }
else if(particle.body.position.y>600&&(particle.body.position.x<210||particle.body.position.x>280)) {
    score=score+1000
    particle=null
  }
else if(particle.body.position.y>600&&(particle.body.position.x<280)) {
    score=score+5000
    particle=null
  }

}
if(count>=5) {
  gameState=END
}
if(gameState===END) {
  text("GAME OVER",100,100)
}
strokeWeight(5)
stroke("yellow")
line(0,550,500,550)
}
function mouseClicked() {
  if(gameState!==END) {
    particle=new Particle(mouseX,40)
    count=count+1
  }
}
