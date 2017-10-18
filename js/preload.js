//'constructor'
let playerInventory = [];
let suspects = [];
let locations = [];
let houseNumber = 0;
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

	game.load.image("titleText", "assets/title.png");
	
	//CUTSCENE PNGS
	game.load.image("CharlesK", "assets/Art/Charles_Kensington.png");
	game.load.image("RobertDi", "assets/Art/Robert_DiMarco.png");
	game.load.image("WilliamP", "assets/Art/William_Patrick_Henry.png");


	//AUDIO

	game.load.audio("Music", ["assets/Audio/HansomCabBlues.ogg", "assets/Audio/HansomCabBlues.mp3"]);

	game.load.audio("Write1", "assets/Audio/PencilSounds/1.ogg");
	game.load.audio("Write2", "assets/Audio/PencilSounds/2.ogg");
	game.load.audio("Write3", "assets/Audio/PencilSounds/3.ogg");
	game.load.audio("Write4", "assets/Audio/PencilSounds/4.ogg");
	game.load.audio("Write5", "assets/Audio/PencilSounds/5.ogg");
	game.load.audio("Write6", "assets/Audio/PencilSounds/6.ogg");
	game.load.audio("Write7", "assets/Audio/PencilSounds/7.ogg");
	game.load.audio("Write8", "assets/Audio/PencilSounds/8.ogg");

	game.load.audio("Open", "assets/Audio/PaperSounds/Open1.ogg");
	game.load.audio("Close", "assets/Audio/PaperSounds/Close1.ogg"); //phew
	game.load.audio("Turn1", "assets/Audio/PaperSounds/PageTurn1.ogg");
	game.load.audio("Turn2", "assets/Audio/PaperSounds/PageTurn2.ogg");
	game.load.audio("Turn3", "assets/Audio/PaperSounds/PageTurn3.ogg");

	game.load.audio("Click", "assets/Audio/Other/Click.ogg");
	game.load.audio("Defeat", "assets/Audio/Other/DefeatBrushes.ogg");
	
	game.load.image("title", "assets/title.png");
	game.load.image("LetterOneScreen", "assets/Art/LetterScreens/Letter1Screen.jpg");
	game.load.image("LetterTwoScreen", "assets/Art/LetterScreens/Letter2Screen.jpg");
	game.load.image("LetterThreeScreen", "assets/Art/LetterScreens/Letter3Screen.jpg");
	game.load.image("introScene","assets/Art/IntroCutScene.jpg");
	
	game.load.image("ripChar","assets/Art/GameOverCharles.jpg");
	game.load.image("ripWil","assets/Art/GameOverWilliam.jpg");
	game.load.image("win","assets/Art/VictoryScene.jpg");
	
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

var pageturns;
var scribbles;

preloadState.prototype.create = function(){
//SUSPECTS INFORMATION ON NOTEPAD FOR SUSPECTS
	this.backGround = game.add.sprite(0,0,"titleText");

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

	// arrays of sounds for random playback
	pageturns = [turn1, turn2, turn3];
	scribbles = [Write1, Write2, Write3, Write4, Write5, Write6, Write7, Write8];

	//SUSPECTS INFORMATION ON NOTEPAD FOR SUSPECTS
	let susOne = {
		name: "William P. Henry",
		notepadDescrip: "William is a quiet old man.  He lives humbly with his wife Elena and refrains from gluttonous spending.",
		pic: "perOneIcon",
	};
		
	let susTwo = {
		name: "C. Kensington",
		notepadDescrip: "Charles' house is a pigsty.  He lives alone and does not seem to go out very much, except with friends.",
		pic: "perTwoIcon",
	};
		
	let susThree = {
		name: "Robert DiMarco",
		notepadDescrip: "Robert lives in a simple house.  He seems like a normal guy who needs to find himself a hobby.",
		pic: "perThreeIcon",
	};
	
	suspects.push(susOne);
	suspects.push(susTwo);
	suspects.push(susThree);
	//INFORMATION FOR LOCATION IN NOTEPAD
	
	let locationOne = {
		name : " ",
		description : "The house of William Patrick Henry",
		sprite: "item",
		number: 1,
	};
	
	let locationTwo = {
		name : " ",
		description : "The house of Charles Kensington",
		sprite: "item",
		number: 2,
	};
	
	let locationThree = {
		name : " ",
		description : "The house of Robert DiMarco",
		sprite: "item",
		number: 3,
	}
	
	locations.push(locationOne);
	locations.push(locationTwo);
	locations.push(locationThree);
	
	this.backGround.inputEnabled = true;
	this.backGround.events.onInputDown.add(fade, this);
}

function fade(){
	
	game.add.tween(this.backGround).to({alpha:0}, 0, "Linear" , true, 0);
	
	this.tempImage = game.add.sprite(0,0,"introScene");
	this.tempImage.alpha = 0;
	
	let tween = game.add.tween(this.tempImage).to({alpha:1}, 2000, "Linear" , true, 2000);
	tween.onComplete.add(fadeTwo,this);
}

function fadeTwo(){
	let tween = game.add.tween(this.tempImage).to({alpha:0}, 2000, "Linear" , true, 8000);
	tween.onComplete.add(move,this);	
}

function move(){
	game.state.start("Gameplay", true, false);
}

preloadState.prototype.update = function(){
	
}
function changeHouse(){
	this.BLACK = game.add.sprite(0, 0, "fade_Black");
	this.BLACK.alpha = 0;
	this.BLACK.inputEnabled = true;
	if(this.number === 1){
		this.scene = game.add.sprite(0,0,"WilliamP");
		this.scene.alpha = 0;
	}else if(this.number == 2){
		this.scene = game.add.sprite(0, 0, "CharlesK");
		this.scene.alpha = 0;
	}else{
		this.scene = game.add.sprite(0, 0, "RobertDi");
		this.scene.alpha = 0;
	}

	game.add.tween(this.BLACK).to({alpha:1}, 2000, Phaser.Easing.Linear.None, true);
	game.add.tween(this.scene).to({alpha:1}, 2000, Phaser.Easing.Linear.None, true, 2000);
	game.add.tween(this.scene).to({alpha:0}, 2000, Phaser.Easing.Linear.None, true, 10000);
	var tween = game.add.tween(this.BLACK).to({alpha:0}, 0, Phaser.Easing.Linear.None, true, 9000);
	tween.onComplete.add(function(){
		console.log("it worked " + this.number);
		if(this.number === 1){
			console.log("this.game.state.start(HOUSE 1)");
			game.state.start("House1", false, true);
		}
		else if(this.number === 2){
			console.log("this.game.state.start(HOUSE 2)");
			game.state.start("House2", false, true);
		}
		else if(this.number === 3){
			console.log("this.game.state.starts(HOUSE 3)");
			game.state.start("House3", false, true);
		}
	}, this);
	
}

function addToInventory(toAdd){
	playerInventory.push(toAdd);
	console.log("Added "+toAdd.name);
	descriptionText.text = toAdd.description;
	toAdd.inputEnabled = false;
	toAdd.destroy();

	let soundToPlay = scribbles[Math.floor(Math.random()*scribbles.length)];
	soundToPlay.play();
	
	if(toAdd.name === "William's letter"){
		openLetter("wil");
	}
	else if(toAdd.name === "Charle's letter")
	{
		openLetter("char");
	}
	else if(toAdd.name === "Robert's letter")
	{
		openLetter("rob");
	}
}

function openLetter(person){
	console.log("HEY YOU");
	
	this.BLACK = game.add.sprite(0, 0, "fade_Black");
	this.BLACK.alpha = 0;
	if(person==="wil")
	{
		this.scene = game.add.sprite(0,0,"LetterOneScreen");
	}
	else if(person==="char"){
		this.scene = game.add.sprite(0,0,"LetterTwoScreen");
	}
	else{
		this.scene = game.add.sprite(0,0,"LetterThreeScreen");
	}
	this.scene.alpha = 0;
	game.add.tween(this.BLACK).to({alpha:1}, 2000, Phaser.Easing.Linear.None, true);
	var tempTween = game.add.tween(this.scene).to({alpha:1}, 2000, Phaser.Easing.Linear.None, true, 3000);
	this.scene.inputEnabled = true;
	tempTween.onComplete.add(addInput, this);
}

function addInput(){
	
	this.scene.events.onInputDown.add(fadeAway, this);
}

function fadeAway(){
	this.scene.events.onInputDown.removeAll();
	var tempTween = game.add.tween(this.scene).to({alpha:0}, 2000, Phaser.Easing.Linear.None, true);
	game.add.tween(this.BLACK).to({alpha:0}, 2000, Phaser.Easing.Linear.None, true);
	
tempTween.onComplete.add(function(){this.scene.inputEnabled = false;}, this);
	
}


function swapNotepad(){
	for(i = 0; i < 3; i++){
		this.notepadStuff.panels[i][0].events.onInputDown.removeAll();
	}

	// Make a sound
	let soundToPlay2 = pageturns[Math.floor(Math.random()*pageturns.length)];
	soundToPlay2.play();

	if(this.curNotepadPos==="suspects"){
		this.arrows.visible = false;
		this.accuseBar.visible = true;
		
		for(i =0;i<suspects.length;i++)
		{
			
					this.notepadStuff.panels[i][1].text = suspects[i].notepadDescrip;
					this.notepadStuff.panels[i][2].text = suspects[i].name;
					this.notepadStuff.panels[i][0].loadTexture(suspects[i].pic,0,false);
			
					this.notepadStuff.panels[i][0].width = 200;
					this.notepadStuff.panels[i][0].height = 200;
				
			
		}
	}
	else if(this.curNotepadPos==="objects"){
		
		this.arrows.visible = true;
		this.accuseBar.visible = false;
		
		for(i=0;i<3;i++)
		{
			
				//this.notepadStuff.panels[i][0].scale.setTo(0.3, 0.3);
			
				if(playerInventory[i + this.curNotepadIndex]!=null)
				{
					this.notepadStuff.panels[i][1].text = playerInventory[i + this.curNotepadIndex].description;
					this.notepadStuff.panels[i][2].text = playerInventory[i + this.curNotepadIndex].name;
					this.notepadStuff.panels[i][0].loadTexture(playerInventory[i + this.curNotepadIndex].pic,0,false);
				}
				else
				{
					this.notepadStuff.panels[i][1].text = "";
					this.notepadStuff.panels[i][2].text = ""
					this.notepadStuff.panels[i][0].loadTexture("",0,false);
				}
				this.notepadStuff.panels[i][0].width = 200;
				this.notepadStuff.panels[i][0].height = 200;
			
		}
	}
	else
	{
		this.arrows.visible = false;
		this.accuseBar.visible = false;
		for(i=0;i<3;i++)
		{
			
				//TESTING OUT BUTTONS IN NOTEPAD
				
				this.notepadStuff.panels[i][1].text = locations[i].description;
				this.notepadStuff.panels[i][2].text = locations[i].name;
				this.notepadStuff.panels[i][0].loadTexture(locations[i].sprite, 0, false);
				this.notepadStuff.panels[i][0].inputEnabled = true;
				this.notepadStuff.panels[i][0].events.onInputDown.add(changeHouse, {number: locations[i].number});
				
			
				this.notepadStuff.panels[i][0].width = 200;
				this.notepadStuff.panels[i][0].height = 200;
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
	if(playerInventory.length-2>(this.curNotepadIndex +1 ) && this.curNotepadPos==="objects"){
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

function finishAccuse(acc){
	if(acc === 3){
		
		let screen = game.add.sprite(0,0,"win");
		screen.inputEnabled = true;
		
		
		//console.log("You put Robert DiMarco behind bars! Congradulations!(DISPLAY THIS TEXT UNDERNEATH A PICTURE OF ROBERT BEHIND BARS AND KEEP THAT SCREEN AS AN END SCREEN)");
	}
	else if(acc===1){
			
		let screen = game.add.sprite(0,0,"ripWil");
		screen.inputEnabled = true;
	}
	else
	{
			
		let screen = game.add.sprite(0,0,"ripChar");
		screen.inputEnabled = true;
	}
}

function selectOne(){
	finishAccuse(1);
}

function selectTwo(){
	finishAccuse(2);
}

function selectThree(){
	finishAccuse(3);
}
