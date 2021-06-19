class Block2 extends Block {
    constructor(x, y){
      super(x,y,50,50);
      this.image = loadImage("jerry.png");
      this.visibility=255
    }
  display()
  {
    console.log(this.body.speed)
    if(this.body.speed<12){
    super.display();
    } else{
      World.remove(world,this.body)
      push()
      tint(255,this.visibility)
      image(this.image, this.body.position.x,this.body.position.y,this.width,this.height)
      this.visibility-=5
      pop()
    }
  }};
  