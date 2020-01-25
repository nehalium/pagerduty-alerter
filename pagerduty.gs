var PagerDuty = (function() {
  // Public members  
  var pagerduty = {};
  pagerduty.getData = getData;
  return pagerduty;
  
  // Private members
  var config = getConfig();
  
  function getData(forDate) {
    var items = [];
    var result = executeQuery(getIncidentsQuery());
    for (var i=0; i<result.incidents.length; i++) {
      items.push(result.incidents[i]);
    }
    
    return {
      headers: buildHeaders(),
      table: buildTable(items)
    };
  }
  
  // Returns an array of table headers
  function buildHeaders() {
    return [
      '#',
      'Service',
      'Created On',
      'Title',
      'Urgency',
      'ID',
      'URL',
      'Status',
      'Assigned To',
      'Assigned Email',
      'Alerts Triggered',
      'Alerted Resolved',
      'Timestamp'
    ];
  }
  
  // Returns a table based on the items in the payload
  function buildTable(items) {
    var table = [];
    var row = [];
    var timeStamp = DateUtil.getCurrentDateTimeUtc();
    for (var i=0; i<items.length; i++) {
      row = [];
      row.push(items[i].incident_number); // #
      row.push(items[i].service.summary); // Service
      row.push(DateUtil.convertToDateTimeLocal(items[i].created_at));
      row.push(items[i].title); // Title
      row.push(items[i].urgency); // Urgency
      row.push(items[i].id); // ID
      row.push(items[i].html_url); // URL
      row.push(items[i].status); // Status
      row.push(items[i].assignments[0].assignee.name); // Assigned
      row.push(items[i].assignments[0].assignee.email); // Assigned Email
      row.push(items[i].alert_counts.triggered); // Alerts Triggered
      row.push(items[i].alert_counts.resolved); // Alerts Resolved
      row.push(timeStamp); // Timestamp
      table.push(row);
    }
    return table;
  }
  
  // Calls the API and returns a JSON result
  function executeQuery(query) {
    var options = {
      method: 'GET',
      muteHttpExceptions: true,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/vnd.pagerduty+json;version=2',
        'Authorization': 'Token token=' + Config['pagerduty.token']
      }
    };
    var response = UrlFetchApp.fetch(API.pagerduty.url + query, options);
    var json = response.getContentText();
    return JSON.parse(json);
  }
  
  // Returns the incidents query for the API request
  function getIncidentsQuery() {
    var query = API.pagerduty.paths.incidents;
    query += '?sort_by=created_at:DESC';
    query += '&statuses%5B%5D=' + API.pagerduty.statuses.triggered;
    query += '&statuses%5B%5D=' + API.pagerduty.statuses.acknowledged;
    query += '&include%5B%5D=' + API.pagerduty.include.assignees;
    query += '&time_zone=UTC';
    return query;
  }
})()