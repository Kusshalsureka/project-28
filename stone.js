class Stone{

    constructor(x,y,radius){
    
        var options={
            isStatic:true,
            restitution:0,
            friction:1
            
            }
    this.radius=radius;
    this.body=Bodies.circle(x,y,this.radius/2,options);
    this.image=loadImage("Plucking mangoes/stone.png");
    World.add(world,this.body);
    
    }
    
    display(){
    var pos=this.body.position;
    var angle=this.body.angle;
    
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    fill("pink");
    
    image(this.image,0,0,this.radius*2,this.radius*2);
    pop();
    }
    
    }