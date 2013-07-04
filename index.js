module.exports = function() {
  var a = document.createElement('a');
  return typeof a.download !== 'undefined';
}
