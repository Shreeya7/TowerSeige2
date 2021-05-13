    const Engine = Matter.Engine;
    const World = Matter.World;
    const Bodies = Matter.Bodies;
    const Constraint = Matter.Constraint;

    var engine,world;
    var ball;
    var ballImage;
    var slingShot;

function preload()
{

    ballImage = loadImage("polygon.png"); 
    
}


function setup()
{
      createCanvas(1000,500);

    engine = Engine.create();
    world = engine.world;

    Engine.run(engine);

    ground = new Ground();

    stand1 = new Stand(390,300,250,10);
    stand2 = new Stand(760,200,250,10);

//Level1-stand1
    block1 = new Block(300,275,30,40);
    block2 = new Block(330,275,30,40);
    block3 = new Block(360,275,30,40);
    block4 = new Block(390,275,30,40);
    block5 = new Block(420,275,30,40);
    block6 = new Block(450,275,30,40);
    block7 = new Block(480,275,30,40);

//Level2-stand1
    block8 = new Block(330,235,30,40);
    block9 = new Block(360,235,30,40);
    block10 = new Block(390,235,30,40);
    block11 = new Block(420,235,30,40);
    block12 = new Block(450,235,30,40);

//Level3-stand1
    block13 = new Block(360,195,30,40);
    block14 = new Block(390,195,30,40);
    block15 = new Block(420,195,30,40);

//Level4-stand1
    block16 = new Block(390,155,30,40);


//Level1-stand2
    block17 = new Block(700,175,30,40);
    block18 = new Block(730,175,30,40);
    block19 = new Block(760,175,30,40);
    block20 = new Block(790,175,30,40);
    block21 = new Block(820,175,30,40);

//Level2-stand2
    block22 = new Block(730,135,30,40);
    block23 = new Block(760,135,30,40);
    block24 = new Block(790,135,30,40);

//Level3-stand2
    block25 = new Block(760,95,30,40);

var ball_options = {
    density : 0.05
}

    ball = Bodies.circle(50,200,20,ball_options);
    World.add(world,ball);

    slingshot = new Slingshot(this.ball,{x : 100,y : 100});
    


}

function draw()
{
    background("black");

    Engine.update(engine);

    textSize(20);
    fill("yellow");
    text("Drag the hexagonal stone and release it,to launch towards the blocks",150,30);


    ground.display();

    stand1.display();
    stand2.display();

    strokeWeight(2);
    stroke(10);
    fill("lightblue");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();

    fill("lightpink");
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();

    fill("teal");
    block13.display();
    block14.display();
    block15.display();

    fill("grey");
    block16.display();

    fill("lightblue");
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();

    fill("lightpink");
    block22.display();
    block23.display();
    block24.display();

    fill("grey");
    block25.display();

    imageMode(CENTER);
    image(ballImage,ball.position.x,ball.position.y,40,40);
    slingshot.display();
    }

    function mouseDragged()
    {
        Matter.Body.setPosition(this.ball,{x : mouseX,y : mouseY});
    }

    function mouseReleased()
    {
        slingshot.fly();
    }

    function KeyPressed(){
        if(keyCode === 32){
            slingShot.attach(this.ball);
        }
    }
