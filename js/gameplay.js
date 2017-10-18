//'constructor'
var descriptionText; //This will manipulate what shows up on the textbox
let gameplayState = function(){
	
}

gameplayState.prototype.preload = function(){
	
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

	//initialize text for description
	
	var style = { font: "bold 30px Arial", fill: "#fff", align: "center", wordWrap: true, wordWrapWidth: 500};
	descriptionText = game.add.text(125, game.world.height - 165, '', style);
}


gameplayState.prototype.update = function(){
	if(game.input.mousePointer.isDown)
	{
		
	}
}




