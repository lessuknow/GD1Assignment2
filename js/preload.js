//'constructor'
let preloadState = function(){
	
}

preloadState.prototype.preload = function(){
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

	game.load.audio("Write1", "assets/Audio/PencilSounds/1.ogg");
	game.load.audio("Write2", "assets/Audio/PencilSounds/2.ogg");
	game.load.audio("Write1", "assets/Audio/PencilSounds/3.ogg");
	game.load.audio("Write2", "assets/Audio/PencilSounds/4.ogg");
	game.load.audio("Write1", "assets/Audio/PencilSounds/5.ogg");
	game.load.audio("Write2", "assets/Audio/PencilSounds/6.ogg");
	game.load.audio("Write1", "assets/Audio/PencilSounds/7.ogg");
	game.load.audio("Write2", "assets/Audio/PencilSounds/8.ogg");

	game.load.audio("Open", "assets/Audio/PaperSounds/Open1.ogg");
	game.load.audio("Close", "assets/Audio/PaperSounds/Close1.ogg"); //phew
	game.load.audio("Turn1", "assets/Audio/PaperSounds/PageTurn1.ogg");
	game.load.audio("Turn1", "assets/Audio/PaperSounds/PageTurn2.ogg");
	game.load.audio("Turn1", "assets/Audio/PaperSounds/PageTurn3.ogg");

	game.load.audio("Click", "assets/Audio/Other/Click.ogg");
	game.load.audio("Defeat", "assets/Audio/Other/DefeatBrushes.ogg");
	
	
}

var turn1;
var turn2;
var turn3;
var Write1;
var Write2;
var Write3;
var Write4;
var Write5;
var Write6;
var Write7;
var Write8;
var scribbles = [];
var pageTurns = [];

preloadState.prototype.create = function(){
<<<<<<< HEAD

	// Adding audio from preload
	turn1 = game.add.audio("Turn1");
	turn2 = game.add.audio("Turn2");
	turn3 = game.add.audio("Turn3");

	Write1 = game.add.audio("Write1");
	Write2 = game.add.audio("Write2");
	Write3 = game.add.audio("Write3");
	Write4 = game.add.audio("Write4");
	Write5 = game.add.audio("Write5");
	Write6 = game.add.audio("Write6");
	Write7 = game.add.audio("Write7");
	Write8 = game.add.audio("Write8");

	scribbles = [Write1, Write2, Write3, Write4, Write5, Write6, Write7, Write8];
	pageTurns = [turn1, turn2, turn3];

	//SUSPECTS INFORMATION ON NOTEPAD FOR SUSPECTS
=======
//SUSPECTS INFORMATION ON NOTEPAD FOR SUSPECTS
>>>>>>> d64b1c09d4d54fb9d059ccbbf0d66bc694c27c68
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
	//INFORMATION FOR LOCATION IN NOTEPAD
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

	game.state.start("Gameplay", true, false, this.suspects, this.locations);
}

preloadState.prototype.update = function(){
	
}
preloadState.prototype.transition = function(){
	
}
function changeHouse(house){
	
	this.allHouses.forEach(function (home){
		home.visible = false;
	});

	game.add.tween(house.fading).to({alpha:1}, 2000, Phaser.Easing.Linear.None, true);
	game.add.tween(house.cutscene).to({alpha:1}, 2000, Phaser.Easing.Linear.None, true, 4000);
	game.add.tween(house.cutscene).to({alpha:0}, 2000, Phaser.Easing.Linear.None, true, 10000);
	var tween = game.add.tween(house.fading).to({alpha:0}, 0, Phaser.Easing.Linear.None, true, 9000);
	this.houseNumber = house.number;
	tween.onComplete.add(this.transition, this);
	
}

function addToInventory(toAdd){
	this.playerInventory.push(toAdd);
	console.log("Added "+toAdd.name);
	descriptionText.text = toAdd.description;
	toAdd.destroy();
	let soundToPlay = scribbles[Math.floor(Math.random()*scribbles.length)];
	soundToPlay.play();
	// Write1.play();
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
				if(this.playerInventory[i + this.curNotepadIndex]!= null)
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
