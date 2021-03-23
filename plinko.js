class plinko{
    constructor(x,y){
    var options={
        isStatic:true
    }
    this.body = Bodies.circle(x,y,17,options);
    this.x= x;
    this.y = y;

    World.add(world,this.body);
    }
    display(){
      ellipseMode(CENTER);
      fill("white");
      stroke("black");
      ellipse(this.x,this.y,14);


    }
}