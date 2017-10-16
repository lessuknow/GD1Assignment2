//'constructor'
var descriptionText; //This will manipulate what shows up on the textbox
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
	game.load.image("cabAbove","assets/Art/Cab_750x1334.png");
	game.load.image("cabBg","assets/Art/Cab_Background_750x1334.png");
	game.load.image("perOneIcon","assets/Art/croppedIcons/charOneCropped.png");
	game.load.image("fade_Black", "assets/Black.png");
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
		var tempText = "dddddddddddddddddd\ndddddddddddddddddd\ndddddddddddddddddd\ndddddddddddddddddd\ndddddddddddddddddd";
		//var tempText = "Small glass bottle\nof rat poison, the\nvulgar arsenic. \nA very likely choice\nfor poisoning."

		
		var text = game.add.text(40 + ICON_BORDER*2 + 200, 225 + 62 + 263 * i + ICON_BORDER,tempText,style,this.notepadStuff);
		
		stylet = { font: "bold 35px Arial", fill: "#fff", align: "center"};
		var text = game.add.text(40+ICON_BORDER+100,312 + 263*i+3,"file_name",stylet,this.notepadStuff);
		text.anchor.set(0.5,0.5);
		//18 char per line; 4 lines.
		//90 is the size fo the Icon
	}
	
	
	//suspectCount
	var suspects = [];
	/*
	let susOne = {
		name = "testName";
		age = 3;
		race = "testRace";
		heightWeight = "testheightWeight";
		hair = "testHair";
		eyes = "testEyes";
		infoWantedDescrip = "...";
		pic = "assets/Art/"
	};
	*/
	this.clickables = game.add.group();


	
	//we're going to use 2 arrays to store a key/value. like a super ghetto dictionary
	//keys = sprite, values = text


	this.but = game.add.sprite(600,1334-150,"bkpk");
	this.but.inputEnabled = true;
	this.but.events.onInputDown.add(toggleNotepad, this);
	this.notepadStuff.visible = false;
	/* This is where the items will be loaded and added to the scene
	 * We will probably have to group items based on what level they appear
	 * unless they are in the players inventroy */

	let item =  game.add.sprite(50, 350, "item"); //Arsenic Bottle
	item.description = "A small glass bottle of rat poison - the vulgar, ubiquitous arsenic. A very likely choice for a poisoning."
	item.name = "Arsenic Bottle";
	let item2 = game.add.sprite(100, 350, "item"); //Arsenic Receipt
	item2.description = "A receipt from the local drug store for a dram of rat poison";
	item2.name = "Arsenic Receipt";
	let item3 = game.add.sprite(150, 350, "item"); //Loose Money
	item3.description = "A haphazard pile of crisp bank notes - in the order of 250 pounds. A small fortune."
	item3.name = "Loose Money";
	let item4 = game.add.sprite(50, 400, "item"); //Combination
	item4.description = "A slip of paper containing only the digits 2 6 2 9. It appears to be written in a quick, inexact handwriting."
	item4.name = "Combination";
	let item5 = game.add.sprite(100, 400, "item"); //Friend 1: Letter to Deceased
	item5.description = "A carefully-folded letter with neat, deliberate writing."
	item5.name = "Friend 1: Letter to Deceased";
	let item6 = game.add.sprite(150, 400, "item"); //Friend 2: Letter to Deceased
	item6.description = "A childishly scribbled note with a few stains on it."
	item6.name = "Friend 2: Letter to Deceased";
	let item7 = game.add.sprite(50, 450, "item"); //Friend 3: Letter to Deceased
	item7.description = "A crumpled letter written with an inexcusable excess of ink."
	item7.name = "Friend 3: Letter to Deceased";
	let item8 = game.add.sprite(100, 450, "item"); //Friend 1: Receipt from Bar
	item8.description = "A receipt for some light bare fare."
	item8.name = "Friend 1: Receipt from Bar";
	let item9 = game.add.sprite(150, 450, "item"); //Friend 3: Receipt from Bar
	item9.description = "A short receipt for a meat pie with tomato sauce."
	item9.name = "Friend 3: Receipt from Bar";
	let item10 = game.add.sprite(50, 500, "item"); //Deceased: Receipt from Bar
	item10.description = "This receipt is for enought alcohol to kill a man. I would assume that was the case but for the circumstances."
	item10.name = "Deceased: Receipt from Bar";
	//Put all the sprite clues in designated groups: HOUSE 1, HOUSE 2, and HOUSE 3
	//Have a group that contains all the items: ALLITEMS
	let ALLITEMS = game.add.group();
	let itemsH1 = game.add.group(); //HOUSE 1: William's House
	itemsH1.add(item3); //Loose Money
	itemsH1.add(item4); //Combination
	itemsH1.add(item5); // Letter 1

	let itemsH2 = game.add.group(); //HOUSE 2: Charle's House
	itemsH2.add(item8); //Receipt Bar Friend 1
	itemsH2.add(item9);//Receipt Bar Friend 3
	itemsH2.add(item10);//Receipt Bar Deceased 
	itemsH2.add(item6)// Friend 2 Letter

	let itemsH3 = game.add.group(); //HOUSE 3: Robert's House
	itemsH3.add(item);//Arsenic Bottle
	itemsH3.add(item2);//Arsenic Receipt
	itemsH3.add(item7); //Letter 3

	ALLITEMS.add(itemsH1);
	ALLITEMS.add(itemsH2);
	ALLITEMS.add(itemsH3);

	let BLACK = game.add.sprite(0, 0, "fade_Black");
	BLACK.alpha = 0;
	//initialize text for description
	descriptionText = game.add.text(0, game.world.height - 250, '', {fill: '#ffffff'});
	//Here we automate relevant data, such as their coordiantes, and allowing us to interact with it
	for(var i = 0, len = ALLITEMS.children.length; i < len; i++){
		ALLITEMS.children[i].forEach(function(item){
			item.origX = item.x;
			item.origY = item.y;
			item.inputEnabled = true;
		});
	}
	//Here we check if the player clicked on the sprite, and if so it will call the textbox function
	ALLITEMS.forEach(function(obj){
		obj.forEach(function(item){
			item.events.onInputDown.add(showItemDescription, {description: item.description});
		}, this);
	});
	//TESTING FADE
	let level1 = game.add.sprite(700, 50, "item");
	level1.inputEnabled = true;
	level1.fading = BLACK;
	level1.events.onInputDown.add(changeHouse, {fading: BLACK});
}

function changeHouse(){
	game.add.tween(this.fading).to({alpha:1}, 2000, Phaser.Easing.Linear.None, true);
}

function showItemDescription(){
	descriptionText.text = this.description;
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




