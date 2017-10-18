let House2 = function(){
}
House2.prototype.preload = function(){
}
House2.prototype.create = function(){
	this.houseNumber = 2;
	this.backGround = game.add.group();
	this.backGround = game.add.sprite(0, 0, "L2_1");
	this.backGround = game.add.sprite(0, 0, "L2_2");
	this.backGround = game.add.sprite(235, 550, "L2_3");
	this.itemsH2 = game.add.group(); //HOUSE 2: Charle's House
	this.backGruond = game.add.sprite(250, 800, "L2_5");
	this.backGround = game.add.sprite(0, 755, "L2_6");
	this.curNotepadPos = "suspects";
	this.curNotepadIndex = 0;
	this.accused = 0;
	
	//ITEMS IN THIS HOSUE
	let item6 = game.add.sprite(250, 1200, "Letter2"); //Friend 2: Letter to Deceased
	item6.visible = false;
	item6.description = "A childishly scribbled note with a few stains on it."
	item6.name = "Charle's letter";
	item6.pic = "Letter2";
	item6.alreadyGrabbed = false; 
	item6.events.onInputDown.add(addToInventory,this,0,item6);
	let item8 = game.add.sprite(350, 900, "Receipt1"); //Friend 1: Receipt from Bar
	item8.visible = false;
	item8.description = "A receipt for some light bare fare."
	item8.name = "William's Receipt";
	item8.pic = "Receipt1";
	item8.alreadyGrabbed = false; 
	item8.events.onInputDown.add(addToInventory,this,0,item8);
	let item9 = game.add.sprite(515, 1050, "Receipt2"); //Friend 3: Receipt from Bar
	item9.visible = false;
	item9.description = "A short receipt for a meat pie with tomato sauce."
	item9.name = "Robert's Receipt";
	item9.pic = "Receipt2";
	item9.alreadyGrabbed = false; 
	item9.events.onInputDown.add(addToInventory,this,0,item9);
	let item10 = game.add.sprite(0, 745, "Receipt3"); //Deceased: Receipt from Bar
	item10.visible = false;
	item10.description = "This receipt's for enough alcohol to kill a man. An odd array of drinks as well."
	item10.name = "James's Receipt";
	item10.pic = "Receipt3";
	item10.alreadyGrabbed = false;
	item10.events.onInputDown.add(addToInventory,this,0,item10);
	
	this.itemsH2.add(item8); //Receipt Bar Friend 1
	this.itemsH2.add(item9);//Receipt Bar Friend 3
	this.itemsH2.add(item10);//Receipt Bar Deceased 
	this.itemsH2.add(item6)// Friend 2 Letter

	instantiateNotepad(this);
	this.but = game.add.sprite(600,1334-175,"bkpk");
	this.but.inputEnabled = true;
	this.but.events.onInputDown.add(enableDisableNotepad, this);
	this.but.events.onInputDown.add(swapNotepad, this);

	for(i=0;i<this.notepadStuff.panels.length;i++)
		for(j=0;j<this.notepadStuff.panels[i].length;j++)
			this.notepadStuff.panels[i][j].visible = !this.notepadStuff.visible;
	
	this.notepadStuff.visible = !this.notepadStuff.visible;
	this.itemsH2.forEach(function(item){
		for(i =  0; i < playerInventory.length; i++){
			if(playerInventory[i].name === item.name){
				item.alreadyGrabbed = true;
				item.visible = false
				item.inputEnabled= false;
			}
		}
		if(item.alreadyGrabbed !== true){
			item.scale.setTo(0.3, 0.3);
			item.visible = true;
			item.inputEnabled = true;
		}
	});
}
House2.prototype.update = function(){
}
