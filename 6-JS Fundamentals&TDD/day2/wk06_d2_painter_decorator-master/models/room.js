//room has not yet been painted
const Room = function(area){
  this.area = area;
  this.paintStatus = false;
};
//room has been painted
Room.prototype.paintRoom = function () {
  this.paintStatus = true;
};

module.exports = Room;
