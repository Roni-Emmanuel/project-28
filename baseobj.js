class baseobj {
    constructor (x,y,r,imagelocation){
        var options = {
            isStatic:false,
            restitution:0,
            friction:1,
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.image = loadImage(imagelocation);
        this.body = Bodies.circle(this.x,this.y,this.r, options);
        World.add(world,this.body);
    }

    display(){
        
        var displaypos = this.body.position;
        push();
        translate(displaypos.x,displaypos.y);
        fill(255,0,255);
        imageMode(CENTER);
        ellipseMode(RADIUS);
        image(this.image,0,0,this.r*2,this.r*2);
        pop();
    }

}