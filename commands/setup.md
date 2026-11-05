---
description: Set up Trackian - sign in, see your projects and connected platforms, choose how answers are written, and get a first answer.
allowed-tools: mcp__plugin_trackian_trackian, Read, Write, Edit, AskUserQuestion
---
Follow the `trackian-get-started` skill from the top:

1. Check the sign-in with `get_connected_account`. If the Trackian tools are missing or the call fails with a sign-in error, walk the user through `/mcp` > `plugin:trackian:trackian` > Authenticate (the browser page also creates a Trackian account for someone who has none), then retry.
2. Show their projects with `list_projects` and say which platforms still need connecting in the Trackian app.
3. Run the first-run questions from `get_command` with `name: "start"`, and save the profile to `${CLAUDE_PLUGIN_DATA}/profile.md` (this plugin's place for the `custom/profile.md` the reference names). If a profile already exists there, show it and ask what to change instead of starting over.
4. Offer one first answer for what is connected and run it on a yes.

Never ask for an API key, token or password in the chat.
