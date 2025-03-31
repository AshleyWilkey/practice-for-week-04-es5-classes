Array.prototype.isEqual = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== this[i]) {
      return false;
    }
  }
  return true;
};
