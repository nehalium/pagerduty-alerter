// Global constants
var SHEET_DATA = "Data";

var Writer = (function() {
  // Public members  
  var writer = {};
  writer.write = write;
  return writer;
  
  // Private members
  function write(data) {
    var sheeter = new Sheeter(SHEET_DATA);
    sheeter.clear();
    sheeter.writeRow(data.headers);
    sheeter.writeTable(data.table);
  }
})()