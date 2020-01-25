var SHEET_CONFIG = "Config";

var Config = (function() {
  // Public members  
  var config = {};
  config = getConfig();
  return config;
  
  // Gets config values from spreadsheet
  function getConfig() {
    var sheeter = new Sheeter(SHEET_CONFIG);
    var values = sheeter.getValues(2);
    var cfg = [];
    values.forEach(function(value) {
      cfg[value[0]] = value[1];
    });
    return cfg;
  }
})()