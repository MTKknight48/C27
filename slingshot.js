class Slingshot {

    constructor(bodyA,bodyB){
        var options ={
            bodyA:bodyA,
            bodyB:bodyB,
            length:20,
            stiffness: 0.06
        }
        this.sling=Matter.Constraint.create(options);
        World.add(world,this.sling);
    }
 display(){

 var pointA = this.sling.bodyA.position;
 var pointB = this.sling.bodyB.position;
 strokeWeight(5);
 line(pointA.x,pointA.y,pointB.x,pointB.y);

 }






}