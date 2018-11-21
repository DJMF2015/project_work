const Park = function (name, ticketPrice) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaur = [] //array
}

Park.prototype.addDinos = function (dinos) {
  this.dinosaur.push(dinos);
};

Park.prototype.removeDino = function (dinos) {
  console.log(this.dinosaur.pop(dinos));
};

Park.prototype.mostPopular = function  () {
  let favouriteDino = this.dinosaur[0]

  for (const dino of this.dinosaur){
    if (dino.guestsAttractedPerDay > favouriteDino.guestsAttractedPerDay){
      favouriteDino = dino;
    }
  }
  return favouriteDino;
};

Park.prototype.findSpecies  = function  () {
  let dinosaurType = this.dinosaur
// for (let i = 0; i <this.dinosaurs.length;i++){} --also work
  for (const dino of this.dinosaur){
    if (dino.species !== dinosaurType.species){
      dinosaurType = dino;
    }
  }
  return dinosaurType;
};

Park.prototype.removeDinosaur  = function  (speciesType) {
  const dinoType = [];
  for (const dino of this.dinosaur){
    if (dino.species !== speciesType){
      dinoType.push(dino);
    }
  }
  this.dinosaur = dinoType;
};

Park.prototype.sumTotalGuests = function() {
  let total = 0;
  for (const attracts of this.dinosaur){
    total = total + this.dinosaur.guestsAttractedPerDay
  }
  return total;
};


module.exports = Park;
