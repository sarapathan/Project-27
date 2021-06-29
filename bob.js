class Bob{
    constructor(x,y,r){
        var options = {
            isStatic:false,
            restitution:1,
            density:0.8,
            friction:0.0
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.bob = Bodies.circle(x,y,(r)/2,options);
        World.add(world,this.bob);
    }
    display(){
        var p = this.roof.position;
        push();
        translate(p.x,p.y);
        ellipseMode(RADIUS);
        fill("blue");
        ellipse(0,0,this.r,this.r);
        pop();
    }
}