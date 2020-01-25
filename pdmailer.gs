var PDMailer = (function() {
  // Public members  
  var pdmailer = {};
  pdmailer.mail = mail;
  return pdmailer;
  
  // Private members
  // Returns the subject of the email
  function buildSubject(row) {
    return "PagerDuty Alert " + row[7] + " for " + row[1];
  }
  
  // Returns the body of the email
  function buildBody(row) {
    return "A PagerDuty alert for " + row[1] +
      " has been " + row[7] +
      " and assigned to " + row[8] +
      ". Please follow up and resolve it here: " + row[6];
  }
  
  // Sends a notification to the assignee
  function mail(data) {
    var params = {};
    for (var i=0; i<data.table.length; i++) {
      params = {
        to: data.table[i][9],
        subject: buildSubject(data.table[i]),
        body: buildBody(data.table[i])
      };
      Mailer.mail(params);
    }
  }
})()