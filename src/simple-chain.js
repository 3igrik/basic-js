const chainMaker = {
  values: [],

  getLength() {
    return this.values.length;
  },

  addLink(value) {
    if (value === undefined) {
      this.values.push(" ")
      return this;
    }
    this.values.push(String(value));
    return this;
  },

  removeLink(position) {
    if (typeof(position) !== "number" || position < 1 || position > this.values.length) {
      this.values.length = 0;
      throw new Error("Error!")
    }

    this.values.splice(position - 1, 1)
    return this;
  },

  reverseChain() {
    if (this.values !== undefined) {
      this.values = this.values.reverse();
    }
    return this;
  },

  finishChain() {
    let res = "( " + this.values.join(" )~~( ") + " )";
    this.values.length = 0;
    
    return res;
  }
};

module.exports = chainMaker;
