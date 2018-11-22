const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const startLocations = this.journeys.map(journey => journey.startLocation )
  return startLocations;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const endLocations = this.journeys.map(journey => journey.endLocation)
  return endLocations;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const journeysByTransport = this.journeys.filter(journey => journey.transport === transport)
  return journeysByTransport;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const journeysByMinDistance = this.journeys.filter(journey => journey.distance > minDistance)
  return journeysByMinDistance;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const journeyTotalDistance = this.journeys.reduce(total, journey =>
    total + journey.distance, 0)
    return journeyTotalDistance;
  };

  Traveller.prototype.getUniqueModesOfTransport = function () {

  };


  module.exports = Traveller;
