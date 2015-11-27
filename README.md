# TamperMonkey script to turn HelpScout case numbers into links

Motivation
----------
Our JIRA installation has some integration with [HelpScout](https://www.helpscout.net/)
which adds HelpScout case numbers as a custom "Help Scout ID" field to JIRA issues (space-delimited).
While this is a good start (and used by some other custom scripts), it would be more useful
if I could just click on those case numbers in order to see them in HelpScout.

Unfortunately, we are using Atlassian Cloud version of JIRA, so we cannot achieve this
via custom JIRA plugin. So, the only way would be to write a browser plugin or use some
existing plugin to "enhance" the web page. I used 
[Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en) but you can also use other [equivalent](http://appcrawlr.com/app/uberGrid/652164).

You could also use it as an example of how to do HTML manipulation on some custom JIRA fields.

Quick Start
-----------

Grab the script from `jira-helpscout-link.js`, add it to Tampermonkey and customize it for your needs.
The only customization that you HAVE to do is replacing `your.jira.host` text with your actual JIRA host name.

You Need More Help?
-------------------

1. Install [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en)
2. Open up Tampermonkey and create a new script
3. Copy paste the script from `jira-helpscout-link.js` or link it with `@requires` from your userscript definition.
4. **Modify @include URL in the header to match the URL of your JIRA installation**
5. Open a JIRA issue with "Help Scout ID" custom field and see it in action!
