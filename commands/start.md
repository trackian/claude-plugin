---
description: Alias for /trackian:setup - sign in, choose how answers are written, and get a first answer.
allowed-tools: mcp__plugin_trackian_trackian, Read, Write, Edit, AskUserQuestion
---
This is an alias for `/trackian:setup`. Follow the `trackian-get-started` skill from the top: check the sign-in, show the projects, run the first-run questions from `get_command` with `name: "start"` and save the profile to `${CLAUDE_PLUGIN_DATA}/profile.md`, then offer one first answer.

Never ask for an API key, token or password in the chat.
