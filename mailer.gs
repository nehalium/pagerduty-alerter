var Mailer = (function() {
  // Public members  
  var mailer = {};
  mailer.mail = mail;
  return mailer;
  
  // Private members
  // Sends an email based on the specified params
  function mail(params) {
    var message = {};
    if (Config["debug"]) {
      message = {
        name: Config["mail.from"],
        to: Config["mail.to.debug"],
        subject: "[DEBUG] " + params.subject,
        body: params.body
      };
    }
    else {
      message = {
        name: Config["mail.from"],
        to: params.to,
        cc: Config["mail.cc"],
        subject: params.subject,
        body: params.body
      };
    }
    MailApp.sendEmail(message);
  }
})()
