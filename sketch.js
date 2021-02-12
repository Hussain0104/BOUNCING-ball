var ball;
var canvas;
var music;
var wall1,wall2,wall3,wall4;

function preload(){
    music = loadSound("music.mp3");

}


function setup(){
    canvas = createCanvas(800,600);
   
    //create 4 different surfaces
    
    wall1=createSprite(100,600,200,50);
    wall1.shapeColor="yellow";
    wall2=createSprite(300,600,200,50);
    wall2.shapeColor="red";
    wall3=createSprite(500,600,200,50);
    wall3.shapeColor="blue";
    wall4=createSprite(700,600,200,50);
    wall4.shapeColor="pink";
  //  create box sprite and give velocity
   
    ball=createSprite(500,50,30,30);
    ball.shapeColor="black";
    ball.velocityY=5;
    ball.velocityX=3;
   
}
function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();

    ball.bounceOff(edges[1]);
    ball.bounceOff(edges[2]);
    ball.bounceOff(edges[3]);
    ball.bounceOff(edges[0]);
    

    //add condition to check if box touching surface and make it box
    if(wall1.isTouching(ball) && ball.bounceOff(wall1)){
        ball.shapeColor="yellow";
        music.stop();
        ball.velocityX=0;
        ball.velocityY=0;
    }
    if(wall2.isTouching(ball) && ball.bounceOff(wall2)){
        ball.shapeColor="red";
        
    }
    if(wall3.isTouching(ball) && ball.bounceOff(wall3)){
        ball.shapeColor="blue";
        music.play();
    }
    if(wall4.isTouching(ball) && ball.bounceOff(wall4)){
        ball.shapeColor="pink";
    }
    drawSprites();
}