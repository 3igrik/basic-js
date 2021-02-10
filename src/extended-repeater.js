module.exports = function repeater(str, options) {
  str = String(str);
  
  if (options.hasOwnProperty("additionRepeatTimes") && 
  typeof(options.additionRepeatTimes) === "number" &&
  options.additionRepeatTimes > 0) {
    let additionSep = options.hasOwnProperty("additionSeparator") ? 
    options.additionSeparator : "|";
    let additionWord = "";

    for (let i = 0; i < options.additionRepeatTimes; i++) {
      str += options.addition;
      if (i !== options.additionRepeatTimes - 1) {
        str += options.additionSeparator;
      }
    }
  }

  let resWord = "";
  if (options.hasOwnProperty("repeatTimes") && 
  typeof(options.repeatTimes) === "number" && 
  options.repeatTimes > 0) {
    let sep = options.hasOwnProperty("separator") ? 
    options.separator : "+";
    
    for (let i = 0; i < options.repeatTimes; i++) {
      resWord += str;

      if  (i !== options.repeatTimes - 1) {
        resWord += sep;
      }
    }
  }

  if (resWord === "" && options.hasOwnProperty("addition")) {
    resWord = str + options.addition;
  }

  return resWord;
};