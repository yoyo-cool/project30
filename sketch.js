const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint
var visibility = 255

function preload(){
    polygonImg= loadImage("tom.png")
}

function setup(){
    createCanvas(1200,700)
    engine= Engine.create()
    world= engine.world
    Engine.run(engine)

    polygon= Bodies.circle(160,384,20)
    World.add(world,polygon)

// Create Bodies here  
ground1=new ground(600,height,1200,50)
SlingShot1=new SlingShot(polygon, {x:300, y:320})
block1=new Block2(600,200,40,80)
block2=new Block2(500,250,40,80)
block3=new Block2(550,250,40,80)
block4=new Block2(600,250,40,80)
block5=new Block2(650,250,40,80)
block6=new Block2(700,250,40,80)

platform1=new ground(600,400,300,30)
}

function draw(){
    background("black")
    textSize(40)
    text(mouseX+":"+ mouseY,200,200)

    imageMode(CENTER)
    image(polygonImg,polygon.position.x,polygon.position.y,50,50)

    ground1.display()
    SlingShot1.display()
    block1.display()
    block2.display()
    block3.display()
    block4.display()
    block5.display()
    block6.display()
    platform1.display()
}

function mouseDragged(){
    Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY})
  }

  function mouseReleased(){
    SlingShot1.fly()
  }

  
  function keyPressed(){
    if(keyCode==32){
    SlingShot1.attach()
    }
  }
  