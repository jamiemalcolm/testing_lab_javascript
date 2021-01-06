const Room = function(area){
    this.area = area;
    this.paintStatus = false;
}

Room.prototype.paintItself = function(){
    this.paintStatus = true;
}

module.exports = Room;