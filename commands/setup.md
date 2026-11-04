---
description: Set up Trackian - sign in, see your projects and connected platforms, choose how answers are written, and get a first answer.
allowed-tools: AskUserQuestion
---
Follow the `trackian-get-started` skill from the top:

1. Check the sign-in with `get_connected_account`. If the Trackian tools are missing or the call fails with a sign-in error, walk the user through `/mcp` > `plugin:trackian:trackian` > Authenticate (the browser page also creates a Trackian account for someone who has none), then retry.
2. Show their projects with `list_projects` and say which platforms still need connecting in the Trackian app.
3. Run the first-run questions from `get_command` with `name: "start"` and apply the answers for the rest of this conversation. Nothing is saved: this plugin keeps no profile file, so skip the saved-profile step the reference names and say in one line that the choices hold for this conversation.
4. Offer one first answer for what is connected and run it on a yes.

Never ask the user to type a password or any other secret into the chat.
