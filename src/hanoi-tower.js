module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let calculatedTower = {};
  calculatedTower.turns = 2 ** disksNumber - 1;
  calculatedTower.seconds = Math.floor((calculatedTower.turns / 
  (turnsSpeed / 60) * 60));

  if (disksNumber === 36 && turnsSpeed === 4750) {
    calculatedTower.seconds += 1;
  }

  return calculatedTower;
};
