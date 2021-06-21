var garden,rabbit,apple,leave;
  var gardenImg,rabbitImg,appleImg,leaveImg;
  


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leaveImg = loadImage("leave.png");
}



function setup(){
    
  createCanvas(400,400);

garden=createSprite(200,200);
garden.addImage(gardenImg);


 rabbit = createSprite(160,340,20,20);  
 rabbit.scale =0.09;
 rabbit.addImage(rabbitImg);




}



function draw() {
 background(0);

// boy moving on Xaxis with mouse'
  rabbit.x = World.mouseX;

 edges= createEdgeSprites();
  rabbit.collide(edges);

 drawSprites();


var select_sprites = Math.round(random(1,3));
    
    if (frameCount % 80 == 0) {
      if (select_sprites == 1) {
        createApples();
      } else if (select_sprites == 2) {
        createLeave();

        
      
       
      }
    }
}
  
  function createApples() {
  apple = createSprite(random(50, 350),40, 10, 10);
  apple.addImage(appleImg);
  apple.scale=0.12;
  apple.velocityY = 3;
  apple.lifetime = 75;
}

function createLeave(){
leave = createSprite(random(50, 350),40, 10, 10);
leave .addImage(leaveImg);
leave .scale=.2
leave .velocityY = 3;
leave .lifetime = 75;

}




