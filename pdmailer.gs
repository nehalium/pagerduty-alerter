var PDMailer = (function() {
  // Public members  
  var pdmailer = {};
  pdmailer.mail = mail;
  return pdmailer;
  
  // Private members
  // Returns the subject of the email for individual emails
  function buildRecipientList(table) {
    var recipients = [];
    for (var i=0; i<table.length; i++) {
      recipients.push(table[i][9]);
    }
    return recipients.join(',');
  }
  
  // Returns the subject of the email for individual emails
  function buildSubjectAll(table) {
    return "PagerDuty Alert: " + table.length + " Incidents";
  }
  
  // Returns the body of the email for individual emails
  function buildBodyAll(table) {
    var body = "The following " + table.length + " PagerDuty alerts are pending:\n\n";
    for (var i=0; i<table.length; i++) {
      body += "-----------------------------------\n";
      body += 
        "Service: " + table[i][1] + "\n" + 
        "Title: " + table[i][3] + "\n" + 
        "URL: " + table[i][6] + "\n" + 
        "Status: " + table[i][7] + "\n" + 
        "Assigned: " + table[i][8] + "\n";
    }
    body += "-----------------------------------\n";
    body += "\nThank you"
    return body;
  }
  
  // Returns the subject of the email for individual emails
  function buildSubjectIndividual(row) {
    return "PagerDuty Alert " + row[7] + " for " + row[1];
  }
  
  // Returns the body of the email for individual emails
  function buildBodyIndividual(row) {
    return "A PagerDuty alert for " + row[1] +
      " has been " + row[7] +
      " and assigned to " + row[8] +
      ". Please follow up and resolve it here: " + row[6];
  }
  
  // Sends notifications
  function mail(data) {
    mailIndividually(data);
  }
  
  // Sends a single notification to all assignees
  function mailAll(data) {
    var params = {
      to: buildRecipientList(data.table),
      subject: buildSubjectAll(data.table),
      body: buildBodyAll(data.table)
    };
    Mailer.mail(params);
  }
  
  // Sends an individual notification to each assignee
  function mailIndividually(data) {
    var params = {};
    for (var i=0; i<data.table.length; i++) {
      params = {
        to: data.table[i][9],
        subject: buildSubjectIndividual(data.table[i]),
        body: buildBodyIndividual(data.table[i])
      };
      Mailer.mail(params);
    }
  }
})()