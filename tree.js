
class Tree
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.dustbinWidth=450;
		this.dustbinHeight=600;
		this.wallThickness=10;
		this.angle=0;	
		
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
		this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		Matter.Body.setAngle(this.leftWallBody, this.angle);
		

		this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
	Matter.Body.setAngle(this.rightWallBody, -1*this.angle);
	
		World.add(world, this.leftWallBody);
		World.add(world, this.rightWallBody);
		this.image=loadImage("Plucking mangoes/tree.png");

		

	}
	display()
	{
			var posBottom=this.bottomBody.position;
			
			push();
			translate(posBottom.x, posBottom.y);
			imageMode(CENTER);
			
			stroke(255);
			imageMode(RADIANS);
			fill(255);
			image(this.image,0,0,this.dustbinWidth, this.dustbinHeight);
			pop();		
	}

}