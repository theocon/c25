class Boat {
    constructor(x,y,w,h,boatPos)
    {
      this.body = Bodies.rectangle(x,y,w,h)
      this.width = w
      this.height = h
      this.boatPos = boatPos
      this.image = loadImage("assets/boat.png");
      World.add(world, this.body);


      
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push()
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, this.boatPos, this.width, this.height);
        pop()


    }
}
