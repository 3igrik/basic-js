module.exports = class DepthCalculator {
  calculateDepth(arr) {
    return Array.isArray(arr) ? 1 + arr.reduce((acc, el) => {
      return Math.max(acc, this.calculateDepth(el))
    }, 0) : 0;
  }
};