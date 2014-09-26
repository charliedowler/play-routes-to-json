module.exports = function(raw) {
  var lines = raw.split('\n');
  var newLines = [];
  lines.forEach(function(line) {
    line = line.trim();
    line = line.replace(/#.*/, '');
    var newLine = [];
    line.split(' ').forEach(function(ls) {
      if (ls != '') {
        newLine.push(ls)
      }
    });
    if (newLine.length) {
      var str = '';
      for (var i = 2; i < newLine.length; i++) {
        str += newLine[i];
      }
      newLine[2] = str;
      newLine.splice(3, newLine.length - 3);
      newLines.push({type: newLine[0], path: newLine[1], controller: newLine[2]});
    }
  });
  return newLines;
};