var API = {
  pagerduty: {
    url: 'https://api.pagerduty.com',
    auth_sig: 'Token token=',
    accept: 'application/vnd.pagerduty+json;version=2',
    content_type: 'application/json',
    paths: {
      incidents: '/incidents',
      users: '/users'
    },
    statuses: {
      triggered: 'triggered',
      acknowledged: 'acknowledged',
      resolved: 'resolved'
    },
    include: {
      users: 'users',
      services: 'services',
      teams: 'teams',
      acknowledgers: 'acknowledgers',
      assignees: 'assignees',
      teams: 'teams'
    }
  }
};