// Date manipulation utilities
var DateUtil = {
  // Set the time for a specified date to midnight
  setToMidnight: function(forDate) {
    forDate.setHours(0,0,0,0);
  },
  
  // Set the time for a specified date to 23:59:59
  setTo235959: function(forDate) {
    forDate.setHours(0,0,-1,0);
  },
  
  // Adds the specified number of days to the date
  addDays: function(fromDate, numberOfDays) {
    var newDate = fromDate;
    newDate.setDate(newDate.getDate() + numberOfDays);
    return newDate;
  },
  
  // Sets the day of the month for a specified date
  setDays: function(forDate, days) {
  	return new Date(forDate.setUTCDate(days));
  },
  
  // Returns the difference in seconds between two dates
  dateDiff: function(date1, date2) {
    var time1 = new Date(date1).getTime();
    var time2 = new Date(date2).getTime();
    return parseInt((time2 - time1) / 1000);
  },
  
  // Adds the specified number of months to the date
  addMonths: function(fromDate, numberOfMonths, newDay) {
    var newDate = new Date(fromDate.setMonth(fromDate.getMonth() + numberOfMonths));
    if (newDay) {
      return this.setDays(newDate, newDay);
    }
    else {
      return newDate;
    }
  },
  
  // Returns the current date and time and converts it to UTC
  getCurrentDateTimeUtc: function() {
    return this.formatDateTimeUtc(new Date());
  },
  
  // Returns the current date and time based on the local time zone
  getCurrentDateTimeLocal: function() {
    return this.formatDateTimeLocal(new Date());
  },
  
  // Returns the current date and converts it to UTC
  getCurrentDateUtc: function() {
    return this.formatDateUtc(new Date());
  },
  
  // Returns the current date based on the local time zone
  getCurrentDateLocal: function() {
    return this.formatDateLocal(new Date());
  },
  
  // Returns a date in UTC based on a date string
  convertToDateTimeUtc: function(dateString) {
    return DateUtil.formatDateTimeUtc(new Date(dateString));
  },
  
  // Returns a date in the local time zone based on a date string
  convertToDateTimeLocal: function(dateString) {
    return DateUtil.formatDateTimeLocal(new Date(dateString));
  },
  
  // Formats a date and time and converts it to UTC
  // e.g. 2018-09-12T12:00:00.000Z
  formatDateTimeUtc: function(date) {
    return Utilities.formatDate(date, this.getUtcTimeZone(), this.getDateAndTimeFormat());
  },
  
  // Formats a date and time based on the local time zone
  // e.g. 2018-09-12T12:00:00.000
  formatDateTimeLocal: function(date) {
    return Utilities.formatDate(date, this.getLocalTimeZone(), this.getDateAndTimeFormat());
  },
  
  // Formats a date and converts it to UTC
  // e.g. 2018-09-12
  formatDateUtc: function(date) {
    return Utilities.formatDate(date, this.getUtcTimeZone(), this.getDateFormat());
  },
  
  // Formats a date based on the local time zone
  // e.g. 2018-09-12
  formatDateLocal: function(date) {
    return Utilities.formatDate(date, this.getLocalTimeZone(), this.getDateFormat());
  },
  
  // Returns format string for date
  getDateFormat: function() {
    return 'yyyy-MM-dd';
  },
  
  // Returns format string for date and time
  getDateAndTimeFormat: function() {
    return 'yyyy-MM-dd\'T\'HH:mm:ss.SSS\'Z\'';
  },
  
  // Returns the UTC time zone
  getUtcTimeZone: function() {
    return 'Etc/GMT';
  },

  // Returns the local time zone
  getLocalTimeZone: function() {
    return SpreadsheetApp.getActiveSpreadsheet().getSpreadsheetTimeZone();
  }
}