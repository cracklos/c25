//creamos constantes: una máquina, un mundo y un cuerpo. 
//Y decimos que van a pertenecer 
//1 Cambiamos el nombre largo a uno corto para escribir más fácil
//namespacing
const Engine = Matter.Engine; //crea un motor físico
const World = Matter.World    //crea un mundo
const Bodies = Matter.Bodies; //crea los objetos físicos que habitan en el mundo

//2 creamos variables para alojar el motor y el mundo
var motor, mundo;
//3 creamos variables para los objetos en nuestro mundo
var caja1, caja2, caja3, caja4, caja5;
var ground;
var tronco, tronco2, tronco3, tronco4;
var pajaro;
var cerdo;
var cerdito;
var fondo;

function preload(){
  fondo=loadImage("sprites/bg.png");

}
function setup() {
  var canvas = createCanvas(1200, 400);

  //4 creamos un motor y agregamos al mundo nuestro motor
  motor = Engine.create();
  mundo = motor.world;

  caja1 = new Box(700,365,70,70);
  caja2 = new Box(920,365,70,70);
  caja3 = new Box(700,285,70,70);
  caja4 = new Box(920,285,70,70);
  caja5 = new Box(810,205,70,70);
  
  ground = new Ground(600,height,1200,20);

  tronco = new Log(810,305,300,PI/2);
  tronco2 = new Log(810,225,300,PI/2);
  tronco3 = new Log(870,165,150,-PI/4);
  tronco4 = new Log(760,165,150,PI/4);

  cerdo = new Pig(810,395);
  cerdito = new Pig(810,265);

  pajaro = new Bird(100,100);


}

function draw() {
  background(fondo);
  Engine.update(motor); //actualiza nuestro motor
  
  caja1.display();
  caja2.display();
  caja3.display();
  caja4.display();
  caja5.display();
  ground.display();
  tronco.display();
  tronco2.display();
  tronco3.display();
  tronco4.display();
  cerdo.display();
  cerdito.display();
  pajaro.display();


}