//'constructor'
let gameplayState = function(){
	
}

gameplayState.prototype.preload = function(){
	game.load.image("item","assets/item.png");
	game.load.image("invTile","assets/invTile.png");
	game.load.image("bkpk","assets/backpack.png");
	game.load.image("bkpkMenu","assets/bkpkMenu.png");
	game.load.image("scrollTile","assets/scrollTile.png");
	game.load.image("ntbk","assets/notebook.png");
	game.load.image("ntbkMenu","assets/notebookMenu.png");
	game.load.image("ntbkMenuSelect","assets/ntbkMenuSelect.png");
	game.load.image("ntbkPanel","assets/notebookPanel.png");
}



gameplayState.prototype.create = function(){
	game.add.sprite(0,0,"sky");
	
	//add the notebook's bg
	game.add.sprite(40,75,"ntbkMenu");
	//add the tiles at the top.	Eventually will add the ability to switch through them easily.
	for(i=0;i<3;i++)
	{
		game.add.sprite(40+i*223, 225,"ntbkMenuSelect");
		var style = { font: "bold 40px Arial", fill: "#fff", align: "center"};
		
		var inputText = "error!";
		
		switch(i)
		{
			case 0:
				inputText = "Objects";
				break;
			case 1:
				inputText = "Suspects";
				break;
			case 2:
				inputText = "Locations";
				break;
		}
		
		var text = game.add.text(40+i*223+223/2,225+70/2,inputText,style);
		//NOTE: 223 is the width of the textBox, and 70 is its height
		text.anchor.set(0.5,0.5);
	}
	
	for(i = 0;i<3;i++)
	{
		game.add.sprite(40, 225 + 70 + 263*i,"ntbkPanel");
		//note: 263 is the height of the notebook panel
	}
	this.canDrag = game.add.group();
	/*
	let bkpk = game.add.sprite(750-150,1334-150,"bkpk");
	this.bkpkOpen = false;
	
	this.bkpkMenu = game.add.sprite(750*3/4,0,"bkpkMenu");	
	this.bkpkMenu.visible = false;
	
	this.invTiles = game.add.group();
	
	//openBackpack();
	
			
	this.bkpkMenu.inputEnabled = true;	
	//backpack stuff; create and hide
	//use this for placing the actual images fo the stuff inside the inventory tiles in the backpack
	const BACKPACK_TILE_BORDER = 17;
	const WINDOW_WIDTH = 750;
	const TILE_HEIGHT = 150;
	const SCROLL_TILE_HEIGHT = 75;
	
	//Backpack 'open' code; displays a column with tiels that hold the inventory.
	this.scrollUp = game.add.sprite(BACKPACK_TILE_BORDER + WINDOW_WIDTH*3/4, 0, "scrollTile");
	this.scrollDown = game.add.sprite(BACKPACK_TILE_BORDER + WINDOW_WIDTH*3/4, 1334-SCROLL_TILE_HEIGHT, "scrollTile");
	
	this.invTiles.create(BACKPACK_TILE_BORDER + WINDOW_WIDTH*3/4 , SCROLL_TILE_HEIGHT+BACKPACK_TILE_BORDER+BACKPACK_TILE_BORDER + TILE_HEIGHT,"invTile");
	
	for(i=0;i<7;i++){
		this.invTiles.create(BACKPACK_TILE_BORDER + WINDOW_WIDTH*3/4 , SCROLL_TILE_HEIGHT+BACKPACK_TILE_BORDER+BACKPACK_TILE_BORDER*i + TILE_HEIGHT*i,"invTile");
	}

	this.scrollUp.visible = false;
	this.scrollDown.visible = false;
	this.invTiles.visible = false;
	*/
	let item = this.canDrag.create(50,350,"item");
	
	
	item.origX = item.x;
	item.origY = item.y;
	
	//we're going to use 2 arrays to store a key/value. like a super ghetto dictionary
	//keys = sprite, values = text
	item.overlapKey = ["shoe"];
	item.overlapValue = ["inv"];
	
	//function that checks if the stuff overlaps. it returns its respective overlap value
	item.checkOverlap = function(){
		for(i = 0;i < this.overlapKey.length;i++)
		{
			if( (this, this.overlapKey[i])){
				return this.overlapValue[i];
			}
		}
	}
	
	item.inputEnabled = true;
	item.input.enableDrag();
	item.events.onDragStop.add(checkIfReturnToOrigin, this);
	
	/*
	bkpk.inputEnabled = true;
	bkpk.events.onInputDown.add(openBackpack, this);
	*/
}
/*
function openBackpack(){
	
	this.bkpkOpen=true;
	this.bkpkMenu.visible = true;
	
	
	this.scrollUp.visible = true;
	this.scrollDown.visible = true;
	this.invTiles.visible = true;

}
*/

gameplayState.prototype.update = function(){
	if(game.input.mousePointer.isDown)
	{
		/*
		if(game.input.mousePointer.x <750-190 && this.bkpkOpen==true){
			bkpkOpen = false;
			this.bkpkMenu.visible = false;	
			this.scrollUp.visible = false;
			this.scrollDown.visible = false;
			this.invTiles.visible = false;
	
			
		}
		*/
	}
}

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


