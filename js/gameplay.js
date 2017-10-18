//'constructor'
var descriptionText; //This will manipulate what shows up on the textbox
let gameplayState = function(){
	
}

gameplayState.prototype.preload = function(){
	
}
gameplayState.prototype.create = function(){
	this.houseNumber = 0;
	this.backGround = game.add.group();
	let bgBack = game.add.sprite(0,0,"cabBg");
	let bgCab = game.add.sprite(0,0,"cabAbove");
	
	this.backGround.add(bgBack);
	this.backGround.add(bgCab);
	
	bgBack.alpha = 0;
	bgCab.alpha = 0;
	
    game.add.tween(bgBack).to( { alpha: 1 }, 2000, "Linear", true, 0, 0, false);	
    game.add.tween(bgCab).to( { alpha: 1 }, 2000, "Linear", true, 0, 0, false);	
	
	
	
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

	//initialize text for description
	
	var style = { font: "bold 30px Arial", fill: "#FFFFFF", align: "center", wordWrap: true, wordWrapWidth: 750};
	//descriptionText = game.add.text(15, game.world.height - 350, 'You must listen to me James.  No one must know about this.  I know of your plan to tell the others about my “bad habits” but it most certainly won\'t do.  I have worked hard and diligently to make my name and reputation strong.  I will not let you destroy what I have built.Yours,Robert', style);
	//Here we automate relevant data, such as their coordiantes, and allowing us to interact with it

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
	//house1.events.onInputDown.add(changeHouse, this, 0, house1);
	house1.scale.setTo(4, 4);
	let house2 = game.add.sprite(70, 588, "item");
	house2.number = 2;
	house2.cutscene = Charles;
	house2.level = William;
	//house2.events.onInputDown.add(changeHouse, this, 0, house2);
	let house3 = game.add.sprite(70,851 , "item");
	house3.number = 3;
	house3.cutscene = Robert;
	house3.level = Charles;
	//house3.events.onInputDown.add(changeHouse, this, 0, house3);

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

	var style = { font: "bold 30px Arial", fill: "#fff", align: "center", wordWrap: true, wordWrapWidth: 500};
	descriptionText = game.add.text(125, game.world.height - 165, '', style);
}


gameplayState.prototype.update = function(){
	if(game.input.mousePointer.isDown)
	{
		
	}
}




