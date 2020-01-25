var Writer = (function() {
  // Public members  
  var writer = {};
  writer.write = write;
  return writer;
  
  // Private members
  function write(data) {
    var sheeter = new Sheeter(Settings.sheets.data);
    sheeter.clear();
    sheeter.writeRow(data.headers);
    sheeter.writeTable(data.table);
  }
})()