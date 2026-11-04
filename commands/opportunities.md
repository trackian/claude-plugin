---
description: Where to grow.
allowed-tools: Read, AskUserQuestion
---
This command's steps live in Trackian and are always up to date. Call `get_command` with `name: "opportunities"` (pass `projectRef` in `args` if the user named a project). The returned `reference` describes how Trackian approaches this workflow and which tools supply each piece of evidence; use it to carry out the request.

Before you start: answer the way the `trackian` skill sets out. The reference is shared with Trackian's downloadable agent folder, so read its paths the plugin way: the saved-profile steps do not apply (this plugin keeps no saved profile; apply any choices the user made earlier in this conversation), `reports/` is a `trackian-reports/` folder in the current working directory, and a command named `/<name>` is `/trackian:<name>`.

If the Trackian tools are not available, or `get_command` fails with a sign-in error, do not improvise: the plugin is not signed in yet. Follow the `trackian-get-started` skill (type `/mcp`, pick `plugin:trackian:trackian`, choose Authenticate), then retry.
