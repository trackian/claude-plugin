---
description: Same as /trackian:download-setup - sign in, choose how answers are written, and choose a first answer.
allowed-tools: Read
---
This is an alias for `/trackian:download-setup`. Its steps live in Trackian and are always up to date. Call `get_command` with `name: "download-setup"`. The returned `reference` describes the setup: the sign-in check, the projects, how answers are written and the first answer; use it to carry out the request.

If the Trackian tools are not available, or `get_command` fails with a sign-in error, do not improvise: Trackian is not signed in yet. In Claude Code, type `/mcp`, pick `plugin:trackian:trackian` and choose Authenticate; in the Claude app, choose Connect on the Trackian connector. Sign in on the Trackian page that opens, then retry. Never ask the user to type a password or any other secret into the chat.
