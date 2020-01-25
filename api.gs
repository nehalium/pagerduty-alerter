var API = {
  pagerduty: {
    url: 'https://api.pagerduty.com',
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