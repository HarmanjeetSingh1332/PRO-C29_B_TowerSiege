class Ball {
	constructor(x, y) {
		var opt = {
			'restitution':0.3,
			'friction':5,
			'density':1
		}
		this.body = Bodies.circle(x, y, 15, opt);
		this.radius = 15;

		World.add(world,this.body);
	}
	display(){
		var ballpos = this.body.position;
		var angle = this.body.angle;
		push();
		translate(ballpos.x,ballpos.y);
		rotate(angle);
		ellipseMode(RADIUS);
		stroke("yellow");
		ellipse(0, 0, this.radius, this.radius);
		pop();
	}
}