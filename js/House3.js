let House3 = function(){
}
House3.prototype.preload = function(){
}
House3.prototype.create = function(){
	this.houseNumber = 2;
	this.backGround = game.add.group();
	this.backGround = game.add.sprite(0, 0, "L3_1");
	this.backGround = game.add.sprite(50, 355, "L3_2");
	
	this.itemsH3 = game.add.group(); //HOUSE 3: Robert's House
	
	this.backGround = game.add.sprite(45, 140, "L3_3");
	this.backGround = game.add.sprite(0, 740, "L3_4");
	this.backGround = game.add.sprite(100, 100, "L3_8");
	this.backGround = game.add.sprite(0, 700, "L3_9");
	this.backGround = game.add.sprite(0, 700, "L3_10");
	
	this.curNotepadPos = "suspects";
	this.curNotepadIndex = 0;
	this.accused = 0;
	
	//ITEMS IN THIS HOSUE
	let item =  game.add.sprite(160, 350, "ArBottle"); //Arsenic Bottle
	item.description = "A small glass bottle of rat poison - the vulgar, ubiquitous arsenic. A very likely choice for a poisoning."
	item.scale.setTo(0.15, 0.15);
	item.name = "Arsenic Bottle";
	item.pic = "ArBottle";
	item.alreadyGrabbed = false;
	item.events.onInputDown.add(addToInventory,this,0,item);
	let item2 = game.add.sprite(140, 1180, "ArReceipt"); //Arsenic Receipt
	item2.scale.setTo(0.15, 0.15);
	item2.description = "A receipt from the local drug store for a dram of rat poison";
	item2.name = "Arsenic Receipt";
	item2.pic = "ArReceipt";
	item2.alreadyGrabbed = false;
	item2.events.onInputDown.add(addToInventory,this,0,item2);
	let item7 = game.add.sprite(680, 600, "Letter3"); //Friend 3: Letter to Deceased
	item7.scale.setTo(0.3, 0.3);
	item7.description = "A crumpled letter written with an inexcusable excess of ink."
	item7.name = "Robert's letter";
	item7.pic = "Letter3";
	item7.alreadyGrabbed = false;
	item7.events.onInputDown.add(addToInventory,this,0,item7);
	
	this.itemsH3.add(item);//Arsenic Bottle
	this.itemsH3.add(item2);//Arsenic Receipt
	this.itemsH3.add(item7); //Letter 3
	
	instantiateNotepad(this);
	this.but = game.add.sprite(600,1334-175,"bkpk");
	this.but.inputEnabled = true;
	this.but.events.onInputDown.add(enableDisableNotepad, this);
	this.but.events.onInputDown.add(swapNotepad, this);
	for(i=0;i<this.notepadStuff.panels.length;i++)
		for(j=0;j<this.notepadStuff.panels[i].length;j++)
			this.notepadStuff.panels[i][j].visible = !this.notepadStuff.visible;
	
	this.notepadStuff.visible = !this.notepadStuff.visible;
	this.itemsH3.forEach(function(item){
		for(i =  0; i < playerInventory.length; i++){
			if(playerInventory[i].name === item.name){
				item.alreadyGrabbed = true;
				item.visible = false
				item.inputEnabled= false;
			}
		}
		if(item.alreadyGrabbed !== true){
			item.visible = true;
			item.inputEnabled = true;
		}
	});
}
House3.prototype.update = function(){
}
