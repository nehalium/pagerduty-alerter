function Sheeter(sheetName) {
  // Returns a reference to the specified sheet
  function getSheetReference(sheetName) {
    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    return spreadsheet.getSheetByName(sheetName);
  }
  
  // The original sheet name
  this.sheetName = sheetName;
  
  // A reference to the sheet
  this.sheet = getSheetReference(sheetName);
    
  // Gets the values of the cells in the sheet as a 2-dim array
  this.getValues = function(numColumns) {
    var numRows = this.sheet.getLastRow();
    if (numRows == 0) return;
    return this.sheet.getRange(1, 1, numRows, numColumns).getValues();
  };
    
  // Clears the contents of the specified sheet
  this.clear = function() {
    this.sheet.clear();
  };
      
  // Writes a table of rows in the specified sheet
  this.writeTable = function(table) {
    for (var i=0; i<table.length; i++) {
      this.sheet.appendRow(table[i]);
    }
  };
    
  // Writes an array as a row in the specified sheet
  this.writeRow = function(row) {
    this.sheet.appendRow(row);
  };
}