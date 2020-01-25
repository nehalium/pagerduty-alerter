# pagerduty-alerter

## Installation

1. Create Google Sheet
1. Rename the first tab "Data"
1. Create second tab and name it "Config"
1. Use the first column as your config keys and the second column for config values:
    1. pagerduty.token [Enter your API key here]
    1. mail.from [Name of email sender]
    1. mail.cc [Email addresses to put in cc]
    1. mail.to.debug [Email recipient when debugging]
    1. debug [TRUE|FALSE]
1. Go to Tools > Script editor
1. Pull code from repo
1. Run service.gs > main
