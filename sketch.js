//Create variables here
var dog,dogImg,dogImg1,database,foodS,foodStock
function preload()
{
  dogImg=loadImage("images/dogimg.png")
  dogImg1=loadImage("images/dogImg1.png")
  }

function setup() {
  createCanvas(500,500);
  database=firebase.database()

  dog = createSprite(250,300,150,150)
 dog.addImage(dogImg)
 dog.scale=.15
 foodStock=database.ref('food')
 foodStock.on("value",readStock)
 textSize(20)

  
}


function draw() {  
  background(46,139,87)
  if (keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(dogImg1)
  }

  drawSprites();
  fill(255,255,254)
  stroke("black")
  text("Food remaining"+foodS,170,200)
  textSize(13)
  text("note-Press Up Arrow Key To Feed Drago Milk",130,10,300,20)
  //add styles here

}
function readStock(data){
  foodS=data.val()
}
function writeStock(x){
  if(x<=0){
    x=0
  }
  else{
    x=x-1
  }
  database.ref('/').update({
    Food:x
  })
}

