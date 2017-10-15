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
	game.load.image("tempIcon","assets/tempIcon.png");
	game.load.image("cabAbove","assets/art/Cab_750x1334.png");
	game.load.image("cabBg","assets/art/Cab_Background_750x1334.png");
}



gameplayState.prototype.create = function(){
	
	this.backGround = game.add.group();
	
	this.backGround = game.add.sprite(0,0,"cabBg");
	this.backGround = game.add.sprite(0,0,"cabAbove");
	
	//add the notebook's bg
	this.notepadStuff = game.add.group();
	
	//Create the notebook
	this.notepadStuff.create(40,75,"ntbkMenu");
	const ICON_BORDER = 30;
	//add the tiles at the top.	Eventually will add the ability to switch through them easily.
	for(i=0;i<3;i++)
	{
		this.notepadStuff.create(40+i*223, 225,"ntbkMenuSelect");
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
		
		var text = game.add.text(40+i*223+223/2,225+70/2,inputText,style,this.notepadStuff);
		//NOTE: 223 is the width of the textBox, and 70 is its height
		text.anchor.set(0.5,0.5);
	}
	
	for(i = 0;i<3;i++)
	{
		this.notepadStuff.create(40, 225 + 70 + 263*i,"ntbkPanel");
		//note: 263 is the height of the notebook panel
		this.notepadStuff.create(40 + ICON_BORDER, 225 + 70 + 263 * i + ICON_BORDER,"tempIcon");
		var style = { font: "bold 34px Arial", fill: "#fff", align: "left", wordWrap: true, wordWrapWidth: 450};
		var text = game.add.text(40 + ICON_BORDER*2 + 200, 225 + 62 + 263 * i + ICON_BORDER,"dddddddddddddddddd\ndddddddddddddddddd\ndddddddddddddddddd\ndddddddddddddddddd\ndddddddddddddddddd",style,this.notepadStuff);
		
		var text = game.add.text(40+ICON_BORDER, 300,"help me");
		//18 char per line; 4 lines.
		//90 is the size fo the Icon
	}
	
	
	this.clickables = game.add.group();
	
	//example item one
	let item = this.clickables.create(50,350,"item");
	
	item.origX = item.x;
	item.origY = item.y;
	
	
	
	//we're going to use 2 arrays to store a key/value. like a super ghetto dictionary
	//keys = sprite, values = text


	this.but = game.add.sprite(600,1334-150,"bkpk");
	this.but.inputEnabled = true;
	this.but.events.onInputDown.add(toggleNotepad, this);
	//this.notepadStuff.visible = false;

}

function toggleNotepad(){
	//if(this.notepadStuff.visible === false)
		this.notepadStuff.visible = !this.notepadStuff.visible;
}



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




