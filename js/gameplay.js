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
	game.load.image("cabAbove","assets/art/Cab_750x1334.png");
	game.load.image("cabBg","assets/art/Cab_Background_750x1334.png");
	game.load.image("perOneIcon","assets/art/croppedIcons/charOneCropped.png");
}



gameplayState.prototype.create = function(){
	
	this.backGround = game.add.group();
	
	this.backGround = game.add.sprite(0,0,"cabBg");
	this.backGround = game.add.sprite(0,0,"cabAbove");

	instantiateNotepad(this);
	this.curNotepadPos = "suspects";
	
	//Going to assume that we defualt have suspects open
	
	//suspectCount
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

	
	//we're going to use 2 arrays to store a key/value. like a super ghetto dictionary
	//keys = sprite, values = text


	this.but = game.add.sprite(600,1334-150,"bkpk");
	this.but.inputEnabled = true;
	this.but.events.onInputDown.add(toggleNotepad, this);
	
	for(i=0;i<this.notepadStuff.panels.length;i++)
		for(j=0;j<this.notepadStuff.panels[i].length;j++)
			this.notepadStuff.panels[i][j].visible = !this.notepadStuff.visible;
	
	this.notepadStuff.visible = !this.notepadStuff.visible;
	
	/* This is where the items will be loaded and added to the scene
	 * We will probably have to group items based on what level they appear
	 * unless they are in the players inventroy */

	let item =  game.add.sprite(50, 350, "item");
	let item2 = game.add.sprite(100, 350, "item");
	//Trying to think of a way to automate this process(?) If there is time
	//ITEM 1 PARAMETERS
	item.origX = item.x; 
	item.origY = item.y;
	item.inputEnabled = true;
	item.description = "This is Arsenic";
	//ITEM 2 PARAMETERS
	item2.origX = item.x;
	item2.origY = item.y;
	item2.inputEnabled = true;
	item2.description = "This is a Paper Towel";
	//ADD items into group
	let items = game.add.group()
	items.add(item);
	items.add(item2);
	descriptionText = game.add.text(0, game.world.height - 250, '', {fill: '#ffffff'});
	items.forEach(function (obj) {
		obj.events.onInputDown.add(showItemDescription, {description: obj.description});
	}, this);

}

function showItemDescription(){
	descriptionText.text = this.description;
}

function toggleNotepad(){
	
	if(this.curNotepadPos==="suspects"){
		for(i =0;i<this.suspects.length;i++)
		{
			
			for(j=0;j<this.notepadStuff.panels[i].length;j++)
			{
				this.notepadStuff.panels[i][1].text = this.suspects[i].notepadDescrip;
				this.notepadStuff.panels[i][2].text = this.suspects[i].name;
			}
		}
	}
	
	for(i=0;i<this.notepadStuff.panels.length;i++)
		for(j=0;j<this.notepadStuff.panels[i].length;j++)
			this.notepadStuff.panels[i][j].visible = !this.notepadStuff.visible;
	
	this.notepadStuff.visible = !this.notepadStuff.visible;
}

	
function instantiateNotepad(that){
	//add the notebook's bg
	that.notepadStuff = game.add.group();
	
	//Create the notebook
	that.notepadStuff.create(40,75,"ntbkMenu");
	const ICON_BORDER = 30;
	//add the tiles at the top.	Eventually will add the ability to switch through them easily.
	for(i=0;i<3;i++)
	{
		that.notepadStuff.create(40+i*223, 225,"ntbkMenuSelect");
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
		
		var text = game.add.text(40+i*223+223/2,225+70/2,inputText,style,that.notepadStuff);
		//NOTE: 223 is the width of the textBox, and 70 is its height
		text.anchor.set(0.5,0.5);
	}
	
	//NOTE: panels[i][0] = image, [i][1] = descript, [i][2] = name
	that.notepadStuff.panels = [];
	for(i =0;i<3;i++)
	{
		var temp =[];
		
		temp.push(that.notepadStuff.create(40, 225 + 70 + 263*i,"ntbkPanel"));
		//note: 263 is the height of the notebook panel
		that.notepadStuff.create(40 + ICON_BORDER, 225 + 70 + 263 * i + ICON_BORDER,"tempIcon");
		var style = { font: "bold 34px Arial", fill: "#fff", align: "left", wordWrap: true, wordWrapWidth: 450};
		var tempText = "dddddddddddddddddd\ndddddddddddddddddd\ndddddddddddddddddd\ndddddddddddddddddd\ndddddddddddddddddd";
		//var tempText = "Small glass bottle\nof rat poison, the\nvulgar arsenic. \nA very likely choice\nfor poisoning."

		
		var itemDescript = game.add.text(40 + ICON_BORDER*2 + 200, 225 + 62 + 263 * i + ICON_BORDER,tempText,style);
		temp.push(itemDescript);
		
		stylet = { font: "bold 35px Arial", fill: "#fff", align: "center"};
		var itemName = game.add.text(40+ICON_BORDER+100,312 + 263*i+3,"file_name",stylet);
		temp.push(itemName);
		itemName.anchor.set(0.5,0.5);
		
		that.notepadStuff.panels.push(temp);

	}
	
	//18 char per line; 4 lines.
	//90 is the size fo the Icon
		
		
	
	
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




