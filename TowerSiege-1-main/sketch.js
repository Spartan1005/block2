const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1, block2, block3, block4, block5, block6, block7, block8, block9;
var rock, slingShot;

function preload() {
background("black");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    

    block1 = new block(330,335,30,40);
    block2 = new block(360,335,30,40);
    block3 = new block(390,335,30,40);
    block4 = new block(420,335,30,40);
    block5 = new block(450,335,30,40);
    
    block6 = new block(360,195,30,40);
    block7 = new block(390,195,30,40);
    block8 = new block(420,195,30,40);
   
    block9 = new block(390,155,30,40);
   
    rock = new Rock(100,50);
    slingshot = new SlingShot(rock.body,{x:200, y:50});
}

function draw(){
    Engine.update(engine);
    strokeWeight(4);
    block1.display();
    block2.display();
    ground.display();
   

    block3.display();
    block4.display();
   
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    
    rock.display();
   
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(rock.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode=32){
    slingshot.attach(rock.body)
    }
    }
