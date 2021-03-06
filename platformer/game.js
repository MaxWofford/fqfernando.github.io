var groundSprites;
var GROUND_SPRITE_WIDTH = 50;
var GROUND_SPRITE_HEIGHT = 50;
var numGroundSprites;
var GRAVITY     = 0.3;
var numGroundSprites;
var player;
var jump = -5;
var obsticleSprites;

function setup () {
    createCanvas (400, 300);
    background (150, 200, 250);
    groundSprites = new Group ();
    
    numGroundSprites = width/GROUND_SPRITE_WIDTH + 1 ;
    for (var n = 0; n < numGroundSprites; n++) {
        var groundSprite = createSprite(n*50, height-25, GROUND_SPRITE_WIDTH, GROUND_SPRITE_HEIGHT);
        groundSprites.add(groundSprite);
    }
    player = createSprite(100, height-75, 50, 50);
    obsticleSprites = new Group();
    
}

function draw () {
    player.position.x = player.position.x + 5;
    background(150, 200, 250)
    player.velocity.y = player.velocity.y + GRAVITY
    var obsticle = createSprite(camera.position.x + width)
    
    drawSprites();
    camera.position.x = player.position.x + (width/4)
    
   var firstGroundSprite = groundSprites [0];
   
    if (firstGroundSprite.position.x <= camera.position.x - (width/2)) {
    groundSprites.remove(firstGroundSprite);
    firstGroundSprite.position.x = firstGroundSprite.position.x + numGroundSprites*firstGroundSprite.width;
    groundSprites.add(firstGroundSprite);
    
    
} 
    if (firstGroundSprite.position.x <= camera.position.x - (width/2 + firstGroundSprite.width/2)) {
        
    }
    if (keyDown(UP_ARROW)) {
        palyer.velocity.y = JUMP;
        
    }
    
    if (groundSprites.overlap(player)) {
        player.velocity.y = 0;
        player.velocity.y = (height, 50) - (player.height/2);
    }
    
    if (keyDown(UP_ARROW)) {
        player.velocity.y = JUMP;
    }

    
}