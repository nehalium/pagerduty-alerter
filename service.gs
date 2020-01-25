// Main entry point
function main() {
  load(new Date());
}

// Gets data from API and loads it into spreadsheet
function load(date) {
  var data = PagerDuty.getData(date);
  Writer.write(data);
  PDMailer.mail(data);
}