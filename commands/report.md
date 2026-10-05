---
description: Generate a polished, branded report (HTML or PDF) from your Trackian data and save it to trackian-reports/.
allowed-tools: mcp__plugin_trackian_trackian, Read, Write, Edit, AskUserQuestion
---
This command's steps live in Trackian and are always up to date. Call `get_command` with `name: "report"` (pass `format` in `args` if the user already said HTML or PDF). The returned `reference` describes how Trackian builds this report; when it is written, give the user the saved path.

Before you start: if `${CLAUDE_PLUGIN_DATA}/profile.md` exists, read it and follow it, and answer the way the `trackian` skill sets out. The reference is shared with Trackian's downloadable agent folder, so read its paths the plugin way: `custom/profile.md` is `${CLAUDE_PLUGIN_DATA}/profile.md`, `reports/` is a `trackian-reports/` folder in the current working directory, and a command named `/<name>` is `/trackian:<name>`.

If the Trackian tools are not available, or `get_command` fails with a sign-in error, do not improvise: the plugin is not signed in yet. Follow the `trackian-get-started` skill (type `/mcp`, pick `plugin:trackian:trackian`, choose Authenticate), then retry.
