class Ground
{
    constructor()
    {
        var ground_options = {
            isStatic : true
        }
        
        this.ground = Bodies.rectangle(500,490,1000,20,ground_options);
        World.add(world,this.ground);
    }

display()
{
    fill("brown");
    rectMode(CENTER);
    rect(this.ground.position.x,this.ground.position.y,1000,20);
    
}






}