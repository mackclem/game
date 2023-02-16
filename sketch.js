let coins;
let player;
let turtle;
let gamedone;
let score = 0;
function preload() {
    turtle = loadImage('turtlec.png');
    shark = loadImage('shark.png');
    greenplant = loadImage('grass.png');
  }
function setup() {
  createCanvas(windowWidth, windowHeight);
  coins = new Group();
  for (let i = 0; i < 10; i++) {
    let c = createSprite(
      random(100, windowWidth-100),
      random(100, windowHeight-100),
      2, 2);
    c.addImage (greenplant);
    c.scale *= 0.09;
    // c.move(10);
    coins.add(c);
  }
  badcoins = new Group();
  for (let i = 0; i < 40; i++) {
    let c = createSprite(
      random(100, windowWidth-100),
      random(100, windowHeight-100),
      2, 2);
    c.addImage (shark);
    c.scale *= 0.05;
    badcoins.add(c);
  }
  player = createSprite(10, 10, 5, 5);
  player.addImage(turtle);
  player.scale *= 0.3;
}
function draw() {
  background(173, 216, 230);
  player.velocity.x = 
    (mouseX-player.position.x);
  player.velocity.y = 
    (mouseY-player.position.y);
  firstTime=true;
  player.overlap(coins, getCoin);
  player.overlap(badcoins, gameOver);
  drawSprites();
  fill(255);
  noStroke();
  textSize(40);
  textAlign(CENTER, 0);
  text("Avoid the sharks and eat all 10 plants by clicking them!",0.5,40,width);
  textSize(72);
  textAlign(CENTER, CENTER);
  if (gamedone == true) {
    textSize(72);
    fill(5);
    text("Sorry, game over!", width/2-2, height/2-52);
    text("Reload the page to play again!", width/2-2, height/2+48);
    textSize(72);
    fill(255);
    text("Sorry, game over!", width/2, height/2-50);
    text("Reload the page to play again!", width/2, height/2+50);
    coins.remove();
  } else {
        if (coins.length != 0) {
            text(score, width/2, height/2);
        }
        else {
            textSize(72);
            fill(5);
            text("You win!", width/2-2, height/2-52);
            text("Reload the page to play again!", width/2-2, height/2+48);
            textSize(72);
            fill(255);
            text("You win!", width/2, height/2-50);
            text("Reload the page to play again!", width/2, height/2+50);
            coins.remove();
        }
    
  }
}
function gameOver(player, badcoin) {
    gamedone=true;
}
function getCoin(player, coin) {
    if (mouseIsPressed) {
      coin.remove();
      score += 1;
    }
    

}
