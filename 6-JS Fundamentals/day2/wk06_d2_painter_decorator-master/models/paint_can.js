//paintCan has a volume (litre) of paint
const PaintCan = function(volume) {
  this.volume = volume;
};
PaintCan.prototype.emptyPaint = function(){
    this.volume = 0;
}
PaintCan.prototype.isEmpty = function(){
  return !this.volume ;
}





module.exports = PaintCan;
