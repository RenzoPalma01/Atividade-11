var box;
 


function setup() {
  createCanvas(500,500)
  box = createSprite(200, 80, 30, 30)

}
 


function draw() 
{
   background(30);
  //keydown verifica se a tecla esta sendo pressionada e retorna verdadeiro ou falso
  if (keyIsDown(RIGHT_ARROW)) {
    box.position.x += 5;
    background("green");
  }
  
  if (keyIsDown(LEFT_ARROW)) {
    box.position.x -= 5;
    background("blue");
  }

  if (keyIsDown(UP_ARROW)) {
    box.position.y -= 5;
    background("red");
  }

  if (keyIsDown(DOWN_ARROW)) {
    box.position.y += 5;
    background("yellow");
  }







  drawSprites();
}




