//'constructor'
let gameplayState = function(){
	
}

gameplayState.prototype.preload = function(){
	game.load.image("item","assets/item.png");
	game.load.image("invTile","assets/invTile.png");
	game.load.image("bkpk","assets/backpack.png");
	game.load.image("bkpkMenu","assets/bkpkMenu.png");
}

gameplayState.prototype.create = function(){
	game.add.sprite(0,0,"sky");
	
	//use this for placing the actual images fo the stuff inside the inventory tiles in the backpack
	const BACKPACK_TILE_BORDER = 25;
	const WINDOW_WIDTH = 750;
	const TILE_WIDTH = 150;
	
	let bkpkMenu = game.add.sprite(750*3/4,1334-200,"bkpkMenu");
	
	this.invTiles = game.add.group();
	this.canDrag = game.add.group();
	
	for(i=0;i<4;i++){
		let invTile = this.invTiles.create(0+BACKPACK_TILE_BORDER + (i * TILE_WIDTH),1334-200+BACKPACK_TILE_BORDER,"invTile");
	}
	let item = this.canDrag.create(50,350,"item");
	
	this.invTiles.visible = true;
	
	item.origX = item.x;
	item.origY = item.y;
	
	//we're going to use 2 arrays to store a key/value. like a super ghetto dictionary
	//keys = sprite, values = text
	//item.overlapKey = [invTile]
	item.overlapKey = ["shoe"];
	item.overlapValue = ["inv"];
	
	//function that checks if the stuff overlaps. it returns its respective overlap value
	item.checkOverlap = function(){
		for(i = 0;i < this.overlapKey.length;i++)
		{
			if(checkOverlap(this, this.overlapKey[i])){
				return this.overlapValue[i];
			}
		}
	}
	
	item.inputEnabled = true;
	item.input.enableDrag();
	item.events.onDragStop.add(checkIfReturnToOrigin, this);
	
	//we only need one backpack...
	let bkpk = game.add.sprite(150,150,"bkpk");
	
	
	bkpkMenu.inputEnabled = true;
	//this prevents buttons under from being pressed
	
	//bkpkMenu.visible = false;
	//hide the backpack menu initially
	
	bkpk.inputEnabled = true;
	bkpk.events.onInputDown.add(toggleBackpackMenu, bkpkMenu);
	
}

gameplayState.prototype.toggleInvSquares

function toggleBackpackMenu(){
	
	if(this.visible == false)
	{
		this.visible = true;
		
	}
	else
	{
		this.visible = false;
	}
}

function checkIfReturnToOrigin(sprite, pointer){
	if(!(sprite.checkOverlap()===("inv")))
	{
		sprite.x = sprite.origX;
		sprite.y = sprite.origY;
	}
	else
	{
		console.log("added to the inventory...");
	}
	
	
}

//taken from phaser's website example
function checkOverlap(spriteA, spriteB) {

    var boundsA = spriteA.getBounds();
    var boundsB = spriteB.getBounds();

    return Phaser.Rectangle.intersects(boundsA, boundsB);

}



gameplayState.prototype.update = function(){
	
}