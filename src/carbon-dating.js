const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (sampleActivity === undefined ||
     isNaN(+sampleActivity) ||
     +sampleActivity > HALF_LIFE_PERIOD ||
     +sampleActivity < 1 || typeof(sampleActivity) !== String ||
     !isInteger(+sampleActivity)) {
    return false;
  }

  return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / 
         (0.693 / HALF_LIFE_PERIOD));
};
