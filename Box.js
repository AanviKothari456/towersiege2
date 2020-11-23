class Box {
  constructor(x, y, width, height){
  var options= {
    restitution : 0.8,
    friction : 0.01,
    density : 0.05,
    isStatic:false

  }
  this.body = Bodies.rectangle(x,y,width,height,options);
  this.width = width;
  this.height = height;
  World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("pink");
        var angle = this.body.angle;
        console.log(this.body.speed);
    if(this.body.speed<3){
      
//var pos=this.body.position;
push();
translate(pos.x,pos.y);
rotate(angle);
rectMode(CENTER);
rect(0,0, this.width, this.height);
pop();
    }
    else{

      World.remove(world,this.body);
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      //this.Visibility = this.Visibility - 5;
     // tint(255,this.Visiblity);
// rect(0,0,this.width, this.height);
 
    pop();
    }
      }
};
