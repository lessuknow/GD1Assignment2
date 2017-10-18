let House1 = function(){
}
House1.prototype.init = function(sus, loc, items, notepad, houses, inv){
	this.suspects = sus;
	this.locations = loc;
	this.ALLITEMS = game.add.group();
	this.ALLITEMS.moveAll(items);
	this.notepadStuff = notepad;
	this.allHouses = houses;
	this.playerInventory = inv;
}
House1.prototype.preload = function(){
}
House1.prototype.create = function(){
	this.hosueNumber = 1;
	this.backGround = game.add.group();
	this.backGround = game.add.sprite(0, 0, "cabBg");
	this.backGround = game.add.sprite(0, 0, "cabAbove");
	this.curNotepadPos = "suspects";
	this.curNotepadIndex = 0;
	this.accused = 0;
	instantiateNotepad(this);

	// Identify and play music
	let music = game.add.audio("Music");
	music.play();
	
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
	this.ALLITEMS.forEach(function(house){
		house.visible = true;
		house.inputEnabled = true;
	});


	
}
House1.prototype.update = function(){
}
