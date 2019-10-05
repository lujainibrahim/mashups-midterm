var canvas;
var speed = 1;

// Main Variables
var character;
var stanLee;
var phaseOne;
var phaseOne_img;
var gauntletLock;

// Overlap Points
var hoverOne;
var hoverTwo;
var hoverThree;
var hoverFour;
var hoverFive;
var hoverImg;
var hoverImgActive;

// Size Variables
var canvasWidth = 720;
var canvasHeight = 480;
var characterWidth = 62;
var characterHeight = 88;

// Character Start Position
var startX = 31;
var startY = 419;

// Preload Images
function preload() {
  stanLee = loadImage('./images/stanLee.png');
  phaseOne_img = loadImage('./images/phaseOne.png');
  hoverImg = loadImage('./images/hoverNormal.png');
  hoverImgActive = loadImage('./images/hoverActive.png');
}

// Setup Function
function setup() {
  // Canvas Creation
  canvas = createCanvas(canvasWidth,canvasHeight);
  canvas.parent('sketch-holder');

  // Phase One Creation
  phaseOne = createSprite(360,178);
  phaseOne.addImage(phaseOne_img);

  // Hover 1 Creation
  hoverOne = createSprite(121,462.5);
  hoverOne.addImage(hoverImg);
  hoverOne.addAnimation("normal", hoverImg);
  hoverOne.addAnimation("active", hoverImgActive);

  // Hover 2 Creation
  hoverTwo = createSprite(237.5,462.5);
  hoverTwo.addImage(hoverImg);
  hoverTwo.addAnimation("normal", hoverImg);
  hoverTwo.addAnimation("active", hoverImgActive);

  // Hover 3 Creation
  hoverThree = createSprite(359,462.5);
  hoverThree.addImage(hoverImg);
  hoverThree.addAnimation("normal", hoverImg);
  hoverThree.addAnimation("active", hoverImgActive);

  // Hover 4 Creation
  hoverFour = createSprite(480,462.5);
  hoverFour.addImage(hoverImg);
  hoverFour.addAnimation("normal", hoverImg);
  hoverFour.addAnimation("active", hoverImgActive);

  // Hover 5 Creation
  hoverFive = createSprite(598,462.5);
  hoverFive.addImage(hoverImg);
  hoverFive.addAnimation("normal", hoverImg);
  hoverFive.addAnimation("active", hoverImgActive);

  // Character Creation
  character = createSprite(startX,startY);
  character.addImage(stanLee);
}

// Draw Function
function draw() {
  checkEdges();
  characterControls();

  // Sets White Background
  background(255,255,255);

  // Hover One Overlap Conditions
  if (character.position.x > 94 && character.position.x < 146) {
    hoverOne.changeAnimation("active");
    $("#partone").show();
  } else {
    hoverOne.changeAnimation("normal");
    $("#partone").hide();
  }

  // Hover Two Overlap Conditions
  if (character.position.x > 210.5 && character.position.x < 260.5) {
    hoverTwo.changeAnimation("active");
    $("#parttwo").show();
  } else {
    hoverTwo.changeAnimation("normal");
    $("#parttwo").hide();
  }

  // Hover Three Overlap Conditions
  if (character.position.x > 332 && character.position.x < 384) {
    hoverThree.changeAnimation("active");
    $("#partthree").show();
  } else {
    hoverThree.changeAnimation("normal");
    $("#partthree").hide();
  }

  // Hover Four Overlap Conditions
  if (character.position.x > 453 && character.position.x < 505) {
    hoverFour.changeAnimation("active");
    $("#partfour").show();
  } else {
    hoverFour.changeAnimation("normal");
    $("#partfour").hide();
  }

  // Hover Five Overlap Conditions
  if (character.position.x > 571 && character.position.x < 623) {
    hoverFive.changeAnimation("active");
    $("#partfive").show();
  } else {
    hoverFive.changeAnimation("normal");
    $("#partfive").hide();
  }

  // Draw Sprites
  drawSprites();
}

// Character Controls
function characterControls(){
  if ( keyDown('RIGHT_ARROW')){
    character.position.x = character.position.x + speed;
  }
  if ( keyDown('LEFT_ARROW') ){
    character.position.x = character.position.x - speed;
  }
}

// Check Edges
function checkEdges() {
  // Checks Negative X
  if(character.position.x < characterWidth/2) {
    character.position.x = characterWidth/2;
  }
  // Checks Positive X
  if(character.position.x > (canvasWidth - characterWidth/2)) {
    character.position.x = (canvasWidth - characterWidth/2);
  }
  // Checks Negative Y
  if(character.position.y < characterHeight/2) {
    character.position.y = characterHeight/2;
  }
  // Checks Positive Y
  if(character.position.y > (canvasHeight - characterHeight/2)) {
    character.position.y = (canvasHeight - characterHeight/2);
  }
}