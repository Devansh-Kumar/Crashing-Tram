const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg;
var ground;
var b1,b2,b3,b4,b5,b6;
var rock;
var c1,c2,c3,c4,c5;
var collision;
var flag;

function preload(){
bg = loadImage("images/bg.jpg") 
sound = loadSound("sound/train_crossing.mp3");  
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,380,1200,20);
b1 = new Boggie(50,170,50,50);
b2 = new Boggie(150,170,50,50);
b3 = new Boggie(250,170,50,50);
b4 = new Boggie(350,170,50,50);
b5 = new Boggie(450,170,50,50);
b6 = new Boggie(550,170,50,50);
rock = new Rock(1100,200,100,100);
c1 = new Chain(b1.body,b2.body);
c2 = new Chain(b2.body,b3.body);
c3 = new Chain(b3.body,b4.body);
c4 = new Chain(b4.body,b5.body);
c5 = new Chain(b5.body,b6.body);

}

function draw(){
    background(bg);
    Engine.update(engine);
    ground.display();
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    rock.display();
    c1.display();
    c2.display();
    c3.display();
    c4.display();
    c5.display();
    collision = Matter.SAT.collides(b6.body,rock.body);

    if(collision.collided){
   flag = 1; 
    }

    if (flag === 1){
    fill("red");
    textSize(24);
    text("CRASHED",600,150); 
    sound.play();
    }

}


function keyPressed(){
    if(keyCode === RIGHT_ARROW){
   Matter.Body.applyForce(b6.body,{x:b6.body.position.x,y:b6.body.position.y},{x:0.5,y:0})    
    }



}