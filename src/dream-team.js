module.exports = function createDreamTeam(members) {
  if (members === null || !members || members[0] === undefined) {
    return false;
  }

  return members.filter(element => {
    if (typeof(element) === "string") {
      return element;
    }
  }).map(el => {
    return el.trim()[0].toUpperCase();
  }).sort().join('');
};