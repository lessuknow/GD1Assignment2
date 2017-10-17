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
	game.load.image("perTwoIcon","assets/Art/croppedIcons/charTwoCropped.png");
	game.load.image("perThreeIcon","assets/Art/croppedIcons/charThreeCropped.png");
	game.load.image("fade_Black", "assets/Black.png");

	game.load.image("arrow","assets/tempArrow.png");
	
	//THE OBJECTS OF THE GAME
	game.load.image("ArBottle", "assets/Art/Items_450x500_300dpi/Arsenic-Bottle.png");
	game.load.image("ArReceipt", "assets/Art/Items_450x500_300dpi/Arsenic-Receipt.png");
	game.load.image("Cash", "assets/Art/Items_450x500_300dpi/Cash.png");
	game.load.image("Combination", "assets/Art/Items_450x500_300dpi/Combination.png");
	game.load.image("Letter3", "assets/Art/Items_450x500_300dpi/Crumpled-Letter-3.png");
	game.load.image("Letter2", "assets/Art/Items_450x500_300dpi/Scribbled-Letter-2.png");
	game.load.image("Letter1", "assets/Art/Items_450x500_300dpi/Well-folded-Letter-1.png");
	game.load.image("Receipt1", "assets/Art/Items_450x500_300dpi/R1.png");
	game.load.image("Receipt2", "assets/Art/Items_450x500_300dpi/R2.png");
	game.load.image("Receipt3", "assets/Art/Items_450x500_300dpi/R3.png");

	
	game.load.image("accuseButton","assets/tempAccuse.png");


	//CUTSCENE PNGS
	game.load.image("CharlesK", "assets/Art/Charles_Kensington.png");
	game.load.image("RobertDi", "assets/Art/Robert_DiMarco.png");
	game.load.image("WilliamP", "assets/Art/William_Patrick_Henry.png");


	//AUDIO

	game.load.audio("Music", ["assets/Audio/HansomCabBlues.ogg", "assets/Audio/HansomCabBlues.mp3"]);

	game.load.audio("Write1", "assets/Audio/PencilSounds/1.wav");
	game.load.audio("Write2", "assets/Audio/PencilSounds/2.wav");
	game.load.audio("Write1", "assets/Audio/PencilSounds/3.wav");
	game.load.audio("Write2", "assets/Audio/PencilSounds/4.wav");
	game.load.audio("Write1", "assets/Audio/PencilSounds/5.wav");
	game.load.audio("Write2", "assets/Audio/PencilSounds/6.wav");
	game.load.audio("Write1", "assets/Audio/PencilSounds/7.wav");
	game.load.audio("Write2", "assets/Audio/PencilSounds/8.wav");

	game.load.audio("Open", "assets/Audio/PaperSounds/Open1.wav");
	game.load.audio("Close", "assets/Audio/PaperSounds/Close1.wav"); //phew
	game.load.audio("Turn1", "assets/Audio/PaperSounds/PageTurn1.wav");
	game.load.audio("Turn1", "assets/Audio/PaperSounds/PageTurn2.wav");
	game.load.audio("Turn1", "assets/Audio/PaperSounds/PageTurn3.wav");

	game.load.audio("Click", "assets/Audio/Other/Click.wav");
	game.load.audio("Defeat", "assets/Audio/Other/DefeatBrushes.wav");
	
}

gameplayState.prototype.create = function(){
	
	this.backGround = game.add.group();
	
	this.backGround = game.add.sprite(0,0,"cabBg");
	this.backGround = game.add.sprite(0,0,"cabAbove");
	let ALLITEMS = game.add.group();
	this.curNotepadPos = "suspects";
	this.curNotepadIndex = 0;
	this.accused = 0;
	instantiateNotepad(this);

	// Identify and play music
	let music = game.add.audio("Music");
	music.play();
	
	//this.curNotepadPos = "objects";
	
	//Going to assume that we defualt have suspects open
	
	//SUSPECTS INFORMATION ON NOTEPAD FOR SUSPECTS
	this.suspects = [];
	
	let susOne = {
		name: "testName",
		age: 3,
		race: "testRace",
		heightWeight: "testheightWeight",
		hair: "testHair",
		eyes: "testEyes",
		infoWantedDescrip: "...",
		notepadDescrip: "hello",
		pic: "perOneIcon",
	};
		
	let susTwo = {
		name: "testName2",
		age: 5,
		race: "testRace2",
		heightWeight: "testheightWeight2",
		hair: "testHair2",
		eyes: "testEyes2",
		infoWantedDescrip: "2...",
		notepadDescrip: "hello2",
		pic: "perTwoIcon",
	};
		
	let susThree = {
		name: "testName3",
		age: 1,
		race: "testRace3",
		heightWeight: "testheightWeight3",
		hair: "testHair3",
		eyes: "testEyes3",
		infoWantedDescrip: "3...",
		notepadDescrip: "hello3",
		pic: "perThreeIcon",
	};
	
	this.suspects.push(susOne);
	this.suspects.push(susTwo);
	this.suspects.push(susThree);
	//INFORMATINO FOR LOCATION IN NOTEPAD
	this.locations = [];
	
	let locationOne = {
		name : "locationOne",
		description : "descriptOne",
	};
	
	let locationTwo = {
		name : "locationTwo",
		description : "descriptTwo",
	};
	
	let locationThree = {
		name : "locationThree",
		description : "descriptThree",
	};
	
	this.locations.push(locationOne);
	this.locations.push(locationTwo);
	this.locations.push(locationThree);
	
	
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
	let item3 = game.add.sprite(500, 350, "Cash"); //Loose Money
	item3.description = "A haphazard pile of crisp bank notes - in the order of 250 pounds. A small fortune."
	item3.name = "Loose Money";
	item3.pic = "Cash";
	item3.events.onInputDown.add(addToInventory,this,0,item3);
	let item4 = game.add.sprite(0, 700, "Combination"); //Combination
	item4.description = "A slip of paper containing only the digits 2 6 2 9. It appears to be written in a quick, inexact handwriting."
	item4.name = "Combination";
	item4.pic = "Combination";
	item4.events.onInputDown.add(addToInventory,this,0,item4);
	let item5 = game.add.sprite(250, 700, "Letter1"); //Friend 1: Letter to Deceased
	item5.description = "A carefully-folded letter with neat, deliberate writing."
	item5.name = "William's letter";
	item5.pic = "Letter1";
	item5.events.onInputDown.add(addToInventory,this,0,item5);
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
	this.playerInventory.push(item);
	this.playerInventory.push(item2);
	this.playerInventory.push(item3);
	this.playerInventory.push(item4);
	this.playerInventory.push(item10);
	

	//Put all the sprite clues in designated groups: HOUSE 1, HOUSE 2, and HOUSE 3
	//Have a group that contains all the items: ALLITEMS
	
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
	
	ALLITEMS.visible = true;

	//initialize text for description
	descriptionText = game.add.text(0, game.world.height - 250, '', {fill: '#ffffff'});
	//Here we automate relevant data, such as their coordiantes, and allowing us to interact with it
	for(var i = 0, len = ALLITEMS.children.length; i < len; i++){
		ALLITEMS.children[i].forEach(function(item){
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
	house1.cutscene = William;
	house1.level = Robert;
	house1.events.onInputDown.add(changeHouse, this, 0, house1);
	house1.scale.setTo(4, 4);
	let house2 = game.add.sprite(70, 587, "item");
	house2.cutscene = Charles;
	house2.level = William;
	house2.events.onInputDown.add(changeHouse, this, 0, house2);
	let house3 = game.add.sprite(700, 150, "item");
	house3.cutscene = Robert;
	house3.level = Robert;
	house3.events.onInputDown.add(changeHouse, this, 0, house3);

	this.allHouses = game.add.group();

	this.allHouses.add(house1);
	this.allHouses.add(house2);
	this.allHouses.add(house3);

	let allHousesTemp = this.allHouses;
	let notepadTemp = this.notepadStuff;
	this.allHouses.forEach(function(house){
		house.fading = BLACK;
		house.visible = false;
		house.inputEnabled = true;

	});
	//TODO: I want to close the notepad when the level is changed so I am working on that
	//TODO: Add the other two buttons for the other levels, and center them where they belong
}

function changeHouse(house){
	
	this.allHouses.forEach(function (home){
		home.visible = false;
	});

	game.add.tween(house.fading).to({alpha:1}, 2000, Phaser.Easing.Linear.None, true);
	game.add.tween(house.cutscene).to({alpha:1}, 2000, Phaser.Easing.Linear.None, true, 4000);
	game.add.tween(house.cutscene).to({alpha:0}, 2000, Phaser.Easing.Linear.None, true, 10000);
	game.add.tween(house.fading).to({alpha:0}, 0, Phaser.Easing.Linear.None, true, 10000);

	
}

function addToInventory(toAdd){
	this.playerInventory.push(toAdd);
	console.log("Added "+toAdd.name);
	descriptionText.text = toAdd.description;
	toAdd.destroy();
}

function swapNotepad(){
	
	if(this.curNotepadPos==="suspects"){
		this.arrows.visible = false;
		this.accuseBar.visible = true;
		this.allHouses.forEach(function(house){
			house.visible = false;
		});
		
		for(i =0;i<this.suspects.length;i++)
		{
			for(j=0;j<this.notepadStuff.panels[i].length;j++)
			{
			
					this.notepadStuff.panels[i][0].width = 200;
					this.notepadStuff.panels[i][0].height = 200;
					this.notepadStuff.panels[i][1].text = this.suspects[i].notepadDescrip;
					this.notepadStuff.panels[i][2].text = this.suspects[i].name;
					this.notepadStuff.panels[i][0].loadTexture(this.suspects[i].pic,0,false);
				
			}
		}
	}
	else if(this.curNotepadPos==="objects"){
		
		this.arrows.visible = true;
		this.accuseBar.visible = false;
		this.allHouses.forEach(function(house){
			house.visible = false;
		});
		
		for(i=0;i<3;i++)
		{
			for(j=0;j<this.notepadStuff.panels[i].length;j++)
			{
				//this.notepadStuff.panels[i][0].scale.setTo(0.3, 0.3);
				this.notepadStuff.panels[i][0].width = 200;
				this.notepadStuff.panels[i][0].height = 200;
				if(this.playerInventory[i + this.curNotepadIndex]!=null)
				{
					this.notepadStuff.panels[i][1].text = this.playerInventory[i + this.curNotepadIndex].description;
					this.notepadStuff.panels[i][2].text = this.playerInventory[i + this.curNotepadIndex].name;
					this.notepadStuff.panels[i][0].loadTexture(this.playerInventory[i + this.curNotepadIndex].pic,0,false);
				}
				else
				{
					this.notepadStuff.panels[i][1].text = "";
					this.notepadStuff.panels[i][2].text = ""
					this.notepadStuff.panels[i][0].loadTexture("",0,false);
				}
			}
		}
	}
	else
	{
		this.arrows.visible = false;
		this.accuseBar.visible = false;
		for(i=0;i<3;i++)
		{
			for(j=0;j<this.notepadStuff.panels[i].length;j++)
			{
				//TESTING OUT BUTTONS IN NOTEPAD
				this.notepadStuff.panels[i][0].width = 200;
				this.notepadStuff.panels[i][0].height = 200;
				
				this.notepadStuff.panels[i][1].text = this.locations[i].description;
				this.notepadStuff.panels[i][2].text = this.locations[i].name;
//		this.notepadStuff.panels[i][0].loadTexture(this.locations[i].sprite, 0, false);
				this.notepadStuff.panels[i][0].inputEnable = true;
				this.allHouses.forEach(function(house){
					house.visible = true;
				});
				
			}
		}
	}

}

function enableDisableNotepad(){
	for(i=0;i<this.notepadStuff.panels.length;i++)
		for(j=0;j<this.notepadStuff.panels[i].length;j++)
			this.notepadStuff.panels[i][j].visible = !this.notepadStuff.visible;
	this.notepadStuff.visible = !this.notepadStuff.visible;

}

function swapObj(){
	this.curNotepadPos = "objects";
}
	
function swapSus(){
	this.curNotepadPos = "suspects";
}
	
function swapLoc(){
	this.curNotepadPos = "locations";
}

function notebookIndexAdd(){
	if(this.playerInventory.length-2>(this.curNotepadIndex +1 ) && this.curNotepadPos==="objects"){
		this.curNotepadIndex++;
	}
}

function notebookIndexSub(){
	if(this.curNotepadIndex >0 && this.curNotepadPos==="objects"){
		this.curNotepadIndex--;
	}
}

function instantiateNotepad(that){
	//add the notebook's bg
	that.notepadStuff = game.add.group();
	
	//Create the notebook
	that.notepadStuff.create(40,75,"ntbkMenu");
	const ICON_BORDER = 30;
	//add the tiles at the top.	Eventually will add the ability to switch through them easily.
	that.notepadStuff.topBut = [];
	for(i=0;i<3;i++)
	{
		var panelBox = that.notepadStuff.create(40+i*223, 225,"ntbkMenuSelect");
				
		panelBox.inputEnabled = true;

		that.notepadStuff.topBut.push(panelBox);
		
		var style = { font: "bold 40px Arial", fill: "#fff", align: "center"};
		
		var text = game.add.text(40+i*223+223/2,225+70/2,inputText,style,that.notepadStuff);
		text.inputEnabled = true;

		
		var inputText = "error!";
		switch(i)
		{
			case 0:
				inputText = "Objects";
				panelBox.events.onInputDown.add(swapObj, that);
				text.events.onInputDown.add(swapObj,that);
				break;
			case 1:
				inputText = "Suspects";
				panelBox.events.onInputDown.add(swapSus, that);
				text.events.onInputDown.add(swapSus,that);
				break;
			case 2:
				inputText = "Locations";
				panelBox.events.onInputDown.add(swapLoc, that);
				text.events.onInputDown.add(swapLoc,that);				
				break;
		}
		panelBox.events.onInputDown.add(swapNotepad, that);
		text.events.onInputDown.add(swapNotepad,that);
		text.setText(inputText);
		
		//NOTE: 223 is the width of the textBox, and 70 is its height
		text.anchor.set(0.5,0.5);
	}
	
	//NOTE: panels[i][0] = image, [i][1] = descript, [i][2] = name
	that.notepadStuff.panels = [];
	for(i =0;i<3;i++)
	{
		var temp =[];
		
		var nkPanel = that.notepadStuff.create(40, 225 + 70 + 263*i,"ntbkPanel");
		//note: 263 is the height of the notebook panel
		temp.push(that.notepadStuff.create(40 + ICON_BORDER, 225 + 70 + 263 * i + ICON_BORDER,"tempIcon"));
		var style = { font: "bold 34px Arial", fill: "#fff", align: "left", wordWrap: true, wordWrapWidth: 400};
		var tempText = "dddddddddddddddddd\ndddddddddddddddddd\ndddddddddddddddddd\ndddddddddddddddddd\ndddddddddddddddddd";
		//var tempText = "Small glass bottle\nof rat poison, the\nvulgar arsenic. \nA very likely choice\nfor poisoning."

		
		var itemDescript = game.add.text(40 + ICON_BORDER*2 + 200, 225 + 62 + 263 * i + ICON_BORDER,tempText,style);
		temp.push(itemDescript);
		
		stylet = { font: "bold 30px Arial", fill: "#fff", align: "center"};
		var itemName = game.add.text(40+ICON_BORDER+100,312 + 263*i+3,"file_name",stylet);
		temp.push(itemName);
		itemName.anchor.set(0.5,0.5);
		
		that.notepadStuff.panels.push(temp);
		temp.push(nkPanel);

	}
	let leftArrow = game.add.sprite(40 + 25/2,225 + 70 + 263*2 + 263 + 25/2,"arrow");
	let rightArrow = game.add.sprite(40 + 670 - 25/2 - 100,225 + 70 + 263*2 + 263 + 25/2,"arrow");
	
	leftArrow.inputEnabled = true;
	rightArrow.inputEnabled = true;
	
	leftArrow.events.onInputDown.add(notebookIndexSub,that);
	leftArrow.events.onInputDown.add(swapNotepad,that);
	rightArrow.events.onInputDown.add(notebookIndexAdd,that);
	rightArrow.events.onInputDown.add(swapNotepad,that);
	
	let accBut = game.add.sprite(40+670/2-150,225 + 70 + 263*2 + 263 + 25/2,"accuseButton");
	
	that.arrows = game.add.group();
	that.accuseBar = game.add.group();
	
	
	that.arrows.add(leftArrow);
	that.arrows.add(rightArrow);
	
	
	accBut.inputEnabled = true;
	
	accBut.events.onInputDown.add(accuse,that);
	//make sure that this appears only when you open up suspects; arrows for inventory 
	
	//that.notepadStuff.add(leftArrow);
	//that.notepadStuff.add(rightArrow);
	that.accuseBar.add(accBut);
	that.notepadStuff.add(that.accuseBar);
	that.notepadStuff.add(that.arrows);

}

function accuse(){
	
	for(i=0;i<3;i++)
	{
		this.notepadStuff.panels[i][0].inputEnabled = true;
		this.notepadStuff.panels[i][1].inputEnabled = true;
		this.notepadStuff.panels[i][2].inputEnabled = true;
		this.notepadStuff.panels[i][3].inputEnabled = true;
	}
	this.notepadStuff.panels[0][0].events.onInputDown.add(selectOne,this);
	this.notepadStuff.panels[0][1].events.onInputDown.add(selectOne,this);
	this.notepadStuff.panels[0][2].events.onInputDown.add(selectOne,this);
	this.notepadStuff.panels[0][3].events.onInputDown.add(selectOne,this);
	
	this.notepadStuff.panels[1][0].events.onInputDown.add(selectTwo,this);
	this.notepadStuff.panels[1][1].events.onInputDown.add(selectTwo,this);
	this.notepadStuff.panels[1][2].events.onInputDown.add(selectTwo,this);
	this.notepadStuff.panels[1][3].events.onInputDown.add(selectTwo,this);
	
	this.notepadStuff.panels[2][0].events.onInputDown.add(selectThree,this);
	this.notepadStuff.panels[2][1].events.onInputDown.add(selectThree,this);
	this.notepadStuff.panels[2][2].events.onInputDown.add(selectThree,this);
	this.notepadStuff.panels[2][3].events.onInputDown.add(selectThree,this);
}

function finishAccuse(){
	console.log("you accused them yay");
}

function selectOne(){
	this.accused = 1;
	finishAccuse();
}

function selectTwo(){
	this.accused = 2;
	finishAccuse();
}

function selectThree(){
	this.accused = 3;
	finishAccuse();
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




