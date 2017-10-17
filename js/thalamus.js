let thalamus = function(){
}
thalamus.prototype.init = function(lvl){
	this.level = lvl;

thalamus.prototype.preload = function(){
}
thalamus.prototype.create = function(){
	this.backGround = game.add.group();
	this.backGround = game.add.sprite(0,0, "cabBg");
	this.backGrund = game.add.sprite(0, 0, "cabAbove");
}
thalamus.prototype.transition = function(){

}

