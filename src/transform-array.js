module.exports = function transform(arr) {
  if (Object.prototype.toString.call(arr) !== "[object Array]") {
    throw new Error("Error");
  }

  if (arr[0] === undefined) {
    return [];
  }

  let discard = false;

  const transformedArr = arr.map((value, i, array) => {
    if (value === "--double-next" && i + 1 !== array.length) {
      return array[i + 1];
    }
    if (value === "--double-prev" && discard !== i - 1) {
      return array[i - 1];
    }

    discard = false;

    if (!discard) {
      if (array[i + 1] !== "--discard-prev" && array[i - 1] !== "--discard-next") {
        discard = false;
        return value;
      } else if (array[i + 1] === "--discard-prev" || array[i - 1] === "--discard-next") {
        discard = i;
        return;
      }
    }
  })

  for (let i = 0; i < transformedArr.length; i++) {
    if (transformedArr[i] === undefined || transformedArr[i] === "--double-prev"
    || transformedArr[i] === "--double-next" || 
    transformedArr[i] === "--discard-next" || 
    transformedArr[i] === "--discard-prev") {
      transformedArr.splice(i, 1);
      i--;
    } 
  }

  return transformedArr;
};