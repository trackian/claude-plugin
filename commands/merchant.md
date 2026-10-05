---
description: Your Google Shopping feed - what Google has blocked, what that costs in ad spend, whether your feed is being pulled, and where your prices sit. Changes preview first and need your OK.
allowed-tools: mcp__plugin_trackian_trackian, Read, AskUserQuestion
---
This command's steps live in Trackian and are always up to date. Call `get_command` with `name: "merchant"` (pass `projectRef` and `focus` in `args` if the user named a project or said what they care about - health, performance, prices or feed). The returned `reference` describes how Trackian approaches this workflow and which tools supply each piece of evidence; use it to carry out the request.

Before you start: if `${CLAUDE_PLUGIN_DATA}/profile.md` exists, read it and follow it, and answer the way the `trackian` skill sets out. The reference is shared with Trackian's downloadable agent folder, so read its paths the plugin way: `custom/profile.md` is `${CLAUDE_PLUGIN_DATA}/profile.md`, `reports/` is a `trackian-reports/` folder in the current working directory, and a command named `/<name>` is `/trackian:<name>`.

If the Trackian tools are not available, or `get_command` fails with a sign-in error, do not improvise: the plugin is not signed in yet. Follow the `trackian-get-started` skill (type `/mcp`, pick `plugin:trackian:trackian`, choose Authenticate), then retry.
