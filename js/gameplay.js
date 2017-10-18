//'constructor'
var descriptionText; //This will manipulate what shows up on the textbox
let gameplayState = function(){
	
}

gameplayState.prototype.preload = function(){
	
}
gameplayState.prototype.init = function(sus, loc){
	this.suspects = sus;
	this.locations = loc;
}
gameplayState.prototype.create = function(){
	
	this.houseNumber = 0;
	this.backGround = game.add.group();
	this.backGround = game.add.sprite(0,0,"cabBg");
	this.backGround = game.add.sprite(0,0,"cabAbove");

	this.curNotepadPos = "suspects";
	this.curNotepadIndex = 0;
	this.accused = 0;
	instantiateNotepad(this);

	// Identify and play music
	let music = game.add.audio("Music");
	music.play();
	music.loopFull();

	//this.curNotepadPos = "objects";
	
	//Going to assume that we defualt have suspects open
	
	
	
	this.but = game.add.sprite(600,1334-150,"bkpk");
	this.but.inputEnabled = true;
	this.but.events.onInputDown.add(enableDisableNotepad, this);
	this.but.events.onInputDown.add(swapNotepad, this);

	
	for(i=0;i<this.notepadStuff.panels.length;i++)
		for(j=0;j<this.notepadStuff.panels[i].length;j++)
			this.notepadStuff.panels[i][j].visible = !this.notepadStuff.visible;
	
	this.notepadStuff.visible = !this.notepadStuff.visible;
	
	this.playerInventory = [];
	/* This is where the items will be loaded and added to the scene
	 * We will probably have to group items based on what level they appear
	 * unless they are in the players inventroy 
	 * .name = Name of the item 
	 * .pic = The png for the object, useful for future edits
	 * .events.onInputDown = assign the function it will be using for when it's selected
	 * */

	let item =  game.add.sprite(0, 350, "ArBottle"); //Arsenic Bottle
	item.description = "A small glass bottle of rat poison - the vulgar, ubiquitous arsenic. A very likely choice for a poisoning."
	item.name = "Arsenic Bottle";
	item.pic = "ArBottle";
	item.events.onInputDown.add(addToInventory,this,0,item);
	let item2 = game.add.sprite(250, 350, "ArReceipt"); //Arsenic Receipt
	item2.description = "A receipt from the local drug store for a dram of rat poison";
	item2.name = "Arsenic Receipt";
	item2.pic = "ArReceipt";
	item2.events.onInputDown.add(addToInventory,this,0,item2);
	let item6 = game.add.sprite(500, 700, "Letter2"); //Friend 2: Letter to Deceased
	item6.description = "A childishly scribbled note with a few stains on it."
	item6.name = "Charle's letter";
	item6.pic = "Letter2";
	item6.events.onInputDown.add(addToInventory,this,0,item6);
	let item7 = game.add.sprite(0, 950, "Letter3"); //Friend 3: Letter to Deceased
	item7.description = "A crumpled letter written with an inexcusable excess of ink."
	item7.name = "Robert's letter";
	item7.pic = "Letter3";
	item7.events.onInputDown.add(addToInventory,this,0,item7);
	let item8 = game.add.sprite(250, 950, "Receipt1"); //Friend 1: Receipt from Bar
	item8.description = "A receipt for some light bare fare."
	item8.name = "William's Receipt";
	item8.pic = "Receipt1";
	item8.events.onInputDown.add(addToInventory,this,0,item8);
	let item9 = game.add.sprite(500, 950, "Receipt2"); //Friend 3: Receipt from Bar
	item9.description = "A short receipt for a meat pie with tomato sauce."
	item9.name = "Robert's Receipt";
	item9.pic = "Receipt2";
	item9.events.onInputDown.add(addToInventory,this,0,item9);
	let item10 = game.add.sprite(0, 1200, "Receipt3"); //Deceased: Receipt from Bar
	item10.description = "This receipt's for enough alcohol to kill a man. An odd array of drinks as well."
	item10.name = "James's Receipt";
	item10.pic = "Receipt3";
	item10.events.onInputDown.add(addToInventory,this,0,item10);
	
	//Let's have the inventory have like 4 items rn.
	

	//Put all the sprite clues in designated groups: HOUSE 1, HOUSE 2, and HOUSE 3
	//Have a group that contains all the items: ALLITEMS
	
	let itemsH2 = game.add.group(); //HOUSE 2: Charle's House
	itemsH2.add(item8); //Receipt Bar Friend 1
	itemsH2.add(item9);//Receipt Bar Friend 3
	itemsH2.add(item10);//Receipt Bar Deceased 
	itemsH2.add(item6)// Friend 2 Letter

	let itemsH3 = game.add.group(); //HOUSE 3: Robert's House
	itemsH3.add(item);//Arsenic Bottle
	itemsH3.add(item2);//Arsenic Receipt
	itemsH3.add(item7); //Letter 3

	this.ALLITEMS = game.add.group();
	this.ALLITEMS.add(itemsH2);
	this.ALLITEMS.add(itemsH3);
	
	//this.ALLITEMS.visible = false;

	//initialize text for description
	
	var style = { font: "bold 34px Arial", fill: "#fff", align: "left", wordWrap: true, wordWrapWidth: 400};
	descriptionText = game.add.text(0, game.world.height - 250, '', style);
	//Here we automate relevant data, such as their coordiantes, and allowing us to interact with it
	for(var i = 0, len = this.ALLITEMS.children.length; i < len; i++){
		this.ALLITEMS.children[i].forEach(function(item){
			item.origX = item.x;
			item.origY = item.y;
			item.inputEnabled = true;
			item.scale.setTo(0.3, 0.3);
		});
	}
	//TESTING FADE
	let BLACK = game.add.sprite(0, 0, "fade_Black");
	BLACK.alpha = 0;

	let Charles = game.add.sprite(0,0,"CharlesK");
	let Robert = game.add.sprite(0, 0, "RobertDi");
	let William = game.add.sprite(0, 0, "WilliamP");

	Charles.alpha = 0;
	Robert.alpha = 0;
	William.alpha = 0;

	let house1 = game.add.sprite(70, 325, "item");
	house1.number = 1;
	house1.cutscene = William;
	house1.level = Robert;
	house1.events.onInputDown.add(changeHouse, this, 0, house1);
	house1.scale.setTo(4, 4);
	let house2 = game.add.sprite(70, 588, "item");
	house2.number = 2;
	house2.cutscene = Charles;
	house2.level = William;
	house2.events.onInputDown.add(changeHouse, this, 0, house2);
	let house3 = game.add.sprite(70,851 , "item");
	house3.number = 3;
	house3.cutscene = Robert;
	house3.level = Charles;
	house3.events.onInputDown.add(changeHouse, this, 0, house3);

	this.allHouses = game.add.group();

	this.allHouses.add(house1);
	this.allHouses.add(house2);
	this.allHouses.add(house3);

	this.allHouses.forEach(function(house){
		house.fading = BLACK;
		house.visible = false;
		house.inputEnabled = true;

	});
	//TODO: I want to close the notepad when the level is changed so I am working on that
	//TODO: Add the other two buttons for the other levels, and center them where they belong
}


gameplayState.prototype.transition = function(){
	console.log("it worked " + this.houseNumber);
	if(this.houseNumber === 1){
		console.log("this.game.state.start(HOUSE 1)");
		game.state.start("House1", false, false, this.suspects, this.locations, this.notepadStuff, this.allHouses, this.playerInventory);
	}
	else if(this.houseNumber === 2)
		console.log("this.game.state.start(HOUSE 2)");
	else if(this.houseNumber === 3)
		console.log("this.game.state.starts(HOUSE 3)");
	
}
gameplayState.prototype.update = function(){
	if(game.input.mousePointer.isDown)
	{
		
	}
}




