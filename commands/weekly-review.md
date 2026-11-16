---
description: The week in one summary.
allowed-tools: Read, AskUserQuestion
---
This command's steps live in Trackian and are always up to date. Call `get_command` with `name: "weekly-review"` (put `projectRef` in `args` if the user named a project). The returned `reference` describes how Trackian approaches this workflow and which tools supply each piece of evidence; use it to carry out the request.

Before you start: if `.trackian/profile.md` exists in the current working directory, read it and follow it, and answer the way the `trackian` skill sets out. The reference is shared with Trackian's downloadable agent folder, so read its paths the plugin way: `custom/profile.md` is `.trackian/profile.md` in the current working directory, `reports/` is a `trackian-reports/` folder in the current working directory, and a command named `/<name>` is `/trackian:<name>`. In the Claude app (claude.ai, Claude Desktop or mobile chat) there is no working directory: skip the profile file and use what the user said in this conversation, and give a report or export in the chat (as a file to download when you can create one) instead of saving it to `trackian-reports/`.

If the Trackian tools are not available, or `get_command` fails with a sign-in error, do not improvise: Trackian is not signed in yet. Follow the sign-in step of the `trackian-get-started` skill (it differs between Claude Code and the Claude app), then retry.
