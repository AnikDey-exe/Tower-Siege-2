const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var box1,polygon,hexagon,slingshot;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(285,360,200,10);

  ground2 = new Ground(605,190,260,10);

  box1 = new Box(230,345,30,40);
  box2 = new Box(260,345,30,40);
  box3 = new Box(290,345,30,40);
  box4 = new Box(320,345,30,40);
  box5 = new Box(350,345,30,40);

  box6 = new Box(260,305,30,40);
  box7 = new Box(290,305,30,40);
  box8 = new Box(320,305,30,40);

  box9 = new Box(290,265,30,40);

  box10 = new Block(515,175,30,40);
  box11 = new Block(545,175,30,40);
  box12 = new Block(575,175,30,40);
  box13 = new Block(605,175,30,40);
  box14 = new Block(635,175,30,40);
  box15 = new Block(665,175,30,40);
  box16 = new Block(695,175,30,40);

  box17 = new Block(545,135,30,40);
  box18 = new Block(575,135,30,40);
  box19 = new Block(605,135,30,40);
  box20 = new Block(635,135,30,40);
  box21 = new Block(665,135,30,40);

  box22 = new Block(575,95,30,40);
  box23 = new Block(605,95,30,40);
  box24 = new Block(635,95,30,40);

  box25 = new Block(605,55,30,40);

  hexagon = new Hexagon(120,160);

  slingshot = new SlingShot(hexagon.body,{x:120,y:160});
}

function draw() {
  background("black");  
  Engine.update(engine);

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();

  ground1.display();
  ground2.display();

  hexagon.display();
  slingshot.display();

  drawSprites();
}

function mouseDragged()
{
  Matter.Body.setPosition(hexagon.body,{x:mouseX,y:mouseY});
}

function mouseReleased()
{
  slingshot.fly();
}

function keyPressed()
{
  if(keyCode == 32)
  {
    slingshot.attach(hexagon.body);
  }
}