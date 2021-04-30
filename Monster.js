class mon{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':0,
            'density':0.01
        }
        this.body = Bodies.rectangle(x, y, 100, 100, options);
        this.width = 100;
        this.height = 100;
        this.image=loadImage("Monster-01.png")
        
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);        
        image(this.image,0,0,this.width,this.height);
  
        pop();
      }
  }